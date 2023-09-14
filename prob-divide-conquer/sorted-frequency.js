function sortedFrequency(arr, num) {
    const firstOccurrence = findFirstOccurrence(arr, num);
    const lastOccurrence = findLastOccurrence(arr, num);
  
    if (firstOccurrence === -1) {
      return -1;
    }
  
    return lastOccurrence - firstOccurrence + 1;
  }
  
  function findFirstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === num) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findLastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === num) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  

module.exports = sortedFrequency