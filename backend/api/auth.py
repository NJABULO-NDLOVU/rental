from starlette.requests import Request
from starlette import status
from fastapi.exceptions import HTTPException
from backend.controller.user import get_user
from backend.db.db import session_scope

class UserAuth:

    async def __call__(self, request: Request):
        user_uid = request.headers.get("user_uid")
        if user_uid is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not Authenticated")
        
        async with session_scope() as session:
            user = await get_user(session, user_uid)
        print("This works", user)
    
        return user