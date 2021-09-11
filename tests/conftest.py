import asyncio

import pytest
from httpx import AsyncClient

from backend.api.app import app


@pytest.fixture(scope="module")
def event_loop(request):
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="module")
async def client():
    client = AsyncClient(app=app, base_url="https://rental_service")
    yield client
    await client.aclose()
