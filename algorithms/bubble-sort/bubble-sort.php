<?php

function bubble_sort($arr) {
  for($i = 0; $i < count($arr); $i++) {
    for($j = 0; $j < count($arr); $j++) {
      if (!empty($arr[$j + 1]) && $arr[$j] > $arr[$j + 1]) {
        $cache = $arr[$j];
        $new = $arr[$j + 1];
        $arr[$j + 1] = $cache;
        $arr[$j] = $new;
      }
    }
  }

  print_r($arr);
}

bubble_sort([3,8,1,2,7,10,14,12]);
