import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'ymwam7272'
DATABASE = 'demo_restaurant'
connection = psycopg2.connect(
    host=HOSTNAME,
    user=USERNAME,
    password=PASSWORD,
    database=DATABASE
)
cursor = connection.cursor()


def show_user_menu(option):
    if option=='A':
        name_user=input("name: ")
        price_user=int(input("price: "))
        add_item_to_menu(name_user,price_user)
    if option =='D':
        name_user_del =input('name: ')
        remove_item_from_menu(name_user_del)
    if option=='U':
        name_user_up_old=input('old name: ')
        name_user_up=input('name: ')
        price_user_up=int(input('price: '))
        update_item_from_menu(name_user_up_old,name_user_up,price_user_up)
    if option == 'S':
        show_restaurant_menu()
    if option == 'V':
        name_user=input('name item: ')
        show_item(name_user)
    
    
def add_item_to_menu(name,price):
    query=f'''
        insert into Menu_items(item_name,item_price)
        values(%s,%s)
    '''
    cursor.execute(query,(name,price))
    connection.commit()

    print("inserted")
            
def remove_item_from_menu(name_user):
    query=f'''
        delete from Menu_items where item_name=%s;
    '''
    cursor.execute(query,(name_user))
    connection.commit()

    
def update_item_from_menu(old_name,name,price):
    query = '''
        UPDATE Menu_items
        SET item_name=%s, item_price=%s
        WHERE item_name=%s;
    '''

    cursor.execute(query,(name,price,old_name))
    connection.commit()


def show_restaurant_menu():
    query=f'''
        select item_name,item_price from Menu_items;
    '''    
    cursor.execute(query)
    output = cursor.fetchall()
    for x,y in output:
        print(x,"     ",y)

def show_item(name):
    query = '''
        SELECT item_name, item_price
        FROM Menu_Items
        WHERE item_name = %s
    '''

    cursor.execute(query,(name,))
    output = cursor.fetchall()
    for x,y in output:
        print(x,"     ",y)
        break
        
my_list = ['A', 'D', 'U', 'S', 'V']

while True:
    userinp = input("\nChoisissez une option [A/D/U/S/V] ou Q pour quitter : ").upper()
    if userinp == 'Q':
        print("Au revoir !")
        break
    elif userinp in my_list:
        show_user_menu(userinp)
    else:
        print("Option non valide.")
