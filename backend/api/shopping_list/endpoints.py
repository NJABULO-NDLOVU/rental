from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from backend.controller.shopping_list import (
    create_list,
    delete_list,
    get_all_lists,
    get_list,
)
from backend.data_models.response import ShoppingList
from backend.db.db import get_session

router = APIRouter()


@router.post(
    "/shopping",
    summary="Create shopping list",
    response_model=ShoppingList,
)
async def create_shopping_list(
    shopping_list: ShoppingList, session: AsyncSession = Depends(get_session)
) -> ShoppingList:
    shop_list = await create_list(session, shopping_list)

    return shop_list


@router.get(
    "/shopping/",
    summary="Get all shopping lists",
    response_model=List[ShoppingList],
)
async def get_shopping_lists(session: AsyncSession = Depends(get_session)) -> List[ShoppingList]:
    shop_lists = await get_all_lists(session)

    return shop_lists


@router.get(
    "/shopping/{uid}",
    summary="Get shopping list",
    status_code=status.HTTP_200_OK,
    response_model=ShoppingList,
)
async def get_shopping_list(
    uid: UUID, session: AsyncSession = Depends(get_session)
) -> ShoppingList:
    shop_lists = await get_list(session, uid)

    return shop_lists


@router.delete(
    "/shopping/{uid}",
    summary="Delete shopping list",
)
async def delete_shopping_list(uid: UUID, session: AsyncSession = Depends(get_session)) -> None:
    await delete_list(session, uid)


