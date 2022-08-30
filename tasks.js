function includes(array, value) {
    // Change code below this line
  let connect = false;
    for (const item of array) {
    if (item === value) {
      return true;
    }
  }
    return false;
    // Change code above this line
  }
  