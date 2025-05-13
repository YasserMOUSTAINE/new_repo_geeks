from exercice2 import Dog
import random
class PetDog(Dog):
    def __init__(self,name,age,weight):
        super().__init__(name,age,weight)
        self.trained=False
        
    def train(self):
        print(self.bark())
        self.trained=True
        
    def play(self,*args):
        print(f"{", ".join(args)} all play together")
        
    def do_a_trick(self):
        num=random.randint(0,3)
        listt=[
            "does a barrel roll",
            "stands on his back legs",
            "shakes your hand",
            "plays dead"
        ]
        if self.trained:
            print(f'{self.name} {listt[num]}')
        else:
            print("kelb 3eyan")
            
        
dogtest=PetDog("yasser",12,2000)
dogtest.play(dogtest.name)
dogtest.train()
dogtest.do_a_trick()

dog1 = Dog('Rex', 5, 30)
dog2 = Dog('Bella', 3, 20)
dog3 = Dog('Max', 4, 40)
dog4 = Dog('Luna', 2, 15)
dog5 = Dog('Rocky', 6, 35)


dog1.fight(dog2)
dog3.fight(dog4)
dog5.fight(dog1)


print(dog1.run_speed())
print(dog2.run_speed())
print(dog5.run_speed())


pet1 = PetDog('Buddy', 3, 25)
pet2 = PetDog('Milo', 2, 18)
pet3 = PetDog('Charlie', 4, 30)

pet1.play(pet1.name, pet2.name, pet3.name)

pet1.play(pet1.name, pet2.name, pet3.name)
