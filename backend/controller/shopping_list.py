from sqlalchemy.ext.asyncio import AsyncSession

from backend.db.models.item import Item
from backend.db.models.shopping_list import ShoppingList


async def create_list(session: AsyncSession, list_name: str, items: list) -> ShoppingList:
    def _create_item(session: AsyncSession, name: str):
        return Item(name=name)

    items = [_create_item(session, item["name"]) for item in items]
    session.bulk_save_objects(items)
    session.flush()

    shopping_list = ShoppingList(name=list_name, items=items)
    session.add(shopping_list)
    session.add()

    return shopping_list
