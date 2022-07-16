from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from backend.db.models.shopping_list import ShoppingList
from backend.db.models.user import User
from backend.db.models.user_permissions import UserPermissions


async def get_user(session: AsyncSession, user_uid: UUID) -> User:
    stmt = select(User).where(User.uid == user_uid)
    results = await session.execute(stmt)

    return results.scalars().first()


async def get_user_permissions(session: AsyncSession, user: User, shopping_list: ShoppingList) -> UserPermissions:
    stmt = select(UserPermissions).where(
        UserPermissions.user_id == user.id and UserPermissions.shopping_list_id == shopping_list.id
    )
    results = await session.execute(stmt)

    return results.scalars().first()
