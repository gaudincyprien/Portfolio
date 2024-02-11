from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from backend.tennis.afterwork.random_choice import RandomMatchs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.post("/tennis/afterwork/new_matchs")
def random(nb_joueurs: str = Form(...)):
    return RandomMatchs.get_random_matchs(int(nb_joueurs))