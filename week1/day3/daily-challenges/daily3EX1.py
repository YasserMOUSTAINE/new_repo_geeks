totalCat={}
class Cat:
    def __init__(self , cat_name, cat_age ):
        self.cat_name=cat_name
        self.cat_age=cat_age
        
        totalCat[self.cat_name]=self.cat_age

def oldest_cat():
    name=""
    some=0
    for x,y in totalCat.items():
        if y>some:
            some=y
            name=x
    
    return f"le plus grand est {name} avec {some}"
    
first_cat=Cat("minouch1",1)

secand_cat=Cat("minouch2",4)

third_cat=Cat("minouch3",3)
secand_cT=Cat("minouch4",10)


print(totalCat)
print(oldest_cat())