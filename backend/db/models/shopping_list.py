from sqlalchemy import Column, DateTime, Integer, String, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from backend.db.db import Base


class ShoppingList(Base):
    __tablename__ = "shopping_list"

    id = Column(Integer, primary_key=True)
    uid = Column(UUID(as_uuid=True), nullable=False, unique=True, index=True)
    last_updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
    name = Column(String, nullable=False)
    items = relationship(
        "Item", back_populates="shopping_list", cascade="all, delete", lazy="joined"
    )
