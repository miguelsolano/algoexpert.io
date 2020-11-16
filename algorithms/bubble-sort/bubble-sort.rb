def bubble_sort(arr)
  arr.each_with_index do |_ , index|
    arr.each_with_index do |_, idx|
      if !arr[idx + 1].nil? && arr[idx] > arr[idx + 1]
        arr[idx + 1], arr[idx] = arr[idx], arr[idx + 1]
      end
    end
  end

  arr
end

puts bubble_sort([3,2,7,1,9])

