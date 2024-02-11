from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from backend.tennis.afterwork.random_choice import RandomMatchs
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.post("/tennis/afterwork/new_matchs")
async def random(request: Request):
    data = await request.json()
    nb_joueurs = data.get("nb_joueurs")
    terrain = data.get("terrain")  
    return RandomMatchs.get_random_matchs(int(nb_joueurs), terrain)
