T = int(input())
for t in range(1, T+1):
    N = int(input())
    lst = [list(map(int, input().split())) for _ in range(N)] # 이차원 리스트로 입력받음
    cnt = 0 # 봉우리의 수
    for i in range(N):
        for j in range(N):
            top = lst[i][j] # 봉우리 기준
            for x, y in [[-1, 0], [0, 1], [1, 0], [0, -1]]: #상우하좌
                if 0 <= i+x < N and 0 <= j+y < N:
                    if top <= lst[i+x][j+y]:
                        top = 0 # 상우하좌 중 하나라도 봉우리기준(해당 칸의 높이) 이상이면 봉우리를 0으로 한다
            if top != 0: # 봉우리가 0이 아니면 상후하좌 중 가장 높다는 소리기에 봉우리의 수를 1개 더한다
                cnt += 1
    print(f'#{t} {cnt}')