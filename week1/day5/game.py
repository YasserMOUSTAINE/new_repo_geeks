import random

class Game:
    def get_user_item(self):
        choix = ''
        while choix not in ['rock', 'paper', 'scissors']:
            choix = input("Select rock, paper, or scissors: ").lower()
        return choix

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        if (user_item == 'rock' and computer_item == 'scissors') or \
           (user_item == 'paper' and computer_item == 'rock') or \
           (user_item == 'scissors' and computer_item == 'paper'):
            return "win"
        return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}.")
        return result
