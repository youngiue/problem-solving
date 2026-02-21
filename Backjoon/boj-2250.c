#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    int row, col;
    struct TreeNode *left,*right;
} TreeNode;

TreeNode* nodes[10001]={0};
int isChild[10001]={0};

TreeNode *getNode(int num) {
    if (num==-1) return NULL; // 자식 없음
    if (nodes[num]==NULL) { // 처음 등장 번호
        nodes[num]=malloc(sizeof(TreeNode)); // 동적 메모리 할당
        nodes[num]->data=num;
        nodes[num]->left=NULL;
        nodes[num]->right=NULL;
    }
    return nodes[num];
}

int numCol=1;
void inorder(TreeNode* root, int level) { // LVR
    if (root) {
        inorder(root->left, level+1);
        root->row=level;
        root->col=numCol++;
        printf("Node %d -> row: %d, col: %d\n", root->data, root->row, root->col);
        inorder(root->right, level+1);
    }
    return;
}

int main(void) {
    int N;
    int node, Lnode, Rnode;

    scanf("%d",&N);

    for (int i=0;i<N;i++) {
        scanf("%d %d %d",&node, &Lnode, &Rnode);
        TreeNode *r=getNode(node);
        r->left=getNode(Lnode);
        r->right=getNode(Rnode);
        
        if (Lnode!=-1) isChild[Lnode]=1;
        if (Rnode!=-1) isChild[Rnode]=1;
    }
    TreeNode *root = NULL; // 루트 노드 찾기
    for (int i=1; i<=10000;i++) {
        if (nodes[i] != NULL && isChild[i]==0) {
            root=nodes[i];
            break;
        }
    }
    inorder(root,1);

    return 0;
}