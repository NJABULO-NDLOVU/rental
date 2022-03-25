from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends, Header, Request, status
from sqlalchemy.ext.asyncio import AsyncSession

from backend.controller.shopping_list import (
    add_item,
    create_list,
    delete_item,
    delete_list,
    get_all_lists,
    get_item,
    get_list,
    update_item,
)
from backend.controller.user import get_user
from backend.data_models.response import Item, ShoppingList, User
from backend.db.db import get_session, session_scope

router = APIRouter()


@router.post(
    "/lists",
    summary="Create shopping list",
    response_model=ShoppingList,
)
async def create_shopping_list(
    shopping_list: ShoppingList,
    session: AsyncSession = Depends(get_session),
    # user: User = Header(None),
) -> ShoppingList:
    # print(user.name)
    shop_list = await create_list(session, shopping_list)

    return shop_list


@router.get(
    "/lists/",
    summary="Get all shopping lists",
    response_model=List[ShoppingList],
)
async def get_shopping_lists(session: AsyncSession = Depends(get_session)) -> List[ShoppingList]:
    shop_lists = await get_all_lists(session)

    return shop_lists


@router.get(
    "/lists/{list_uid}",
    summary="Get shopping list",
    status_code=status.HTTP_200_OK,
    response_model=ShoppingList,
)
async def get_shopping_list(
    list_uid: UUID, session: AsyncSession = Depends(get_session)
) -> ShoppingList:
    shop_lists = await get_list(session, list_uid)

    return shop_lists


@router.delete(
    "/lists/{list_uid}",
    summary="Delete shopping list",
)
async def delete_shopping_list(
    list_uid: UUID, session: AsyncSession = Depends(get_session)
) -> None:
    await delete_list(session, list_uid)


@router.post(
    "/lists/{list_uid}/items",
    summary="Adding an item to a list.",
    response_model=ShoppingList,
)
async def add_item_to_list(
    item: Item, list_uid: UUID, session: AsyncSession = Depends(get_session)
) -> ShoppingList:
    shop_list = await add_item(session, list_uid, item)

    return shop_list


@router.put("/shopping/{uid}/update_item", summary="Adding an item to a list.", response_model=Item)
async def update_item_in_list(
    item: Item, uid: UUID, session: AsyncSession = Depends(get_session)
) -> Item:
    await update_item(session, uid, item)
    item = await get_item(session, uid)

    return item


@router.delete(
    "/items/{uid}",
    summary="Delete shopping list",
)
async def delete_item_in_list(uid: UUID, session: AsyncSession = Depends(get_session)) -> None:
    await delete_item(session, uid)
