# 🌟 Exercise 1

print("Hello world "*4)

# 🌟 Exercise 2 : Some Math

power=99**3
finale=8*power

print(f"result of (99^3)*8 is {finale}")

# 🌟 Exercise 3 : What’s your name ?

name=input("smiytk??! : ")

if name =="yasser" or name =="Yasser" :
    print(" nefs smia sf ghayerha doz exo lakhor")
else:
    print("metcherfin ylh ghayerha")
    
# 🌟 Exercise 4 : Tall enough to ride a roller coaster
height=int(input('ur heigh'))

if height >= 145:
    print("you are tall enough to ride.")
else:
    print(f"need to grow some more to ride.wlkn bini o bink {height} wakha tkon 9azam a sa7bi")
    
# 🌟 Exercise 5 : Favorite Numbers
my_fav_numbers =set()
my_fav_numbers.add(1)
my_fav_numbers.add(2)
my_fav_numbers.remove(2)
print(my_fav_numbers)
friend_fav_numbers =set()
friend_fav_numbers.add(73)
our_fav_numbers=set()
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 6: Tuple
# => false

#🌟 Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)

#🌟 Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    print(sandwich_orders)

finished_sandwiches=[]

while sandwich_orders:
    current=sandwich_orders[0]
    finished_sandwiches.append(current)
    sandwich_orders.remove(current)

for i in range(len(finished_sandwiches)):
    print(f'I made your {finished_sandwiches[i]}')

print(sandwich_orders)
print(finished_sandwiches)