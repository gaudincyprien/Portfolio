class Team:
    def __init__(self, name):
        self.name = name
        self.score = 0
        self.player = []
        self.annonce = 0

    def set_team_name(self, name):
        self.name = name

    def get_team_name(self):
        return self.name

    def set_player(self, list_player):
        self.player = list_player

    def get_player(self):
        return self.player
    
    def add_player(self, player):
        self.player.append(player)

    def set_score(self, score):
        self.score = score

    def get_score(self):
        return self.score
    
    def add_score(self, score):
        self.score += score

    def add_annonce(self, annonce):
        self.annonce += annonce

    def get_annonce(self):
        return self.annonce
    
    
