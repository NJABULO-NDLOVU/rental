from typing import Callable
from fastapi import Depends
from fastapi import FastAPI

# Set up our OIDC
from fastapi_oidc import IDToken
from fastapi_oidc import get_auth

OIDC_config = {
    "client_id": "0oa1e3pv9opbyq2Gm4x7",
    # Audience can be omitted in which case the aud value defaults to client_id
    # "audience": "https://yourapi.url.com/api",
    "base_authorization_server_uri": "https://dev-74ktqn43.us.auth0.com",
    "issuer": "dev-74ktqn43.us.auth0.com",
    "signature_cache_ttl": 3600,
}

authenticate_user: Callable = get_auth(**OIDC_config)

app = FastAPI()

@app.get("/protected")
def protected(id_token: IDToken = Depends(authenticate_user)):
    return {"Hello": "World", "user_email": id_token.email}