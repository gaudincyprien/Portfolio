class Player:
    def __init__(self, name):
        self.name = name
        self.take = 0

    def set_name(self, name):
        self.name = name

    def get_name(self):
        return self.name

    def add_take(self):
        self.take += 1

    def get_take(self):
        return self.take