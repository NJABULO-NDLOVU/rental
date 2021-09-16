import uuid
from typing import Any, Generator, cast

from sqlalchemy import orm, select
from sqlalchemy.dialects import postgresql
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.expression import literal_column
from sqlalchemy.types import TypeEngine

from backend.config import DATABASE_URL

# This is here because sqlalchemy-stubs does not support the postgres UUID field
# https://github.com/dropbox/sqlalchemy-stubs/issues/94
PostgreSQLUUID = cast(
    "TypeEngine[uuid.UUID]",
    postgresql.UUID(as_uuid=True),
)

Base = declarative_base()  # pylint: disable=C0103

engine = create_async_engine(DATABASE_URL, echo=True)

# Set up the session factory to be threadsafe
Session = orm.sessionmaker(
    bind=engine, expire_on_commit=False, autoflush=False, class_=AsyncSession
)


async def session_generator() -> Generator[Any, None, None]:
    """Provide a transactional scope around a series of operations."""
    session = await Session()
    try:
        yield session
        session.commit()
    except:  # noqaE722
        session.rollback()
        raise
    finally:
        session.close()


async def get_session() -> AsyncSession:
    async with Session() as session:
        yield session


async def ping_db(session: AsyncSession) -> None:
    """
    Queries the DB with: SELECT 1.
    If there is an error, an exception will be thrown. If the connection was successful, the
    function will return with no error.
    """
    session.execute(select(literal_column("1")))
