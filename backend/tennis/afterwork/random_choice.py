import random
class RandomMatchs():
    LISTE_RAQUETTE = ["Normal", "Enfant", "Mini-tennis"]
    @staticmethod
    def get_random_matchs(nb_joueurs : int):
        payload = {}
        payload["raquettes"] = [random.choice(RandomMatchs.LISTE_RAQUETTE) for i in range(nb_joueurs)]
        payload['balle'] = random.choice(["Dur", "Verte", "Orange", "Rouge", "Mousse"])
        payload['terrain'] = random.choice(["Entier", "Intermédiaire", "Carré de service"])
        if nb_joueurs == 4:
            payload['simple_double'] = random.choice(["Simple", "Double"])
        else: 
            payload['simple_double'] = "Simple"
        print (payload)
        return payload