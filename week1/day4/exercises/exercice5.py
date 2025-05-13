from exercice4 import Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)
        
    def use_power(self):
        for member in self.members:
            if self.is_18(member['name']):
                print(f"{member['name']} : {member['power']}")
            else:
                raise Exception(' not over 18')
        
    def incredible_presentation(self):
        print("*Here is our powerful family **")
        super().family_presentation()
        
family2 = TheIncredibles(
    members=[
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ],
    last_name='Incredibles'
)

family2.incredible_presentation()
    
family2.use_power()
