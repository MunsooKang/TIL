open = ['(', '{']
close = [')', '}']
equl = ['()', '{}']

T = int(input())
for t in range(1, T+1):
    string = input()
    stack_n = []
    stack_p = []
    res = 0
    res_error = 0
    top_n = 0
    top_p = -1
    length = len(string)
    for i in range(length):
        s = string[i]
        if i == length-1:
            top_n += 1
        if res_error == -1:
            break

        if s in open:
            if stack_p != []:
                if stack_p[-1] != s:
                    top_p += 1
            stack_p.append(s)
        elif s in close:
            if stack_p == [] or stack_p[-1] + s not in equl:
                res_error = -1
            else:
                if s == ')':
                    stack_p.pop()
                    k = top_n - top_p
                    for _ in range(k):
                        res += stack_n.pop()
                    top_n -= k
                    top_p = top_n
                else:
                    if res == 0:
                        res = stack_n.pop()
                        top_n -= 1
                    stack_p.pop()
                    k = top_n - top_p
                    for _ in range(k):
                        res = res * stack_n.pop()
                    top_n -= k
                    top_p = top_n
        else:
            if stack_p == []:
                res_error = -1
                break
            else:
                stack_n.append(int(s))
                top_n += 1
    if res_error == -1:
        res = -1

    print(f'#{t} {res}')