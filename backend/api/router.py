from fastapi import APIRouter

from backend.api.health.endpoints import router as health_router

# Set up routers
root_router = APIRouter()

# general routes (/)
root_router.include_router(health_router, tags=["health"])
