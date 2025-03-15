function sumArray(array) {
  //Validate whether you're working with an array and if the array is at least two elements
  if(!Array.isArray(array) || array.length <= 1) {
    return 0;
  } else {
    //Soft the array is ascending order
    modifiedArray = array.sort((a, b) => a - b);
    //Remove the last elment which is the largest or equal to it
    modifiedArray.shift();
    //Remove the first elment which is the smallest or equal to it
    modifiedArray.pop();
  }
  //Return the sum of the remaining elements
  return modifiedArray.reduce((sum, num) => sum + num, 0);
}