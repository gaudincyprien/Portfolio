class Atout:
    def __init__(self):
        self.carreau = 0
        self.coeur = 0
        self.pique = 0
        self.trefle = 0

    def add_carreau(self):
        self.carreau += 1

    def add_coeur(self):
        self.coeur += 1

    def add_pique(self):
        self.pique += 1

    def add_trefle(self):
        self.trefle += 1

    def get_carreau(self):
        return self.carreau
    
    def get_coeur(self):
        return self.coeur
    
    def get_pique(self):
        return self.pique
    
    def get_trefle(self):
        return self.trefle
    
    def reset(self):
        self.carreau = 0
        self.coeur = 0
        self.pique = 0
        self.trefle = 0
