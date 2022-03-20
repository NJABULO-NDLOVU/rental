from typing import List
from uuid import UUID, uuid4

from sqlalchemy import delete, update
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import joinedload, selectinload

from backend.data_models import response
from backend.db.models.item import Item
from backend.db.models.shopping_list import ShoppingList


def create_item(name: str) -> Item:
    return Item(name=name, uid=uuid4())


async def create_list(
    session: AsyncSession, shopping_list: response.ShoppingList
) -> response.ShoppingList:
    items = [create_item(item.name) for item in shopping_list.items]

    shopping_list = ShoppingList(name=shopping_list.name, items=items, uid=uuid4(), user_id=1)
    session.add(shopping_list)
    await session.commit()

    return shopping_list


async def get_all_lists(session: AsyncSession) -> List[response.ShoppingList]:
    stmt = select(ShoppingList).options(selectinload(ShoppingList.items))
    results = await session.execute(stmt)

    return results.scalars().all()


async def delete_list(session: AsyncSession, list_uid: UUID) -> None:
    stmt = delete(ShoppingList).where(ShoppingList.uid == list_uid)
    results = await session.execute(stmt)

    await session.commit()

    return results


async def get_list(session: AsyncSession, list_uid: UUID) -> response.ShoppingList:
    stmt = (
        select(ShoppingList)
        .where(ShoppingList.uid == list_uid)
        .options(joinedload(ShoppingList.items))
    )
    results = await session.execute(stmt)

    return results.scalars().first()


async def add_item(
    session: AsyncSession, list_uid: UUID, item: response.Item
) -> response.ShoppingList:
    shopping_list = await get_list(session, list_uid)
    shopping_list.items.append(create_item(item.name))

    await session.commit()

    return shopping_list


async def get_item(session: AsyncSession, item_uid: UUID) -> response.Item:
    stmt = select(Item).where(Item.uid == item_uid)
    results = await session.execute(stmt)

    return results.scalars().first()


async def update_item(session: AsyncSession, item_uid: UUID, item: response.Item) -> None:
    stmt = (
        update(Item).where(Item.uid == item_uid).values(name=item.name, is_checked=item.is_checked)
    ).returning(Item.uid)
    results = await session.execute(stmt)

    await session.commit()

    return results


async def delete_item(session: AsyncSession, item_uid: UUID) -> None:
    stmt = delete(Item).where(Item.uid == item_uid)
    results = await session.execute(stmt)

    await session.commit()

    return results
