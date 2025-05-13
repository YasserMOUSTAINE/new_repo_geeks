class Family:
    def __init__(self,members,last_name):
        self.members=members
        self.last_name=last_name
        
    def born(self, **kwargs):
        newchild = dict(kwargs)
        self.members.append(newchild)
        print(f"Congratulations! A child named {newchild['name']} was born into the {self.last_name} family.")
        
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        print("No member with that name found.")
    
    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        print("Members:")
        for member in self.members:
            for key, value in member.items():
                print(f"  {key}: {value}")
            print("-" * 20)

            
firstfam=Family({'name':'Michael','age':35,'gender':'Male','is_child':False},'moustaine')
secondfam=Family({'name':'Sarah','age':32,'gender':'Female','is_child':False},'yasser')

family = Family(
    members=[
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
    ],
    last_name='Moustaine'
)
family.born(name='Tommy', age=2, gender='Male', is_child=True)
family.is_18('Michael')   
family.is_18('Tommy')     
family.is_18('Unknown') 
family.family_presentation()

