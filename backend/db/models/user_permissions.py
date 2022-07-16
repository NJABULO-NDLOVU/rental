from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.dialects.postgresql import ARRAY

from backend.db.db import Base


class UserPermissions(Base):
    __tablename__ = "user_permissions"

    id = Column(Integer, primary_key=True)
    contributor_scopes = Column(ARRAY(String))
    user_id = Column(Integer, ForeignKey("user.id"))
    shopping_list_id = Column(Integer, ForeignKey("shopping_list.id"))
