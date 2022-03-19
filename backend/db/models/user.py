from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import relationship
from sqlalchemy_utils import EmailType

from backend.db.db import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    uid = Column(UUID(as_uuid=True), nullable=False, unique=True, index=True)
    name = Column(String, nullable=False)
    email = Column(EmailType, nullable=False)
    contributor_scopes = Column(ARRAY(String))
    shopping_lists = relationship("ShoppingList", back_populates="creator", cascade="all, delete")
    password = Column(String, nullable=False)
