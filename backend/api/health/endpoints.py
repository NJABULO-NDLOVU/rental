from typing import Any, Dict

from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.exc import OperationalError
from sqlalchemy.ext.asyncio import AsyncSession

from backend.api.auth import HasListAccess, UserAuth
from backend.data_models.response import User
from backend.db.db import get_session, ping_db

router = APIRouter()
user_auth = UserAuth(authorizers=[HasListAccess(["read:list"])])


@router.get(
    "/live",
    summary="Health check",
    status_code=status.HTTP_200_OK,
    response_model=Dict[str, str],
)
async def live_probe(user: User = Depends(user_auth)) -> Dict[str, str]:
    return {"status": "OK", "user": str(user)}


@router.get(
    "/ready",
    summary="Readiness check",
    status_code=status.HTTP_200_OK,
    response_model=Dict[str, Any],
)
async def ready(response: Response, session: AsyncSession = Depends(get_session)) -> Dict[str, Any]:
    response_data = {"db": "PASS"}
    response_status = "OK"

    try:
        await ping_db(session)
    except OperationalError:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        response_data["db"] = "FAIL"
        response_status = "ERROR"

    return {"status": response_status, "data": response_data}
