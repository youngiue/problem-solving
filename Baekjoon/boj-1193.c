#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    int x,n;
    scanf("%d",&x);

    int i=1;
    while (1) {
        if (i* (i-1) / 2 < x && x <= i * (i+1) / 2) break;
        
        i++;
    }
    if ((i%2) != 0) {
        n=i*(i+1)/2-x;
        printf("%d/%d",1+n,i-n);
    }
    if ((i%2) == 0) {
        n=i*(i+1)/2-x;
        printf("%d/%d",i-n,1+n);
    }
    return 0;
}