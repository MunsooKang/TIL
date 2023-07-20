# 제어문(Control Statement)
 **조건**에 따라 코드 블록을 실행하거나, **반복**적으로 코드를 실행

 ## 조건문(Conditional Statement)
 주어진 조건식을 평가하여 해당 조건이 참(True)인 경우에만 코드 블록을 실행하거나 건너뜀

 * 파이썬 조건문에 사용되는 키워드 : if / elif / else

 1. 'if' statement
 ```
 if 표현식:
    코드 블록
elif 표현식:
    코드 블록
else:
    코드 블록
 ```
 조건문에서 elif와 else는 선택사항

  1.1 복수 조건문
  * 조건식을 동시에 검사하는 것이 아니라 순차적으로 비교
  ```
  dust = 35
  if dust > 150:
      print('매우 나쁨) # 확인 1 X
  elif dust > 80:
      print('나쁨') # 확인 2 X
  elif dust > 30:
      print('보통') #확인 3 O
  else:
      print('좋음') # 실행 X
  ```

  1.2 중첩 조건문
  가능

* 그 외
if 1: = 동작한다(내장된 bool 함수에 의해 1 = True로 인식)
if 0: = 동작하지 않는다(내장된 bool 함수에 의해 0 = false로 인식)

## 반복문(Loop Statement)
주어진 코드 블록을 여러 번 반복해서 실행하는 구문
* (1) 특정 작업을 반복적으로 수행(종료 조건이 없다)
* (2) 주어진 조건인 참인 동안 반복(특정한 종료조건(false)이 있다.)

1. For
**임의의 시퀀스+@**의 항목들을 그 시퀀스에 들어있는 순서대로 반복

1.1 for 변수 in 반복 가능한 객체:
    코드 블록

* 반복 가능한 객체(iterable) : 시퀀스, dict, set 포함

  1.2 문자열 순회
```
country = 'korea'

for char in country:
    print(char) # k / o / r / e / a 문자열도 반복문 가능
```
  1.3 인덱스로 리스트 순회
  * 리스트의 요소가 아닌 **인덱스**로 접근하여 해당 요소들을 변경하기
  ```
  numbers = [1, 2, 3, 4]
  for i in rage(len(numbers)):
      numbers[i] = numbers[i] * 2
  print(numbers) # 2 / 4 / 6 / 8
  ```

  1.4 중첩된 반복문
  ```
  outers = ['a', 'b']
  inners = ['c', 'd']

  for outer in outers:
      for inner in inners:
          print(outer, inner)

  # (a,d) / (a,d) / (b,c) / (b,d)
  # 동작 원리(순서) 확인하기
  # print가 호출되는 횟수 : len(outers) * len(inners) = 4
  ```

  1.5 중첩 리스트 순회
  안쪽 리스트 요소에 접근하려면 바깥 리스트를 순회하면서 중첩 반복을 사용해 각 안쪽 반복을 순회
  ```
  elements = [['A', 'B'], ['C', 'D']]
  
  for elem in elements:
      for item in elem:
          print(item) # A / B / C / D 
  
  # IM시험 : 이차원리스트를 얼마나 잘 활용하냐
  ```

2. While
주어진 조건식이 참(Ture)인 동안 코드를 반복해서 실행
== 조건이 거짓(Flase)가 될 때 까지 반복

while 조건식:
    코드 블록

  2.1 사용자 입력에 따른 반복
  * while문을 사용한 특정 입력 값에 대한 종료 조건 활용하기
  ```
  number = int(input('양의 정수를 입력해주세요.:'))

  while number <= 0:
      if number <0:
          print('음수를 입력했습니다.')
      else:
      print('0은 양의 정수가 아닙니다.)
      number = int(input('양의 정수를 입력해주세요.:'))

  print('잘했습니다!')
  ```
* while문은 반드시 종료조건이 필요!!

### 적절한 반복문 활용하기
  1. for
  * 반복 횟수가 명확하게 정해져 있는 경우
  * (예) list, tuple, str 등과 같은 시퀀스 형식의 데이터를 처리할 때

  2. while
  * 반복 횟수가 불명확하거나 조건에 따라 반복을 종료해야 할 때
  * (예) 사용자의 입력을 받아서 특정 조건이 충족될 때가지 반복


  ## 반복 제어
  for아 while은 본문 내 모든 코드를 실행하나, **때때로 일부만 실행하는 것이 필요할 때가 있음**

  1. break
  반복을 즉시 중지
  ```
  numbers = [1, 2, 3, 5, 6]
  found_even = False

  for num in numbers:
      if num % 2==0:
          print('첫 번째 짝수를 찾았습니다:', num)
          found_even = Ture
          break

  if not found_even:
      print('짝수를 찾지 못했습니다.')
  ```


  2. continue
  다음 반복으로 건너뜀
  ```
  numbers - [1, 2, 3, 4, 5, 6]

  for num in numbers:
      f num % 2 ==0:
          continue 
      print(num)

  # continue는 다음 '반복(for문(o))' 으로 넘어간다 / 다음 코드(print(x))로 넘어가지 않는다.
  ```

  3. break와 continue 주의사항
  * break와 continue의 남용은 코드의 가독성을 저하시킨다
  * 특정한 종료조건을 만들어서 break를 대신하거나, if문을 사용해 continue처럼 코드를 건너 뛸 수 있음


### List Comprehension
간결하고 효율적인 리스트 생성 방법

1. List Comprehension 구조
[expression for 변수 in iterable]

list(expression for 변수 in iterable)
* 가독성 안좋음
```
# 홀수만 들어있는 리스트 만들기

# 1. 일반적인 형태
new_list = []
for i in range(10):
    if i % 2 == 1:
        new_list.append(i)
    else:
        new_list.apped(str(i))
print(new_list)

# 2. List Comprehension 사용
new_list_2 = [i for i in range(10)]
print(new_list_2)

new_list_2 = [i for i in range(10) if i  % 2 == 1]
print(new_list_2)

new_list_3 = [ i if i% 2 == 1 else str(i) for i in range(10)]

# 중첩된 if는 가능하다. 단, elif는 사용 불가능하다.
```
### 리스트를 생성하는 3가지 방법 비교
* 어떤게 제일 빨라용? : 성능은 일반화가 불가능 ㅎㅎ(외부요인, 상황 등) 그래도 대부분의 상황에서는 compre가 빠르다. 단, 극단적인 차이는 존재하지 않는다.
```
# 정수 1,2,3을 가지는 새로운 리스트 만들기
numbers = ['1', '2', '3']

# 1. for loop
new_numbers = []
for number in numbers:
    new_numbers.append(int(number))
print(new_numbers) #[1, 2, 3]

# 2. map
new_numbers_2 = list(map(int, numbers))
print(new_numbers_2) #[1, 2, 3]

# 3. list comprehensive
new_numbers_3 = [int(number) for number in numbers]
print(new_numbers_3) #[1, 2, 3]
```

### 기타
1. Pass
* 아무런 동작도 수행하지 않고 넘어가는 역할, 문법적으론 문장이 필요하나 프로그램 실행헤는 영향을 주지 않아야 할 때 사용
* 사용 예 : (1) 미완성 코드, (2) 조건문에서 아무 동작 수행하지 않아야할 때 (3) 무한 루프에서 조건이 충족되지 않을 때 pass를 통해 계속 진행

2. enumerate
```
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits):
    print(f'인덱스 {index} : {fruit}')
```
```
result = ['a', 'b', 'c']

print(list(enumerate(result))) #[(0, 'a'), (1, 'b'), (2, 'c')]

# tuple 형태로 나옴 : (a의 인덱스, 'a'), (b의 인덱스, 'b') ...
```

---
___
***
<br\>

# 오후 수업

* 코드 잘 짰나? : (1)무한대로 늘려보기 (2) 뒤집어서 생각해보기
for i in 1, 2, 3:
    print(i) # 1, 2, 3 // 작동되는 이유 : python 자체적으로 1,2, 3을 tuple로 변환

iterable -> num_lists = [1,2] 단수, 복수 표현하기
for num_list in num_lists: # 이런 식으로 활용 가능

# while 끝나야 하는 조건이 반드시 있어야함 **시험** 단답식
# 재귀함수 : 반드시 끝나는 조건이 있어야함 **시험** 단답식

# Continue **시험 ** 어떻게 사용하나?
목요일 48page 기억하기 2문제
countinue -> 아래로 내려가지 않고 바로 다음 원소(위로)감
# 짝수로직(or 홀수로직) if num % 2 == 0:

List comprehension '파이썬에만 존재'
 = comprehension 이해
리스트말고도 가능하다.
```
num_lists = [2, 4, 6]
add1 = [num_list ** 2 for num_list in num_lists]
add2 = list(num_list ** 2 for num_list in num_lists)
print(add1)
print(add2)

set1 = { i + i for i in range(5)}
print(set1)

tuple1 = tuple(i + 1 for i in range(5))
print(tuple1)

# enumerate
ist = [ '가', 3, '4']
for x, y in enumerate(ist):
    print(y,x) # x = index, y = list

```

## 2일차(화) 진도
1. Other Type
* None : 값이 없음
* Bollean : True / False 두 가지 경우만 있음
변수명 'is'_로 시작한다 →  True, False 값을 지닌 변수

2. Type Conversion
법(안전) <-> 자유
파이썬 = 동적언어 = 자유로운 언어
대기업에서 파이썬을 안쓰는 EU : 자유로운 만큼 안전하지 않음

(1) 암시적 형변환 : 파이썬, 자바스크립트만 있음.
* 3 + 5.0 → 8.0 # int + float → float
* Ture + 3 → 4 # bool + int → int
* Ture + False → 1 # bool + bool → int

(2) 명시적 형변환 : 모든 프로그램에 다 있음
* str → integer : 형식에 맞는 숫자만 가능
* integer → str : 전부 다 가능
93page 참조

3. 연산자
 3-1
 * 산술연산자 : //(몫), &(나머지), **(거듭제곱)
* 우선순위 꼭 기억 << -(음수 보다 **(거듭제곱)이 우선함)>>
 3-2
* 복합연산자
 3-3
* 비교연산자 
# <시험> is와 == 비교 // is not과 != 비교 104p 단답식
== 는 값을 비교, is 는 레퍼런스(주소)를 비교
2.0 == 2 # True   Hi == hi # False
2.0 is 2 # False  Hi == hi # False

 3-4
* 논리연산자(and, or, not)
 (1) A and B
A    | B    | A and B
---------------------
F(0) | F(0) | F(0)
F(0) | T(1) | F(0)
T(1) | F(0) | F(0)
T(1) | T(1) | T(1)
 (2) A or B
 (3) A not B

4. 단축 평가 (**시험**)
  4-1 and
```
print(3 and 5) # 5
print(False and 5) # False
print(5 and False) # False
print(5 and 3) # 3
print(3 and 0) # 0 
print(0 and 3) # 0
```
* (1) 앞이 0(False)인 경우 뒤에는 계산도 안하고 False다.
* (2) 앞이 1(Ture)인 경우 뒤의 값(0 or 1)을 평가해서 출력한다.

  4-2 or
```
print(5 or 3) # 5
print(3 or 5) # 3
print(True or 0) # True
ptint(0 or 3) # 3
print(0 or 0) # 0
```
* (1) 앞이 True(1)이면 뒤는 보지 않아도 True(1)이다.
* (2) 앞이 False(0)이면 뒤의 값을 평가해서 출력한다.

False, True

5. 맴버십 연산자
 (1) in : 왼쪽 피연산자가 오른쪽 피연산자의 시퀀스에 속하는지 확인
 (2) not in : 왼쪽이 오른쪽에 속하지 않는지 확인

 6. 시퀀스형 연산자
 + : 시퀀스 연결
 * : * 우측의 횟수만큼 반복
 (예) print('[1,2]' + [3,4]) # [1,2,3,4]
      print([1,2] * 2) # [1,2,1,2]

 7. 연산자 우선순위 







