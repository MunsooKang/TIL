# Data Types
 * 값의 종류와 그 값에 적용 가능한 연산과 동작을 결정하는 속성
 ## 데이터 타입이 필요한 이유
  * 요리 재료마다 특정 도구가 필요하듯, 각 데이터 타입 값도 적당한 형식이 있음

### Numeric Types(수치형 타입)
1. int(정수 자료형)
* 진수 표현
2진수(binary) : 0b
8진수(octal) : 0o
16진수(hexadecimal) : 0x
```
print(0b10) #2
print(0o30) #24
print(ox10) #16

# 진법 변경(10진수 → n진수)
print(bin(12)) #0b1100
print(oct(12)) #0o14
print(hex(12)) #0xc
```
2. float(실수형)
 * 프로그래미 언어에서 float은 실수에 대한 **'근삿값'**
 cf) 유한 정밀도 : 컴퓨터 메모리 용량이 한정돼 있고, 한 숫자에 대해 저장하는 용량이 제한됨
 → 2/3 : 0.6666666666 해당 숫자는 한정된 메모리 내에서 저장할 수 있는 가장 2/3에 가까운 값
 * 주의사항
 컴퓨터는 2진수를 사용, 사람은 10진법을 사용 → 10진수 0.1은 2진수 0.00011001100110011.... 순환소수로 발생
 → Floating Error 발생 가능
 * 실수 연산 시 해결책
 두 수의 차이가 매우 작은 수보다 작은지 확인하거나 math 모듈 활용
 ```
 # 1. 임의의 작은 수 활용
 print(abs(a-b) <= 1e-10>) #True

 # 2. math 모듈 사용
 import math
 print(math.isclose(a,b)) #Ture
 # 복습 : is로 시작하는 함수는 결과값이 True or False
 ```
 * 지수(제곱하는 횟수 표현 10^)
 ```
 #314 * 0.01
 print(314e-2) #3.14
 print(314e2) #31400.0
 ```

3. 복소수형

### Sequence Types
* 여러 개의 값들을 **'순서대로 나열'**하여 저장하는 자료형
1. Sequence Type의 특징
  1.1 순서(Sequence) : 값들이 순서대로 저장(정렬은 X)
  1.2 인덱싱(Indexing) : 각 값에 고유한 번호(index)를 가지고 있으며, 인덱스를 사용하여 특정 위치의 값을 선택하거나 수정할 수 있음
  1.3 슬라이싱(Slicing) : 인덱스 범위를 조절해 부분적인 값을 추출할 수 있음
  1.4 길이(Length) : len() 함수를 사용하여 저장된 값의 개수(길이)를 구할 수 있음
  1.5 반복(Iteration) : 반복문을 사용하여 저장된 값들을 반복적으로 처리할 수 있음

2. Str(문자열)
  2.1 단일 문자나 여러 문자의 조합으로 이루어짐 
* 작은따옴표(') or 큰따옴표(")로 감싸서 표현
중첩 따옴표 : '문자열"안"에 큰따옴표 넣기' or "문자열 '안'에 넣기'"
  2.2 Escape sequence
* 역슬래시(\) 뒤에 특정 문자가 와서 특수한 기능을 함
\n 줄바꿈, \t 탭, \\ 백슬래시, \' 작은따옴표, \" 큰따옴표

String Interpolation : 문자열 내에 변수나 표현식을 삽입하는 방법
* f-string : 문자열에 f 또는 F접두어를 붙이고 표현식으 {}expression으로 작성하여 문자열에 파이썬 표현식의 값을 삽입할 수 있음
```
# f string
print('Debugging roaches 13 room')

bugs = 'roaches'
counts = 100
area = 'study room'
print(f'Debugging {bugs} {counts} {area}')

# 과거에 사용한 문법(.format) = 결과는 f-string과 동일
print('Debugging {} {} {}'.format(bugs, counts, area))
print('Debugging %s %d %s' %(bugs, counts, area))

# f-string 응용 :
# f'{:^10}' → 10칸 내 가운데에 위치, {:>15} → 15칸 내 오른쪽에 위치
# f'{:.4f}' → 소숫점 4번째 자리까지 출력
greeting = 'hi'
print(f'{greeting:^10}')
print(f'{3.141592:.4f}')
```


  2.3 문자열의 시퀀스 특징
  * 인덱싱, 슬라이싱, 길이 함수 적용이 된다.
  ```
  my_str = 'hello'
  print(my_str[1]) # e 인덱싱
  print(my_str[2:4]) #ll 슬라이싱
  print(len(my_str)) #5 길이
  ```
  2.4 
  * index : 앞부터 → [0]부터 시작, 뒤부터 ← [-1]부터 시작
  * slicing : [x:y] → x'이상' y'미만'까지 잘라온다.
    [:y],[x:] → 처음(0)부터 시작 or x부터 끝까지 하는 경우 생략 가능 
    step을 지정하여 추출 → [x:y:z] x이상 y미만 중에서 z칸 간격으로 슬라이싱
    step이 음수인 경우 [::-1] → 문자열 뒤집기
  * 문자열은 불변(변경불가)
    my_str = 'hello'
    my_str[1] ='z' # 불가능
    문자열을 바꾸고 싶은 경우 → **'새로운 문자열'** 생성

3. List(리스트)
* 여러 개의 값을 순서대로 '변경가능'
  3.1 리스트 표현
  * 0개 이상의 객체를 포함하여 데이터 목록을 저장
  대괄호[]로 표기하며, 어떤 자료형도 저장할 수 있음
  3.2 리스트의 시퀀스 특징
  * 인덱싱, 슬라이싱, 길이 함수 사용 가능
  3.3 중첩된 리스트 접근
  ```
  my_list = [1, 2, 'python', ['hello', 'world', '!!!']]
  
  print(len(my_list)) # 5
  print(my_list[4][-1]) # !!!
  print(my_list[-1][1][0]) # w
  ```

3.4 리스트의 가변성
```
my_list = [1, 2, 3]
my_list[0] = 100
print(my_list) # [100, 2, 3]
```

4. Tuple
4.1 튜플 표현
* 0개 이상의 객체를 포함하며 데이터 목록을 저장
소괄호(())로 표기하며, 어떤 자료형도 저장할 수 있음
4.2 튜플의 시퀀스 특징
* 인덱싱, 슬라이싱, 길이 함수 사용 가능
4.3 튜플은 변경 불가(불변)
4.4 튜플은 어디에 쓰일까? list와 차이점
* 불변 특성을 활용하여 안전하게 여러 개의 값을 전달, 그룹화, 할당 등 사용
개발자가 직접 사용하기 보다 '파이썬 내부 동작'에서 주로 사용됨
```
x, y = (10, 20) #튜플작업
print(x) # 10
print(y) #20
```
5. range
* 연속된 정수 시퀀스를 생성하는 '변경 불가능'한 자료형
5.1 range 표현
* range(n) : 0부터 n-1까지의 숫자의 시퀀스
range(n, m) : n부터 m-1까지의 숫자 시퀀스
* 주로 반복문과 함께 사용
list로 형 변환 시 데이터 확인 가능 #print(list(range()))

6. 정리
* 인덱싱 / 슬라이싱 / 길이 함수 사용 가능
* 가변 / 불변 나뉨

### Non-sequence Types

1. dict
* key - value 쌍으로 이루어진 '순서와 중복이 없는' '변경 가능'한 자료형
1.1 dict 표현
* key는 변경 불가능한 자료형만 사용 가능(str,int,tuple,range 등)
value는 모든 자료형 사용 가능
* 중괄호({})로 표기 #my_dict = {'key' : 'value'}
1.2 dict 사용
* key를 통해 value에 접근
```
my_dict = {'apple' : 12, 'banana' : 24}
print(my_dict['apple']) #12
print(my_dict['banana']) #24

#값 변경
my_dict['banana'] = 36
print(my_dict) # {'apple' : 12, 'banana' : 36}
```

2. set
* '순서와 중복이 없는' '변경 가능'한 자료형
2.1 set 표현
* 수학에서의 집합과 동일한 연산 처리 가능 → 교집합, 합집합 등
* 중괄호({})로 표기, 단 빈 세트는 소괄호(())
  ```
  set1 = set()
  set2 = {1, 2, 3}
  set3 = {1, 1, 1} 
  print(set1) #set()
  print(set2) #{1, 2, 3}
  print(set3) #{1} → 중복이 없음
  print(set2[1]) #error → 순서가 없음

  # 세트의 집합 연산
  
  # 합집합
  print(set1 | set2)

  # 차집합
  print(set1 - set2)

  # 교집합
  print(set1 & set2)
  ```

### Other Types

1. None
* 파이썬에서 '값이 없음'을 표현하는 자료형
* None 표현
  ```
  variable = None
  print(variable) #None
  ```

2. Boolean
* 비교, 논리 연산의 평과 결과로 사용됨
* 주로 조건, 반복문과 함께 사용

### Collection
* 여러 개의 항목 또는 요소를 담는 자료 구조
str, list, tuple, set, dict

* 컬렉션 | 변경 가능 여부 | 나열(순서) 여부
  str    |      X        |        O(시퀀스)
  list   |      O        |        O(시퀀스)
  tuple  |      X        |        O(시퀀스)
  set    |      O        |        X(비시퀀스)
  dict   |      O        |        X(비시퀀스)

### 불변과 가변
1. 불변
* my_str = 'hello' : 'hello' 전체 값이 하나의 메모리에 할당
2. 가변
* my_list = [1, 2, 3] : 메모리에 1, 2, 3의 값이 각각 할당
주소'들'의 모음(객체들의 참조를 모아둔 콜렉션)

### 암시적 형변환
* Boolean과 Numeric Type 에서만 가능

### 연산자
* 산수연산자, 복합연산자 등


```
# 가변데이터 주의 사항
list1 = [1, 2, 3]
list2 = list1

list1[0] = 100
print(list1) # [100, 2, 3]
print(list2) # [100, 2, 3]

# 왜 list2도 변했는지?
# list1이 참조(바라보는) 주소와, list2가 참조하는 주소가 같음 stack memory 주소값 (하나의 heap memory 주소값)
#참조 주소 : [1,2,3] 각각 주소의 모음, 
```

```
# 불변데이터
x = 10
y = x

x = 20
print(x) # 20
print(y) # 10
# x가 참조하는 주소 = 10 → 20, y가 참조하는 주소 → 10
```

___
___
___
heap의 자료는 수정이 가능

list로 모든 내용을 다 넣을 수 있는데 왜 다른 자료형이 필요한가?
무한대로 늘렸을 때, 순서대로 정렬이 되어있단 보장이 없을 때(안되어 있을 경우), 일일히 1:1 대조해야함
-> 이를 해결하기 위해 dict 자료형이 나옴
key를 통해 바로 value 확인 가능 
Sequence Type
시퀀스(순서) -> 값이 '순서'대로 저장

문자열을 변경하지 못하는 이유
문자가 아닌 다른 데이터 타입을 섞는 것을 방지하기 위해
ex) 가나다라 -> 가1나다3.14라 (X)

# 교재2 40page -> 시험
# my_str[::-1] 문자열이 뒤집혔다~

리스트 != 배열(array)
리스트 : 여러 개를 담기 위한 '자료 구조'

배열 : 안정, 예상성이 높음
리스트 : 유연성이 높음
파이썬엔 리스트만 있다... ㅎ 
