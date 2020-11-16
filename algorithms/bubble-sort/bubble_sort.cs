using System;

public void BubbleSort(int[] array) {
  int i,j;
  int cache;

  for(i = 0; i < array.Length; i++) {
    for(j = 0; j < array.Length; j++) {
      if (array[j] > array[j + 1]) {
        cache = array[j];
        array[j] = array[j + 1];
        array[j + 1] = cache;
      }
    }
  }

  Console.WriteLine(array);
}


