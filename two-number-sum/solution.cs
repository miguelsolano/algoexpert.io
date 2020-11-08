using System;

public class Program {
	public static int[] TwoNumberSum(int[] array, int targetSum) {
		int i;
    int j;
		
		for (i = 0; i <= array.Length - 1; i++) {
			if (array[i] > targetSum)  {
				continue;
			} else {
				for (j = 0; j <= array.Length - 1; j++) {
					if ((array[i] + array[j]) == targetSum && i != j) {
						int[] result = new int[2];;
						result[0] = array[i];
						result[1] = array[j];
						return result;
					}
				}
			}
		}
		return new int[0];
	}
}

