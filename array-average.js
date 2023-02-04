function make_avg(average) {
    let sum = 0;
    for (let i = 0; i < average.length; i++) {
      if (isNaN(arr[i])) {
        return "Array contains non-integer values.";
      }
      sum += average[i];
    }
    return sum / average.length;
  }
  