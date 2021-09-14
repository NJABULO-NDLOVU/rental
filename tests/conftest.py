import asyncio

import pytest
from httpx import AsyncClient
from sqlalchemy_utils import create_database, database_exists, drop_database

from backend.api.app import app
from backend.config import DATABASE_URL
from backend.db.db import Base, engine


@pytest.fixture(scope="package")
def event_loop(request):
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="package")
async def client():
    client = AsyncClient(app=app, base_url="https://rental_service")
    yield client
    await client.aclose()


@pytest.fixture(scope="package")
async def db_setup():
    # Clear the database and recreate it
    if database_exists(DATABASE_URL):  # pragma: no cover
        drop_database(DATABASE_URL)
    create_database(DATABASE_URL)


@pytest.fixture
async def table_setup(db_setup):
    await engine.run_sync(Base.metadata.create_all)
    yield
    await engine.run_sync(Base.metadata.drop_all)
