import mock
import pytest
from sqlalchemy.exc import OperationalError


@pytest.mark.asyncio
async def test_health(client):
    response = await client.get("/live")

    assert response.status_code == 200
    assert response.json() == {"status": "OK"}


@pytest.mark.asyncio
async def test_readyz_pass(client):
    response = await client.get("/ready")

    assert response.status_code == 200
    assert response.json()

    response_data = response.json()
    assert response_data["status"] == "OK"
    assert all([val == "PASS" for _, val in response_data["data"].items()])


@pytest.mark.asyncio
@mock.patch(
    "backend.api.health.endpoints.ping_db",
    side_effect=OperationalError(None, None, None),
)
async def test_readyz_db_fail(ping_db, client):
    response = await client.get("/ready")

    assert response.status_code == 500

    response_data = response.json()
    assert response_data["status"] == "ERROR"
    assert response_data["data"]["db"] == "FAIL"
