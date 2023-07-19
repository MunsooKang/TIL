# 함수
'특정 작업'을 수행하기 위한 '재사용 가능'한 '코드 묶음'

## 함수를 사용하는 이유
코드의 중복을 방지
재사용성이 높아지고, 코드의 가독성과 유지보수성 향상

1. 내장 함수(Built-in function)
파이썬이 기본적으로 제공하는 함수(별도의 import없이 바로 사용 가능)
예 : print(), abs() 절대값 함수
* 참고 : 구글 - python document - ver 3.9 - 자습서, 라이브러리 레퍼런스 

2. 함수 호출(function call)
함수를 실행하기 위해 함수의 이름을 사용하여 해당 함수의 코드 블록을 실행하는 것
  2-1 함수 구조
  * input, function body, output(reture) 세 개가 존재해야 함
  input : parameter(매개변수)
  function body : (1) Docstring(함수 기능 설명) """ 기능 """로 나타냄
                  (2) return value
  
  2-2 함수의 정의와 호출
  * 함수 정의 : def 키워드로 시작
  def 키워드 이후 함수 이름 작성
  * 함수body : 콜론(:)다음 들여쓰기 된 코드 블록
  * 함수 반환 값 : return 키워드 이후에 반환할 값 명시
  return 문은 함수의 실행을 종료하고, 결과를 호출 부분으로 반환
  반환 값이 없는 경우 함수의 결과는 None
  ```
  # 함수 정의
  def greet(name):
      """ 입력된 이름 값에 인사를 하는 메세지를 만드는 함수(함수설명)
      """
      message = 'hello,' + name # '+'는 결합연산자
      return message

  # 함수 호출
    result = greet('Alice')
    print(result)
  ```

  3. 매개변수와 인자
    3-1 매개변수와 인자 구분
    (1) 매개변수(parameter) : 함수를 **정의**할 때, 함수가 받을 값을 나타내는 변수
    (2) 인자(argumetn) 함수를 **호출**할 때, 실제로 전달되는 값
    ```
    def add_num(x, y): # x, y는 매개변수
        return x + y

    a, b = 2, 3
    sum_r = add_num(a, b) # a, b는 인자
    ```
    
    3-2 인자의 종류 
    (1) 위치 인자
    함수 호출 시 인자의 위치에 따라 전달되는 인자
    ※ 위치인자는 함수 호출 시 반드시 값을 전달해야 함
    ```
    def greet(name, age): #함수 사용 시 name, age는 필수로 들어가야함
        print(f'hi, {name}! {age}살이군요')
    ```

    (2) 기본 인자
    함수 정의에서 매개변수에 기본 값을 할당하는 것
    함수 호출 시 인자를 전달하지 않으면 기본값이 매개변수에 할당됨
    ```
    def greet(name, age=30):
        print(f'hi, {name}! {age}살이군요')

    greet('kang') # kang, 30 // age를 넣지 않아도 30 할당
    greet('kang, 40) # kang, 40 // 필요시 age를 할당해줄 수 있음
    ```

    (3) 키워드 인자
    ```
    def greet(name, age):
        print(f'hi, {name}! {age}살이군요')

    greet('kang', 25) # hi, kang! 25살이군요
    greet(age=25, name='kang') # hi, kang! 25살이군요(키워드 인자)
    greet(age=25, 'kim') # Error 
    ```

    (4) 임의의 인자 목록
    정해지지 않은 개수의 인자를 처리하는 인자
    함수 정의 시 매개변수 앞에 '*'를 붙여 사용하며, 여려 개의 인자를 'tuple'로 처리
    ```
    def calculate_sum(*args): #(*args) : 임의의 인자, 개수를 한정하지 않음
        print(args)
        total = sum(args)
        print(f'합계: {total'})

    calculate_sum(1, 2, 3) # 6 
    calculate_sum(1, 2, 3, 4) # 10
    ```

    (5) 임의의 키워드 인자 목록
    함수 정의 시 매개변수 앞에 '**'를 붙여 사용하며, 여러 개의 인자를 'dictionary'로 처리
    ```
    def calculate_sum(**keyword)
        print(keyword)

    calculate_sum(age = 20, food = 'pizza', home = 'gaya') # age = 20, food = 'pizza', home = 'gaya'
    ```

    (6) 함수 인자 권장 작성 순서
    * 위치 → 기본 → 가변 → 키워드 → 가변 키워드 (단, 절대규칙은 아니며 상황에 따라 유연하게 조정)


# Scope
 1. python의 범위(Scope)
 함수는 코드 내부에 local scope를 생성하며, 그 외의 공간인 global scope로 구분
 * scope
 (1) global scope : 코드 어디에서든 참조할 수 있는 공간
 (2) local scope " 함수가 만든 scope (함수 내부에서만 참조 가능)
 * variable
 (1) global variable : global scope에 정의된 변수
 (2) local variable : local scope에 정의된 변수

```
def my_fun():
    num = 1 # num is defined in loal scope

print(num) # num is not defined in global scope
```

2. 변수 수명주기
 * 변수의 수명주기는 변수가 선언되는 위치와 스코프에 따라 결정
 (1) built-in scope : 파이썬이 실행된 이후 영원히 유지
 (2) global scope : 모듈이 호출된 시점 이후 혹은 인터프리터가 끝날 때까지
 (3) local scope : 함수가 호출될 때 생성되고, 함수가 종료될 때까지 유지

 2-1 이름 검색 규칙
 # 다음 순서로 이름을 찾아 나간다(LEGB Rule) (복습)
 Local → Enclosed(로컬 한 단계 위) → Global → Built-in
 ※ 함수 내에서는 바깥 Scope의 변수에 '접근'가능하나, '수정'은 할 수 없음
```
print(sum([1, 2, 3])) #6

sum = 10
print(sum) #10

print(sum([1, 2, 3])) # TypeError: 'int' is not callable
```

  2-2 global 키워드
  함수 내에서 전역 변수를 수정하려는 경우에 사용
  ```
  num = 0 # 전역 변수

  def increment():
      global num # num을 전역 변수로 선언
      num += 1

  print(num) # 0
  increment()
  print(num) # 1
  ```
  * global 키워드 주의사항 : 매개변수에 global 사용 불가


### 재귀함수
함수 내부에서 자기 자신을 호출하는 함수

 1. 재귀 함수 특징
 특정 알고리즘 식을 표현할 떄 변수의 사용이 줄어들며, 코드의 가독성이 높아짐
 1개 이상의 base case(종료되는 상황)가 존재하고, 수렴하도록 작성
 * 예시 : 팩토리얼 n!
 ```
 def fac(n):
    if n == 0: # 종료 조건 n이 0이면 1을 반환
        return 1
    return n * fac(n-1) # 재귀 호출
 ```
 * 재귀함수는 (1) 종료조건을 명확히, (2)반복되는 호출이 종료 조건을 향하도록 작성해야한다.

### 유용한 함수
1. map
 map(funtion, interable) ※iterable : 반복가능한 객체
데이터구조(itrable)의 모든 요소에 함수를 적용하고, 그 결과를 map object로 반환
   * map object는 확인이 어려움(oxooo....) → list(대체로)로 변환하여 확인 list(map(fun, iterable))

2. zip(*iterables)
임의의 iterable을 모아 튜플을 원소로 하는 zip object를 반환
```
girls = ['jane', 'ashley']
boys = ['peter, 'jay']
pair = zip(girls, boys)

print(list(pair)) #[('jane', 'peter'), ('ashley', 'jay')]
```
* 쌍이 안맞는 경우는 어떻게 할까? → 해보세용...
```
# 두 개의 리스트를 딕셔너리로 변환하기
keys = ['a', 'b', 'c']
valuses = [1, 2, 3]
my_dict = zip
```

3. lambda
lambda 매개변수: 표현식
간단한 연산이나 함수를 한 줄로 표현할 때 사용
```
def add(x, y):
    return x + y # fun1

add = lambda x,y: x + y # fun2, fun1 == fun2
```

4. map + lambda
```
numbers = [1, 2, 3, 4]
result = map(lambda x: x *2, numbers)
print(result) # [2, 4, 6, 8]
```

### Packing & Unpacking < 오후수업 >
1. packing
여러 개의 값을 하나의 변수에 묶어서 담는 것
변수에 담긴 값들은 tuple 형태로 묶임
* 예시 
```
packed_valuse = 1, 2, 3 ,4 ,5
numbers = [1, 2, 3, 4, 5]

# *을 활용하면 남은 요소들을 리스트로 패킹하여 할당
a, *b, c = numbers
print(a) # 1
print(b) # [2, 3, 4]
print(c) # 5
```

2. unpacking
메모리적으론 비효율적이나, 가끔 알고리즘 문제 풀 때 써야 함
* 예시
```
lst = [1, 2, 3]
a, b ,c = lst

print(a) #1
print(b) #2
print(c) #3
###########

results= [1, 2, 3] # (1,2,3)을 출력하고 싶음

for result in results:
    print(result, end = " ") # (1,2,3)

print(*results) # (1,2,3) // 위 코드와 같은 동작
############

edf test(a,b,c):
    print(a,b,c)

dic = {'a' : 1, 'b' : 2, 'c' : 3}
test(**dic)
```
* *, ** : 패킹, 언패킹 활용


### Module
한 파일로 묶인 변수와 함수 모음, 함수가 작성된 파이썬 파일(.py)
 
  1. 모듈 가져오기
    (1) 가져오는 법 : import '' ex) import math
    (2) 모듈에 든 내용 확인하기 : help('') ex) help(math)
    (3) 가져오는 법2 : from '' import ''(일부), *(다)
    (4) 서로 다른 모듈이 같은 이름의 함수를 제공할 경우 덮어 씌워짐(마지막에 import된 이름으로 대체)

  * cf 기술질문 ~~할 경우 좋은 이유 : 재사용성, 가독성이 좋다.
  ~~ 할 경우 안 좋은 이유 : 메모리적으로 비효율적이다.

  2. 모듈 만들기

  3. 재사용하기 위한 코드조각 : 함수 > 모듈 > 패키지

### 파이썬 표준 라이브러리

  1. 패키지 구분
  (1) 내부 패키지
  (2) 외부 패키지
* pip : 외부 패키지들을 설치하도록 도와주는 파이썬의 패키지 관리 시스템

  2. 패키지 사용 목적
  모듈들의 이름공간을 구분하여 충돌을 방지
  모듈을 효율적으로 관리하고 재사용할 수 있도록 돕는 역할




___
___
___

# 오후 수업 
# Functions
focus '재사용', '코드'

## 함수 호출 
def test(매개변수):
    return(매개변수) # 함수 정의문(문 : 실행시킬 수 있는 최소 단위)

test(전달 인자) # 함수 호출문

result = test()
순서도 전달인자 입력(0) → 매개변수에 전달인자 입력 → 함수값 → test() → test() 주소값 → result에 할당

함수 정의 : def ~~ //
함수 호출 : result = fun()
함수 반환값 = return, output

* 임의의 인자 목록(안전함, 예상가능)
사용을 지양하는 이유
(1) 가독성
(2) 메모리 : 몇 개나 들어올지 모르기에 여유있게 메모리를 할당

* 임의의 키워드 인자 목록(빠름)
<-> 임의의 인자 목록 : 결과값 활용처에 따라 다르게 사용

* Scope
 1. global
 2. local
 local 사용을 권장 : why? 어디서 바뀔지 모름, 메모리 많이 사용
 Scope는 최대한 짧게 사용

 ## LEGB 이름 검색 규칙 << 시험 >>
  
 ## 재귀함수 <<시험>>
 5!, -> f(0)까지 호출
 각각 함수가 몇 번 호출되는지 알아야한다.
 ex) 7! -> f(4)는 몇번 호출됐는가?

 ## map
 함수의 전달인달에 함수를 넣을 수 있다. -> 파이썬만 됨
 map(함수, 시퀀스 자료)

# lambda
def test(n):
    pass

a = test
a(n) # 동작한다.

왜 만들었나? 참조가 안된 메모리는 시간이 지나면 삭제되는 것을 활용 → 1회용, 알아서 지워지도록

---
***
___
<br/>

# Array(배열)와 List(연결리스트)

CRUD : Create, Read, Update, Delete
(1) Read : array 압승
(2) Create :
  (2-1) 맨 앞에 생성될 때(1234 -> 01234) : list 압승
  (2-2) 중간에 생성될 때 (1245 -> 12345) : list 압승
  (2-3) 맨 뒤에 생성될 때(1234 -> 12345) : 비슷함
(3) Delete : create와 동일


## List
* 순서가 있다고 해서 array와 같지는 않다.


# tuple >> 시험 2문제 정도
'변경 불가능', '0개 이상의 객체'
* 1개 있을 때 형태가 다름 (1,) 쉼표 필수 why? 단순한 정수로 인식되지 않기 위해

str, tuple, range 변경불가

```
def test():
    pass
a = ('나', 1, test)
a[2] = 1   # Error, why? a의 형태가 tuple이라 변경이 불가능
```
## dict
1. 접근법 
* my_dict['apple'] or my_dict.get('apple')

## set
집합 연산 합(|), 차(-), 교(&)
b = {1 , 2, 3, 3, 4}
print(b) # {1, 2, 3, 4} 정렬이 되는거 같아 보여도 실제론 아니다.