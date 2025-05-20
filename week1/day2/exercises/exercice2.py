keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))
print(my_dict)

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name.title()} pays ${cost}")
    total_cost += cost

print("Total cost:", total_cost)


brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last competitor:", brand["international_competitors"][-1])
print("US colors:", brand["major_color"]["US"])
print("Number of pairs:", len(brand))
print("Keys:", list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print("Updated number of stores:", brand["number_stores"])


def describe_city(city, country="Morocco"):
    print(f"{city} is in {country}")

describe_city("Rabat")
describe_city("Tokyo", "Japan")


import random

def guess_number(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success! Numbers match.")
    else:
        print(f"Fail. You chose {user_number}, but the computer chose {random_number}.")

guess_number(42)  

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")

make_shirt()
make_shirt("medium")
make_shirt("small", "Keep coding!")
make_shirt(text="Code hard!", size="XL") 


import random

def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(7, 22)
    elif season == "summer":
        return random.uniform(25, 40)
    elif season == "autumn":
        return random.uniform(10, 25)

def main():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()
    temp = round(get_random_temp(season), 1)
    print(f"The temperature right now is {temp}°C")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp < 23:
        print("Nice weather, enjoy!")
    elif 24 <= temp < 32:
        print("Warm and sunny!")
    elif temp >= 32:
        print("It's hot! Stay hydrated.")

main()


data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz():
    score = 0
    wrong_answers = []

    for q in data:
        user_answer = input(q["question"] + " ").strip()
        if user_answer.lower() == q["answer"].lower():
            print("✅ Correct!")
            score += 1
        else:
            print(" Wrong!")
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })

    print(f"You got {score} correct and {len(data)-score} wrong.")

    if wrong_answers:
        print("\nQuestions you got wrong:")
        for wrong in wrong_answers:
            print(f"Q: {wrong['question']}")
            print(f"Your answer: {wrong['your_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}")
            print("---")

    if len(wrong_answers) > 3:
        print("You had more than 3 mistakes. Try again!")


run_quiz()

