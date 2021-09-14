from starlette.config import Config
from starlette.datastructures import CommaSeparatedStrings

# Config will be read from environment variables and/or ".env" files
config = Config(".env")

TESTING = config("TESTING", cast=bool, default=False)

ALLOWED_HOSTS = config(
    "ALLOWED_HOSTS", cast=CommaSeparatedStrings, default=["127.0.0.1", "localhost"]
)

DATABASE_URL = config(
    "DATABASE_URL",
    default=("postgresql+asyncpg://rental_service:dev@localhost:5480/rental_service"),
)
