def generate_subsets(nums, n):
    def dfs(start, subset):
        if len(subset) == n:
            subsets.append(subset[:])
            return
        for i in range(start, len(nums)):
            subset.append(nums[i])
            dfs(i + 1, subset)
            subset.pop()

    subsets = []
    dfs(0, [])
    return subsets

T = int(input())
A = list(range(1, 13))
for t in range(1, T + 1):
    N, K = map(int, input().split())
    res = 0
    subests = generate_subsets(A, N)
    for i in subests:
        if sum(i) == K:
            res += 1
    print(f'#{t} {res}')
    #
    # subsets = []
    # subset = []
    # if len(subset) == N:
    #     subsets.append(subset[:])
    # for i in range(1, 12):
    #     subset.appned(A[i])




