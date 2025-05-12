class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]
        self.sorted_animals = {}
    def add_animal(self,new_animal):
        if type(new_animal)!= str:
            print(' animal should be caracter')
        else:
            self.animals.append(new_animal)
            print("added")
            
    def get_animals(self):
        return self.animals
    
    def sell_animal(self,selled):
        if selled in self.animals:
            self.animals.remove(selled)
            print("selled")
        else:
            print("introeuvable")
        
      
    def sort_animals(self):
        dict_animals = {}
        self.animals.sort()  
        
        for animal in self.animals:
            first_letter = animal[0].upper() 
            
            if first_letter not in dict_animals:
                dict_animals[first_letter] = [animal]
            else:
                dict_animals[first_letter].append(animal)
        print(dict_animals)
        self.sorted_animals = dict_animals
        
    def get_group(self):
        for x,y in self.sorted_animals.items():
            print(f"Groupe {x}: {y}")
my_zoo = Zoo("African Paradise")

my_zoo.add_animal("Elephant")
my_zoo.add_animal("Zebra")
my_zoo.add_animal("Lion")
my_zoo.add_animal("Giraffe")
my_zoo.add_animal("Bear")
my_zoo.add_animal(123)  
print("Animaux dans le zoo :", my_zoo.get_animals())

my_zoo.sell_animal("Zebra")    
my_zoo.sell_animal("Tiger")     
print("Après la vente :", my_zoo.get_animals())

my_zoo.sort_animals()
my_zoo.get_group()