#Challenge 1

number = int(input('number:'))
length = int(input('length:'))
multiple=[]

for i in range(1,length+1):
    multiple.append(i*number)
    
print(multiple)

#Challenge 1

word=input("word:")

result=""
back=""
for i in word:
    
    if i != back:
        result = result + i
        print(result)
        back=i
    

print(result)