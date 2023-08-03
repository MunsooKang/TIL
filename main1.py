T = int(input())
for t in range(1, T+1):
    N = int(input())
    lst = [[0] * N] * N
    lst[0] = list(range(1, N+1))
    x, y = 1, N-1
    n = N+1
    cnt = 0
    r = N-1
    d = [[1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0], [0, -1], [0, -1]]
    while n <= N ** 2:
        for i, j in d:
            if cnt == 2:
                cnt = 0
                r -= 1
            cnt += 1
            for k in range(r):
                lst[x + (i*k)][y + (j*k)] = n
                n += 1
    print(lst)
