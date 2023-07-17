# SW Expert Academy 두 개의 숫자열
# 길이(N,M)값 주어지는 줄 모르고 뻘짓했다... ㅜㅜ
# 내일 수정해서 문제 풀기
test_case = int(input())
num = 1
while num <= test_case:
    Ai = list(map(int, input().split()))
    Bj = list(map(int, input().split()))
    if len(Ai) > len(Bj):
        sum_result = []
        for i in range(1+len(Ai)-len(Bj)):  
            sum = 0
            for j in range(len(Bj)):
                sum += Ai[i+j] * Bj[j]
            sum_result += [sum]
        print(sum_result) 
        print('#' + str(num), max(sum_result))
    elif len(Ai) < len(Bj):
        sum_result = []
        for i in range(1+len(Bj)-len(Ai)):  
            sum = 0
            for j in range(len(Ai)):
                sum += [Ai[j] * Bj[i+j]]
            sum_result += [sum]
        print(sum_result) 
        print('#' + str(num), max(sum_result))
    else:
        sum_result = []
        sum = 0
        for i in range(len(Ai)):
            sum += [Ai[i] * Bj[i]]
            sum_result += [sum]
        print(sum_result)    
        print('#' + str(num), max(sum_result))
    num += 1
###############################
# 아래는 ChatGpt가 수정해준 코드 
test_case = int(input())
num = 1
while num <= test_case:
    Ai = list(map(int, input().split()))
    Bj = list(map(int, input().split()))
    if len(Ai) > len(Bj):
        sum_result = []
        for i in range(1 + len(Ai) - len(Bj)):
            _sum = 0
            for j in range(len(Bj)):
                _sum += Ai[i+j] * Bj[j]
            sum_result.append(_sum)
        print('#' + str(num), max(sum_result))
    elif len(Ai) < len(Bj):
        sum_result = []
        for i in range(1 + len(Bj) - len(Ai)):
            _sum = 0
            for j in range(len(Ai)):
                _sum += Ai[j] * Bj[i+j]
            sum_result.append(_sum)
        print('#' + str(num), max(sum_result))
    else:
        sum_result = []
        _sum = 0
        for i in range(len(Ai)):
            _sum += Ai[i] * Bj[i]
            sum_result.append(_sum)
        print('#' + str(num), max(sum_result))
    num += 1


