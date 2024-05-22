from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
try:
    from backend.belote.game import Game
    from backend.belote.team import Team
    from backend.belote.player import Player
    from backend.belote.atout import Atout
except:
    from belote.game import Game
    from belote.team import Team
    from belote.player import Player
    from belote.atout import Atout
from typing import List
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:9173", "https://cypriengaudin.fr"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

game = Game()
atout = Atout()

@app.post("/belote/nbplayers")
async def belote(request: Request):
    data = await request.json()
    game.set_players(data.get("nb_joueurs"))

@app.get("/belote/nbplayers")
async def belote():
    return {"nb_joueurs": game.get_players()}

@app.post("/belote/configuration")
async def belote(request: Request):
    data = await request.json()
    inputs_name = data.get("inputs_name")
    inputs_team = data.get("inputs_team")
    if len(inputs_team) == 0:
        team1 = Team(inputs_name[0])
        player1 = Player(inputs_name[0])
        team1.add_player(player1)
        team2 = Team(inputs_name[1])
        player2 = Player(inputs_name[1])
        team2.add_player(player2)
        team3 = Team(inputs_name[2])
        player3 = Player(inputs_name[2])
        team3.add_player(player3)
        game.set_team([team1, team2, team3])
    else:
        team1 = Team(inputs_team[0])
        team2 = Team(inputs_team[1])
        player1 = Player(inputs_name[0])
        player2 = Player(inputs_name[1])
        player3 = Player(inputs_name[2])
        player4 = Player(inputs_name[3])
        team1.add_player(player1)
        team1.add_player(player2)
        team2.add_player(player3)
        team2.add_player(player4)
        game.set_team([team1, team2])
    game.set_points(data.get("points"))
    print (data.get("annonce"))
    game.set_annonce(data.get("annonce"))
    atout.reset()
    

@app.get("/belote/configuration")
async def belote():
    return {
        "teams": game.get_team(), 
        "points": game.get_points()
    }

@app.get("/belote/infos")
async def belote():
    return {
        "annonce": game.is_annonce(),
        "players": game.get_list_team()
    }

def start():
    print ("Starting server...")
    uvicorn.run(app, host="0.0.0.0", port=9174)

if __name__ == "__main__":
    start()
