class Pets:
    def __init__(self,animals):
        self.animals=animals
        
    def walk(self):
        for animal in self.animals:
            print(animal.walk())
            
class Cat:
    is_lazy=True
    
    def __init__(self,name,age):
        self.name=name
        self.age=age
        
    def walk(self):
        return f'{self.name} is just wélking around'
    
class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Charteux(Cat):
    def sing(self,sounds):
        return f'{sounds}'
            
class Siamese(Cat):
    def sing(self,sounds):
        return f'{sounds}'

bengal1=Bengal("bengal",2)
charteux2=Charteux("charteux",5)
siamese3=Siamese('siamese',4)
all_cats=[bengal1,charteux2,siamese3]
Sara_pets=Pets(all_cats)
print(Sara_pets.walk())
