# 데이터 구조 date structure
: 여러 데이터를 효과적으로 사용 및 관리하기 위한 구조(str, list, dict 등)

## 자료구조
: 각 데이터의 효율적인 저장 및 관리를 위한 구조를 나눠 놓은 것

1. 데이터 구조 활용
: str, list, dict 등 각 데이터 구조의 **메서드(=함수)**를 호출하여 다양한 기능을 활용하기

  1-1 메서드 Method
  : 객체에 속한 함수 → 객체의 상태를 조작하거나 동작을 수행
  (1) 특징
  * 메서드는 클래스(class)내부에 정의되는 함수
  * 클래스는 파이썬에서 'Type을 표한하는 방법'이며 은연중에 사용해왔다.
  * help 함수를 통해 str을 호출해보면 class였다는 것을 확인 가능
  ```
  print(help(list))

  # enter로 다양한 method 확인 가능
  # 나가고 싶을 떈 Q
  ```
  
  (2) 메서드 호출 방법
  데이터 타입 객체.메서드()
  ```
  # 문자열 메서드 예시
  print('hello'.capitalize()) # Hello 문자열 첫글자를 대문자로 바꿈

  # 리스트 메서드 예시
  numbers = [1, 2, 3]
  numbers.append(4)
  print(numbers) # [1, 2, 3, 4] 리스트 맨 뒤에 인자를 추가
  ```

### 시퀀스 데이터 구조

  1. 문자열 조회 / 탐색 및 검증 메서드
  s.find(x) : x의 첫 번째 위치를 반환, 없으면 -1을 반환
  s.index(x) : x의 첫 번째 위치를 반환, 없으면 오류 발생
  s.isalpha() : 모두 알파벳 문자 여부 * 유니코드 상 Letter(한국어 포함)
  s.isupper() : 모두 대문자 여부
  s.islower() : 모두 소문자 여부
  s.istitle() : 타이틀 형식 여부
  * s.find() 와 s.index 구분()
  : 하나의 큰 프로그램 실행했을 때 오류 발생 후 멈출 지, -1로 표시하고 끝까지 실행할지

  2. 문자열 조작 메서드(새 문자열 반환)
  * ',' 선택인자, 써도 되고 안써도 된다. 파이썬 문법이 아니다.(ebfn)
s.replace(old, new(,count)) : 문자열의 기존 단어를 새로운 단어로 교체
```
text = 'Hello, world!'
new_test = text.replact('world', 'Python')
print(new_text) # Hello, Ptyhon!
```
s.strip([char]) : 문자열의 시작과 끝에 있는 공백 혹은 지정한 문자를 제거
```

```
s.split(set=None, maxsplit=-1) : 지정한 문자를 구분자로 문자열을 분리하여 문자열의 리스트로 반환
```
text = 'Hello, world!'
words = text.split(',')
print(word) # ['Hello'. ' wolrd!]
```
s.separator.join([iterable]) : iterable 요소들을 원래의 문자열을 구분자로 이용하여 하나의 문자열로 연결
```
words = ['Hello', 'World!']
text = '-'.join(words)
print(text) # 'Hello-world!'
```

메서드는 이어서 사용 가능
```
text = 'heLLo, woRld!'
new_text = text.swapcase().replace('l', 'z') # .swapcase() 대소문자 섞음
print(new_text) #HezzO, WOrLD!
```

3. 리스트 값 추가 및 삭제 메서드

L.append(x) : 리스트 마지막 항목 x를 추가
L.extend(iterable) : 리스트에 다른 반복 가능한 객체의 모든 항목을 추가
```
my_list = [1, 2, 3]
my_list.extend([4, 5, 6])
print(my_list) #[1, 2, 3, 4, 5, 6]

# cf. print(my_list.append([4, 5, 6])) #  None
# why? 복사본을 반환하지 않았다. 원본을 바꿨다.
# my_list.append([4, 5, 6])
# print(my_list) # [1 ,2 ,3, [4, 5, 6]] d
```
.insert(i, x) : 리스트의 지정한 인덱스 i 위치에 항목 x를 삽입
```
my_list = [1, 2, 3]
my_list.inser(1, 5)
print(my_list) # [1, 5, 2, 3]
```
.remove(x) : 리스트에서 첫 번째로 일치하는 항목을 삭제
```
my_list = [1, 2, 3]
my_list.remove(2)
print(my_list) # [1, 3]
```
※중요 .pop(i) : 리스트에서 지정한 인덱스의 항목을 제거하고 **반환**, 작성하지 않을 경우 마지막 항목을 제거
```
my_list = [1, 2, 3, 4, 5]

item1 = my_list.pop()
item2 = my_list.pop(0)

print(item1) # 5
print(item2) # 1
print(my_list) #[2, 3, 4]

# 반환하기에 item1, item2 값을 확인할 수 있다
# cf append와 pop은 대립쌍(정반대의 개념)
```
.clear() : 리스트의 모든 항목을 삭제

4. 리스트 탐색 및 정렬 메서드
L.index(x, star, end) : 리스트에 있는 항목 중 가장 왼쪽에 있는 항목 x의 인덱스를 반환(첫 번째로 일치하는)
```
my_list = [1, 2, 3]
idex = my_list.index(2)
print(index) #1 // 값이 아닌, '인덱스' 값을 반환. 헷갈리기 쉬우니 조심
```
L.reverse() : 리스트를 순서를 역순으로 변경(**정렬이 아니다**)
```
my_list = [1, 3, 2, 8, 1, 9]
my_list.reverse()
print(my_list) #[9, 1, 8, 2, 3, 1] // 정렬되는게 아님
```
L.sort() : 리스트를 정렬(매개변수 사용 가능), **원본 리스트**를 오름차순으로 정렬
```
my_list = [3, 2, 1]
my_list.sort()
print(my_list) # [1, 2, 3] // 원본이 변경됨

# 내림차순
my_list.sort(reverse=True) 
print(my_list) # [3, 2, 1]

#.sort()의 기본인자 : (reverse=False), 오름차순
```
L.count(x) : 리스트에서 항목 x가 등장하는 횟수를 반환
```
my_list = [1, 2, 2, 3, 3, 3]
count = my_list.count(3)
print(count) #3
```
4-1 메서드 .sort() 와 내장 함수 sorted 비교
```
numbers = [1, 2, 3]
# sort 메서드
print(number.sort()) # None

numbers = [3, 2, 1]
# sorted 함수
print(sorted(numbers)) #[1, 2, 3] // 반환값이 있다 = 복사본을 만들어서 return
print(numbers) #[3, 2, 1] // 원본값이 바뀌지 않았다.
```

5. 문자열에 포함된 문자들의 유형을 판별하는 메서드
* 중요하진 않음, 교재 '표' 참조, 
.isdecimal() ⊆ .isdigit() ⊆ .isnumeric() 

6. review 중요 메서드 체크
s.split
s.join

L.append
L.extend
L.pop

L.reverse
L.sort

