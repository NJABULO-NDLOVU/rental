from uuid import uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from backend.db.models.item import Item
from backend.db.models.shopping_list import ShoppingList
from backend.data_models import response


async def create_list(session: AsyncSession, shopping_list: response.ShoppingList) -> response.ShoppingList:
    def _create_item(name: str) -> Item:
        return Item(name=name, uid=uuid4())

    items = [_create_item(item.name) for item in shopping_list.items]

    shopping_list = ShoppingList(name=shopping_list.name, items=items, uid=uuid4())
    session.add(shopping_list)
    await session.commit()

    return shopping_list
