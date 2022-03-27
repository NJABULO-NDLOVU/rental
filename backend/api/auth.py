from typing import Iterable, Optional
from uuid import UUID

from fastapi.exceptions import HTTPException
from starlette import status
from starlette.requests import Request

from backend.controller.shopping_list import get_list
from backend.controller.user import get_user, get_user_permissions
from backend.db.db import session_scope


class UserAuth:
    def __init__(self, authorizers: Iterable["BaseAuthorizer"] = None) -> None:
        self.authorizers = list(authorizers) if authorizers is not None else []

    async def __call__(self, request: Request) -> UUID:
        user_uid = request.headers.get("user_uid")
        if user_uid is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Not Authenticated"
            )

        for authorizer in self.authorizers:
            authorized = await authorizer.authorizer(request)
            if not authorized:
                raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Forbidden")

        return user_uid


class BaseAuthorizer:
    async def authorizer(self, request: Request) -> bool:
        """Checks that given request is authorized"""
        raise NotImplementedError()


class HasListAccess(BaseAuthorizer):
    def __init__(self, scopes: Iterable[str]) -> None:
        self._scopes = set(scopes)

    async def authorizer(self, request: Request) -> bool:
        shopping_list_uid = request.path_params.get("list_uid")
        user_uid = request.headers.get("user_uid")
        async with session_scope() as session:
            shopping_list = await get_list(session, shopping_list_uid)
            if shopping_list is None:
                pass
            user = await get_user(session, user_uid)
            if user is None:
                pass
            user_permissions = await get_user_permissions(session, user, shopping_list)
            scopes = set(user_permissions.contributor_scopes)

            return self._scopes.issubset(scopes)
