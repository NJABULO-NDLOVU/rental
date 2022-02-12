from typing import List, Optional

from pydantic import BaseModel


class Item(BaseModel):
    name: str
    is_checked: Optional[bool]


class ShoppingList(BaseModel):
    name: str
    list_items: List[Item]
