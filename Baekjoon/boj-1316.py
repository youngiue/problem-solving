N=int(input())
res=N
for _ in range(N):
    s=input()
    a=[]
    for i in range(1,len(s)):
        if s[i] not in a:
            if s[i]!=s[i-1]:
                a.append(s[i-1])
        else:
            res-=1
            break
print(res)