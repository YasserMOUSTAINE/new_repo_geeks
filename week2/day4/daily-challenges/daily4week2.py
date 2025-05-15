import requests
import psycopg2
url="https://restcountries.com/v3.1/all"
response = requests.get(url)
countries = response.json()

connection = psycopg2.connect(
    host="localhost",
    dbname="country",
    user="postgres",
    password="ymwam7272"
)

cursor = connection.cursor()

for i in range(10):
    country=countries[i]
    name=country.get("name").get("common")
    capital=country.get('capital')
    flag=country.get('flag',"🏳️")
    subregion=country.get('subregion','Unknown')
    population = country.get('population',0)
    
    query='''
        insert into Country(name,capital,flag,subregion,population)
        values (%s,%s,%s,%s,%s);
    '''
    cursor.execute(query,(name,capital,flag,subregion,population))

connection.commit()
cursor.close()
connection.close()