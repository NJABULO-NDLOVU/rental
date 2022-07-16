#  NOTE: We need to import all models in order for them to be visible to alembic
from backend.db.models.item import Item
from backend.db.models.shopping_list import ShoppingList
from backend.db.models.user import User
from backend.db.models.user_permissions import UserPermissions

__all__ = ["Item", "ShoppingList", "User", "UserPermissions"]
