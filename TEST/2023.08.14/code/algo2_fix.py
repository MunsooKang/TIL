open = ['(', '{']
close = [')', '}']
equl = ['()', '{}']

T = int(input())
for t in range(1, T+1):
    string = input()
    N, P = [], []
    res, res_error = 0, 0
    top_N, top_P = 0, 0

    for s in string:
        if res_error == -1:
            break

        if s in open:
            P.append(s)
            top_P = top_N
        elif s in close:
            if P == [] or P[-1] + s not in equl:
                res_error = -1
            else:
                if s == ')':
                    D = top_N - top_P
                    P.pop()
                    if P == []:
                        D = len(N)
                        top_N, top_P = 0, 0
                    for _ in range(D):
                        if len(N) != 0:
                            res += N.pop()
                    top_N, top_P = D, D
                else:
                    D = top_N - top_P
                    if res == 0:
                        res = N.pop()
                        top_N -= 1
                    P.pop()
                    if P == []:
                        D = len(N)
                        top_N, top_P = 0, 0
                    for _ in range(D):
                        if len(N) != 0:
                            res = res * N.pop()
                    top_N, top_P = D, D
        else:
            if P == [] or P[-1] not in open:
                res_error = -1
            else:
                N.append(int(s))
                top_N += 1
    if res_error == -1 or P != []:
        res = -1

    print(f'#{t} {res}')
