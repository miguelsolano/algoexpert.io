def bubble_sort(arr):
    for index, val in enumerate(arr):
        for idx, v in enumerate(arr):
            if len(arr) > (idx + 1) and arr[idx] > arr[idx + 1]:
                arr[idx + 1], arr[idx] = arr[idx], arr[idx + 1]

    print(arr)

bubble_sort([6,2,4,1,9,14,10])


