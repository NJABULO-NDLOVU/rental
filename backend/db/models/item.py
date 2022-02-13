from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from backend.db.db import Base


class Item(Base):
    __tablename__ = "item"

    id = Column(Integer, primary_key=True)
    uid = Column(UUID(as_uuid=True), nullable=False, unique=True, index=True)
    name = Column(String, nullable=False)
    is_checked = Column(Boolean, default=False)
    shopping_list_id = Column(Integer, ForeignKey("shopping_list.id"))
    shopping_list = relationship("ShoppingList", back_populates="items")
