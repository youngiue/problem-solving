#include <stdio.h>

int compare(const void *a, const void *b) {
    int num1 = *(int *)a;
    int num2 = *(int *)b;
    return num1 - num2;
}

int main(void) {
    int a,b,c;

    scanf("%d %d %d",&a,&b,&c);
    while(a!=0 || b!=0 || c!=0) {
        int arr[] = {a,b,c};
        qsort(arr,3,sizeof(int),compare);

        if (arr[0]+arr[1]<=arr[2]) {
            printf("Invalid\n");
            scanf("%d %d %d",&a,&b,&c);
            continue;
        }

        if (a==b && b==c && a==c) printf("Equilateral\n");
        else if (arr[0]==arr[1] || arr[1]==arr[2]) printf("Isosceles\n");
        else printf("Scalene\n");

        scanf("%d %d %d",&a,&b,&c);

    }
        
    return 0;
}
