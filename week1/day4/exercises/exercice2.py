class Dog:
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
        
    def bark(self):
        return(f'{self.name} is barking')
    
    def run_speed(self):
        speed=self.weight/self.age*10
        
        return speed
    
    def fight(self,other):
        speeddog=self.weight/self.age*10
        speedotherdog=other.weight/other.age*10
        if speedotherdog>speeddog:
            print(f"{other.name} win")
            
        else:
            print(f"{self.name} win")
            
dog1=Dog('test1',35,33300)
dog2=Dog('test',25,2000) 
dog4=Dog('test2',5,2000) 
dog1.fight(dog2) 