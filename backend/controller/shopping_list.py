from typing import List
from uuid import UUID, uuid4

from sqlalchemy import delete
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import joinedload, selectinload

from backend.data_models import response
from backend.db.models.item import Item
from backend.db.models.shopping_list import ShoppingList


async def create_list(
    session: AsyncSession, shopping_list: response.ShoppingList
) -> response.ShoppingList:
    def _create_item(name: str) -> Item:
        return Item(name=name, uid=uuid4())

    items = [_create_item(item.name) for item in shopping_list.items]

    shopping_list = ShoppingList(name=shopping_list.name, items=items, uid=uuid4())
    session.add(shopping_list)
    await session.commit()

    return shopping_list


async def get_all_lists(session: AsyncSession) -> List[response.ShoppingList]:
    stmt = select(ShoppingList).options(selectinload(ShoppingList.items))
    results = await session.execute(stmt)

    return results.scalars().all()


async def delete_list(session: AsyncSession, uid: UUID) -> None:
    stmt = delete(ShoppingList).where(ShoppingList.uid == uid)
    results = await session.execute(stmt)
    print(results)

    await session.commit()

    return results


async def get_list(session: AsyncSession, uid: UUID) -> response.ShoppingList:
    stmt = (
        select(ShoppingList).where(ShoppingList.uid == uid).options(joinedload(ShoppingList.items))
    )
    results = await session.execute(stmt)

    return results.scalars().first()
