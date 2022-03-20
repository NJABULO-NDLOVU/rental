from typing import List
from uuid import UUID, uuid4

from sqlalchemy import delete, update
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from backend.data_models import response
from backend.db.models.user import User


async def get_user(session: AsyncSession, user_uid: UUID) -> User:
    stmt = select(User).where(User.uid == user_uid)
    results = await session.execute(stmt)

    return results.scalars().first()
