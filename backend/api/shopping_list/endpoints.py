from typing import Any, Dict

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from backend.data_models.response import ShoppingList
from backend.controller.shopping_list import create_list
from backend.db.db import get_session

router = APIRouter()


@router.post(
    "/shopping",
    summary="Create shopping list",
    status_code=status.HTTP_200_OK,
    response_model=ShoppingList,
)
async def create_shopping_list(
    shopping_list: ShoppingList, session: AsyncSession = Depends(get_session)
) -> ShoppingList:
    shopping_list = shopping_list.dict()
    print(shopping_list)
    breakpoint()
    shop_list = create_list(session, shopping_list["name"], shopping_list["list_items"])

    return shop_list
