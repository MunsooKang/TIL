class Dog:
    sound = "멍멍"

class Cat:
    sound = "야옹"

class Pet(Dog, Cat):
    def __init__(self, animal_type):
        if animal_type == "Dog":
            self.animal = Dog()
        elif animal_type == "Cat":
            self.animal = Cat()

    def __str__(self):
        return f"애완동물은 {self.animal.sound} 소리를 냅니다."

# Create instances of the Pet class with the specific animal types
dog_pet = Pet("Dog")
cat_pet = Pet("Cat")

# Print the sounds of the pets
print(dog_pet)  # Output: 애완동물은 멍멍 소리를 냅니다.
print(cat_pet)  # Output: 애완동물은 야옹 소리를 냅니다.