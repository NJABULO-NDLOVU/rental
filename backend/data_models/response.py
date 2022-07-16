from typing import List, Optional

from pydantic import BaseModel


class Item(BaseModel):
    name: str
    is_checked: Optional[bool]

    class Config:
        orm_mode = True


class ShoppingList(BaseModel):
    name: str
    items: List[Item]

    class Config:
        orm_mode = True


class User(BaseModel):
    name: str

    class Config:
        orm_mode = True
