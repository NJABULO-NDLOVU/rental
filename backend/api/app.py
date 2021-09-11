from fastapi import FastAPI

from backend.api.router import root_router


def create_app() -> FastAPI:
    app = FastAPI(
        title="Rental service",
        description=(
            """
            This is the backend of a rental service,
            resposnsible for storing tenant data. Also run once off functions
            like checking credit score and sending notification about various events.
            """
        ),
        version="0.0.0",
    )

    # setup routes
    app.include_router(root_router)

    return app


app = create_app()
