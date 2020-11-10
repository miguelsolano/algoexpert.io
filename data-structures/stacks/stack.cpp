#include <vector>
#include <iostream>

using namespace std;

class Stack {
  public: int top = 0;

  public: vector<int> arr = {3};

  int push(int x) {
    top = top + 1;
    return arr[top] = x;
  }

  int pop() {
    if (top - 1 >= 0) {
      top = top - 1;
      return arr[top + 1];
    } else {
      return arr[top];
    }
  }

  vector<int> data() {
    return arr;
  }
};

int main() {

  Stack st;

  st.push(2);
  st.push(1);

  cout << st.pop();
  cout << st.pop();
  cout << st.pop();

  return 0;
}
