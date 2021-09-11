from typing import Dict

from fastapi import APIRouter, status

router = APIRouter()


@router.get(
    "/health",
    summary="Health check",
    status_code=status.HTTP_200_OK,
    response_model=Dict[str, str],
)
async def health() -> Dict[str, str]:
    return {"status": "OK"}
