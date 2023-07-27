# 상속
기존 클래스의 속성(변수)와 메서드를 물려받아, 새로운 하위 클래스를 생성하는 것<br>
<br>

## 상속이 필요한 이유
1. 코드 재사용
* 상속을 통해 기존 클래스의 속성과 메서드를 재사용할 수 있음
* 새로운 클래스 작성 시 기존 클래스 기능을 그대로 활용하여 중복된 코드를 줄일 수 있음<br>

<br>

2. 계층 구조
* 상속을 통해 클래스 간의 계층 구조를 형성할 수 있음
* 부모 클래스와 자식 클래스의 관계를 표현하고 보다 구체적인 클래스 생성 가능<br>
<br>

3. 유지 보수의 용이성
* 상속을 통해 기존 클래스의 수정이 필요한 경우 해당 클래스(최상위 클래스)만 수정하면 되므로 유지 보수가 용이해짐
* 코드의 일관성을 유지하고, 수정이 필요한 범위를 최소화할 수 있음
<br>
<br>

## 상속을 사용한 계층구조 변경
```
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def talk(self):
        print(f'Hi, my name is {self.name}')


class Professor(Person): # 상속 class Professor(부모클래스명)
    def __init__(self, name, age, department):
        Person.__init__(self, name,age) # 부모 클래스의 메서드 가져오기
        self.department = department


class Student(Person):
    def __init__(self, name, age, gpa):
        super().__init__(name,age) # 부모 클래스 호출, self 안써도 됨
        self.gpa = gpa

p1 = Professor('허교수', 31, '순혈컴공')

s1 = Student('강학생', 29, 3.5)

p1.talk() # Hi, my name is 허교수
s1.talk() # Hi, my name is 강학생

```
1. 위 방식의 한계점
* 유연성이 떨어진다.(부모클래스명이 바뀌면 모든 자식 함수에 들어있는 부모클래스명을 일일히 찾아서바꿔줘야 한다.) 
* 다중 상속의 경우 일일히 역산해서 찾기 힘들다

2. 해결 방법
* super() 함수: 부모 클래스의 메서드를 호출하기 위해 사용하는 내장 함수<br>
<br>

## 다중 상속
* 두 개 이상의 클래스를 상속 받는 경우 상속 받은 모든 클래스의 요소를 활요 가능함
* 중복된 속성이나 메서드가 있는 경우 상속 순서에 의해 결정됨
```
class Person:
    pass

class Mom(Person):
    pass

class Dad(Person):
    pass

class FirstChild(Mom, Dad):
    pass
```
<br>
<br>

## 상속 관련 함수와 메서드
1. mro()
  * Method Resoulution Order
  * 해당 인스턴스의 클래스가 어떤 부모 클래스를 가지는지 확인하는 메서드
  * 기존의 인스턴스 → 클래스 순으로 이름 공간을 탐색하는 과정에서 상속 관계에 있으면 인스턴스 → 자식 클래스 → 부모 클래스로 확장

```
class Person:
    gene = 'XYZ'

    def __init__(self, name):
        self.name = name

    def greeting(self):
        return f'Hi, my name is {self.name}'


class Mom(Person): # 상속 class Professor(부모클래스명)
    gene = 'XX'
    
    def __init__(self, name):
        super().__init__(name)

    def swim(self):
        return 'Mom like swim'


class Dad(Person):
    gene = 'XY'

    def __init__(self, name, age):
        super().__init__(name)
        self.age = age
    def walk(self):
        return 'Dad like walk'
    
class FirstChild(Dad, Mom):
    mom_gene = Mom.gene
    
    def __init__(self, name, age):
        # super().__init(name)
        Dad.__init__(self, name, age) # 필요한 요소에 따라 위/아래 유연하게 사용
    def swim(self):
        return 'baby can swim'
    
    def cry(self):
        return 'baby crying'


baby1 = FirstChild('아가', 1)
print(baby1.cry()) # baby crying
print(baby1.swim()) # baby can swim
print(baby1.walk()) # Dad like walk
print(baby1.gene) # XY # why? Dad를 먼저 상속받음
print(baby1.mom_gene) # XX
# super는 우선 상속된 정보를 가져온다.

print(FirstChild.mro()) # FirstChild, Dad, Mom, Person 
# 찾아 올라가는 순서
```

## Error & Exception
<br>

### 버그 & 디버깅
1. 디버깅 방법
* print 함수 활용
* 개발 환경(vscode 등)에서 제공하는 기능 활용
* python totor 확인(간단한 코드)
* 뇌 컴파일, 눈 디버깅
<br>

### Error
파이썬의 에러 유형
<br>

1. 문법 에러
* 오타 등
<br>

2. 예외
* 프로그램 실행 중에 감지되는 에러

  (2-1) 내장 예외
  * ZeroDivisionError : 나누기 인자가 0일때 발생
  * NameError : 지역 또는 전역 이름을 찾을 수 없을 때
  * TypeError : 타입 불일치, 인자 누락, 인자 초과, 인자 타입 불일치 등
  * ValueError : 연산이나 함수에 문제는 없으나, 부적절한 값을 인자로 받았고 구체적인 예외로 설명되지 않는 경우
  * IndexError : 시퀀스 인덱스가 범위를 벗어날 때(반복에서 자주 발생)
  * KeyError : 딕셔너리에 해당 키가 존재하지 않는 경우
  * ModuleNotFoundError : 모듈을 찾을 수 없을 때
  * importError : 임포트 하려는 이름을 찾을 수 없을 때
  * KeyboardInterrupt : 사용자가 Ctrl-C or Del을 누를 때 발생
  * IndentationError : 잘못된 들여쓰기와 관한 문법 오류

 3. 예외 처리
 try - except
 * try 블록 안에는 예외가 발생할 수 있는 코드 작성
 * except 블록 안에는 예외가 발생했을 떄 처리할 코드 작성
 * 예외 발생하면 프로그램 흐름은 try 블록을 빠져나와 해당 예외에 대응하는 except 블록으로 이동
 ```
 try:   # if와 달리 조건을 계산하지 않고 일단 실행한다.
    result = 10 / 0
except ZeroDivisionError:
    print('0'으로 나눌 수 없습니다.')

try:
    num = int(unput('숫자를 입력하세요'))
except ValueError:
    print('숫자가 아닙니다.')
 ``` 
 <br>
 <br>
 (1) 복수 예외 처리 연습
 ```
 try:
    num = int(input('100으로 나눌 값을 입력하세용.'))
    print(100 / num)
# except ValueError:
#     print('숫자가 뭔지 몰라?')
# except ZeroDivisionError:
#     print('0으로 나눌 수 있을 것 같아?')
except (ValueError, ZeroDivisionError):
    print('생각이란걸 좀 해볼래?')
except:
    print('에러가 발생했어')
 ```
<br>
<br>

<br>

  (2) 내장 예외의 상속 계층 구조 주의
  * 내장 예외 클래스는 상속 계층구조를 가지기 때문에 except절 분기 시 **반드시 하위 클래스를 먼저 확인 할 수 있도록 작성**해야 함

```
try:
    num = int(input('100으로 나눌 값을 입력하세용.'))
    print(100 / num)
except BaseException:
    print('숫자가 뭔지 몰라?')
except ZeroDivisionError:
    print('0으로 나눌 수 있을 것 같아?')
# except (ValueError, ZeroDivisionError):
#     print('생각이란걸 좀 해볼래?')
except:
    print('에러가 발생했어')

# input = 0 → '숫자가 뭔지 몰라?'
# why? BaseException이 ZeroDivisionError의 상위 클래스 
```
<br>
<br>

### EAFP & LBYL
예외처리 값 검사에 대한 2가지 접근 방식
<br>
<br>

1. EAFP(Easier to Ask for Forgiveness than Permission)
* 허락보단 용서다 쉽다(== 일단 질러봐라)
* 예외처리를 중심으로 코드를 작성하는 접근 방식(try-except)

2. LBYL(Look Before You Leap)
* 가기전에 먼저 발 밑을 봐라
* 실행전에 조건을 검사하는 접근 방식(if-else)
<br>
<br>

### as 키워드
* EAFP 방식에서 사용
* as 키워드를 활용하여 에러 메세지를 except 블록헤서 사용할 수 있음
```
my_list = []

try:
    number = my_list[1]
except IndexError as error: # as + 변수명
    print(f'{error}가 발생했습니다.')

# list index out of range가 발생했습니다.
```
<br>
<br>
<br>

# 오후 수업
<br>
<br>

## 객체지향의 특징
<br>

1. 캡슐화
* 정보를 숨긴(은닉)다 + 정보를 수정할 수 없게 보호한다.
* how? : 변수 앞에 __를 붙인다.
* geter : 캡슐화된 정보를 가져오는 것
* seter = 개인학습 
```
class Student():
    def __init__(self, name, age, id, grade):
        self.name = name
        self.age = age
        self.id = id
        self.__grade = grade

    def grade(self): #geter
        return self.__grade

Lee = Student('Lee', 24, 201410483, 4.4)
print(Lee.name)
print(Lee.age)
print(Lee.id)
grade = Lee.grade() # geter
print(grade)
```
<br>
<br>

2. 다형성
* keyword의 다형성 - 찾아보기


<br>
<br>

3. 추상화
* 객관적인 사실들(핵심적인 요소)의 나열
* 미술의 추상화 아님
```
# A라는 사람들 데이터 조각으로 추상화(객관적으로 설명)하라
class Person():
    def __init__(self, name, height, weight, age)
        self.name = name
        self.height = height
        self.weight = weight
        self.age = age

    def work(self):
        return f'{self.name}은 이족보행을 한다.'
```

4. 상속
 < 복습하기 >

# 캡슐화 +@

클래스명 다르게 호출하기, 게터함수
```
class Person:
    
    number_of_people = 0
         
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Person.number_of_people += 1
# == self.__class__.number_of_people
# self.__class__ = Person

# @classmethod
#   def get_number_of_people(cls):
#   return cls.number_of_people
```

