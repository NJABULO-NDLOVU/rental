from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import UUID

from backend.db.db import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    uid = Column(UUID(as_uuid=True), nullable=False, unique=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
