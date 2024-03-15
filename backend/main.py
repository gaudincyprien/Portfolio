from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import os
print (os.getcwd())
print (os.listdir())
from backend.tennis.afterwork.random_choice import RandomMatchs
from typing import List
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://cypriengaudin.fr"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/home")
async def home():
    return {"message": "Hello World"}

@app.post("/tennis/afterwork/new_matchs")
async def random(request: Request):
    print (request)
    data = await request.json()
    nb_joueurs = data.get("nb_joueurs")
    terrain = data.get("terrain")  
    return RandomMatchs.get_random_matchs(int(nb_joueurs), terrain)

@app.post("/belote/nbjoueurs")
async def belote(request: Request):
    data = await request.json()
    nb_joueurs = data.get("nb_joueurs")
    print (nb_joueurs)
   


if __name__ == "__main__":
    print ("Starting server...")
    uvicorn.run(app, host="0.0.0.0", port=8000)