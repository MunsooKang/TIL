class Dog():
    sound = '멍멍'
    count = 1


class Cat():
    sound = '야옹'

class Pet(Dog, Cat):
    
    def __init__(self):
        if Dog.count % 2 == 1:
            Dog.__init__(self) 
        else:
            Cat.__init__(self)
        Dog.count += 1
    def __str__(self):
        return f'애완동물은 {self.sound} 소리를 냅니다.'

pet1 = Pet()
print(pet1)
# print(Dog.count)
pet2 = Pet()
print(pet2)
# print(Dog.count)