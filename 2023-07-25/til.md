# 비시퀀스 데이터 구조

## SET
1. set 메서드
 (1) s.add(x) : 세트 s에 항목 x를 추가. 이미 x가 있다면 변화 없음
 
 (2) s.clear() : 세트 s의 모든 항목을 제거
 ```
 my_set = {1, 2, 3}
 my_set.clear()
 print(my_set) #set() why? {}가 아닌 ()인가 : dictionary왜 헷갈리지 않기 위해
 ```
 
 (3) s.remove(x) : 세트 s에서 항목 x를 제거. 항목 x가 없을 경우 key error
 ```
 my_set = {1, 2, 3}
 my_set.remove(2)
 print(my_set) # {1, 3}

 my_set.remove(10)
 print(my_set) #key error
 # discard와 달리 None값을 반환하지 않고 key error가 발생한다.
 ```
 
 (4) s.pop() : 세트 s에서 **랜덤**하게 항목을 **반환**하고, 해당 항목을 제거
 ```
 my_set = {1, 2, 3}
 element = my_set.pop()
 
 print(element) # 1 // 제거(pop)한 항목을 반환한다.
 print(my_set) # {2, 3} 
 ```
* 제거되는 순서가 정해진(반복)것 처럼 느껴지는 이유는 Hash table 때문.
* Hash table 관련 md 참조 
* s.pop()의 무작위(random)이 아니라 **임의의 요소**제거다.  

 (5) s.discard(x) : 세트 s에서 항목 x를 제거
 ```
 my_set = {1, 2, 3}
 my_set.discard(2)
 print(my_set) #{1, 3}

 my_set.discard(10)
 print(my_set) # None
 # remove와 달리 에러가 발생하지 않고 None을 반환한다(별도의 반환값 없음).

 ```
 
 (6) s.update(iterable) : 세트 s에 다른 iterable 요소를 추가
```
my_set = {1, 2, 3}
my_set.update([4, 5, 1])
print(my_set) # {1, 2, 3, 4, 5}
# extend와 달리 iterable 요소 추가 가능(?)
```
___
2. 세트의 집합 메서드
s1.diffrence(s2) == s1 - s2
s1.intersection(s2) == s1 & s2
s1.issubset(s2) == s1 ≤ s2
s1.issuperset(s2) == s1 ≥ s2
s1.union(s2) == s1 ∪ s2


## Dictionary
1. 딕셔너리 메서드
(1) D.clear()
(2-1)D.get(key[,default]) : 키 연결된 값을 반환하거나, 키가 없으면 None 혹은 기본 값을 반환
```
person = {'name' : 'Alice', 'age' : 25}

print(person.get('name')) # Alice
print(person.get('country')) # None
print(person.get())

# 찾고자 하는 키가 있을 때
print(my_dict['']) == print(my_dict.get('name'))
# 찾고자 하는 키가 없을 때
print(my_dict.get('age')) # None
print(my_dict['name']) # KeyError
print(my_dict.get.('age', 'Unknown')) # Unknown
```

(3)D.keys() : 딕셔너리 키를 모은 개체를 반환
(4)D.values() : 딕셔너리 벨류를 모은 개체를 반환
(5)D.items() : 딕셔너리 키 및 벨류 쌍을 모든 개체를 반환
* (3),(4),(5) 예제
```
person = {'name' : 'Alice', 'age' : 25}

print(person.keys())

for key in person.keys():
    print(key)

print(person.values())

for value in person.values():
    print(value)

print(person.items())

for item in person.items():
    print(item) 
```

(6) D.pop(k[,defalut]) : 키를 제거하고 연결됐던 값을 반환(없으면 에러나 default를 반환)
```
person = {'name' : 'Alice', 'age' : 25}
print(person.pop('age')) # 25
print(person.pop('country')) # KeyError
print(person.pop('county', 'country 키는 없어요.')) # country 키는 없어요.
```

(7) D.setdefault(k) : 키와 연결된 값을 반환(=D.get()), 하지만 key가 없다면 default와 연결된 키를 딕셔너리에 추가하고 default를 반환
```
person = {'name' : 'Alice', 'age' : 25}

print(person.setdefault('country', 'KOREA')) # KOREA
print(person) # {'name' : 'Alice', 'age' : 25, 'country' : 'KOEAR'}

# 이미 있는 key라면 연결된 값을 반환
print(person.setdefault('age', 50)) # 25
```

(8) D.update(other) : other가 제공하는 키/값 쌍으로 딕셔너리를 갱신, 기존 키는 덮어쓴다
```
person = {'name' : 'Alice', 'age' : 25}
other_person = {'name' : 'Jane', 'gender' : 'Female'}

person.update(other_person)
print(person) # {'name' : 'Jane', 'age' : 25, 'gender' : 'Female'}

person.update(age=50)
print(person) #{'name' : 'Jane', 'age' : 50, 'gender' : 'Female'}
```

(9) 연습문제
```
# 혈행혁 인원수 세기
# 결과 : {'A' : 3, 'B' : 3, 'O' : 3, 'AB' : 3}
blood_types = ['A', 'B', 'A', 'O', 'AB', 'AB', 'O', 'A', 'B', 'O', 'B', 'AB']

# 1. []
new_dict = {}
for blood_type in blood_types:
    if blood_type in new_dict:
        new_dict[blood_type] += 1
    else:
        new_dict[blood_type] = 1
print(new_dict)

# 2. .get()
new_dict = {}
for blood_type in blood_types:
        new_dict[blood_type] = new_dict.get(blood_type , 0) + 1
print(new_dict)

# 3. .setdefault()
new_dict = {}
for blood_type in blood_types:
        new_dict.setdefault(blood_type, 0)
        new_dict[blood_type] += 1
print(new_dict)
```

# 복사

## 데이터 타입과 복사
* 가변타입과 불변타입의 데이터 복사를 다르게 다룬다.

1. 가변타입의 복사
```
a = [1, 2, 3]
b = a
a[0] = 10

print(a) # [10, 2, 3]
print(b) # [10, 2, 3]
```

2. 불변타입의 복사
```
a = 20
b = a
b = 10

print(a) # 20
print(b) # 10
```

3. 복사 유형
  (1) 할당
  * a = b

  (2) 얉은 복사
  * 슬라이싱
  * copy(내장함수)
  ```
  a = [1, 2, 3]
  
  # 슬라이싱
  b = a[:]
  b[0] = 100
  print(a, b) # [1, 2, 3] [100, 2, 3]

  # copy
  c = a.copy()
  c[0] = 100
  print(a, c) # [1, 2, 3] [100, 2, 3]

  ## 얕은 복사의 한계
  a = [1, 2, [3, 4]]
  b = a[:]
  c = a.copy()

  b[2][0] = 30
  print(a, b, c) # [1, 2, [30, 4]] [1, 2, [30, 4]] [1, 2, [30, 4]]
  ```

  (3) 깊은 복사
  ```
  # copy = copy.deepcopy(origin)
  
  import copy
  lst = [1, 2, [3, 4]]
  deep_lst = copy.deepcopy(lst)
  
  deep_lst[2][0] = 30

  print(lst, deep_lst) # [1, 2, [3, 4]] [1, 2, [30, 4]]

  ```