from fastapi import APIRouter

from backend.api.health.endpoints import router as health_router
from backend.api.shopping_list.endpoints import router as shopping_list

# Set up routers
root_router = APIRouter()
v1_router = APIRouter()

# general routes (/)
root_router.include_router(health_router, tags=["health"])

# api routes (/v1)
v1_router.include_router(shopping_list, tags=["shopping_list"])
root_router.include_router(v1_router, prefix="/v1")
