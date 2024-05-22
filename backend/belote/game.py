class Game:
    def __init__(self):
        self.players = 0
        self.points = 0
        self.isAnnonce = True
        self.team = []

    def set_players(self, nb_joueurs):
        self.players = nb_joueurs

    def get_players(self):
        return self.players
    
    def set_points(self, points):
        self.points = points

    def get_points(self):
        return self.points
    
    def set_annonce(self, annonce):
        self.isAnnonce = annonce

    def is_annonce(self):
        return self.isAnnonce
    
    def set_team(self, team):
        self.team = team

    def get_team(self):
        return self.team
    
    def add_team(self, team):
        self.team.append(team)

    def get_list_team(self):
        list_team = []
        for team in self.team:
            team_list_team = team.get_player()
            for player in team_list_team:
                list_team.append(player.get_name())
        return list_team
    
