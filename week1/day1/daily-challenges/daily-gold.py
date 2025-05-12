n1=int(input("n1: "))
n2=int(input("n2: "))

def calculation(a,b):
    s=a+b
    
    m=a*b
    
    return s,m

some,add=calculation(n1,n2)
print(some)
print(add)


name_of_dict={}
n=1
while n:
    key=(input('ur key: '))
    if key == 'quite':
        value="none"
        break
    value=(input('ur value: '))
    if value == 'quite':
        break
    name_of_dict[key]=value
    
print(name_of_dict)


import datetime

birth=input("ur birth DD/MM/YYYY")

day,month,yeaar=birth.split("/")

this_year=datetime.datetime.now().year

age=this_year-int(yeaar)
str_age=str(age)
last_i=""
for i in str_age:
    last_i=int(i)

chem3a="i"*last_i


if int(yeaar)%4==0:
    for i in range(2):
        print(f"    ___{chem3a}___    ")
        print("   |:H:a:p:p:y:|   ")
        print(" __|___________|__ ")
        print("|^^^^^^^^^^^^^^^^^|")
        print("|:B:i:r:t:h:d:a:y:|")
        print("|                 |")
        print("~~~~~~~~~~~~~~~~~~~")

else:
    print(f"    ___{chem3a}___    ")
    print("   |:H:a:p:p:y:|   ")
    print(" __|___________|__ ")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")