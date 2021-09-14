#  NOTE: We need to import all models in order for them to be visible to alembic
from backend.db.models.user import User

__all__ = ["User"]
