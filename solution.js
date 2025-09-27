// Time Complexity: O(n)
// Space Complexity: O(1)

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let isFirst = false;
  let isLast = false;
  let middle = 0;
  let target = n;

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[i] === 0) {
      if (n === 1 && flowerbed.length === 1) {
        return true;
      }
      if (flowerbed[i + 1] === 0) {
        target--;
        isFirst = true;
        continue;
      }
    }

    if (
      i === flowerbed.length - 2 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      isLast = true;
      target--;
    }

    if (flowerbed[i] === 0) {
      count++;
    } else {
      if (count >= 3) {
        middle += Math.floor(count / 3);
      }
      count = 0;
    }

    if (count === target * 2 + 1) {
      return true;
    }
  }

  if (isFirst && isLast && n === 2) {
    return true;
  } else if (isFirst && n === 1) {
    return true;
  } else if (isLast && n === 1) {
    return true;
  } else if (middle === target) {
    return true;
  }

  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); //true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); //true
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2)); //true
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1, 0, 0], 3)); //true
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 4)); //true
console.log(canPlaceFlowers([0], 1)); //true
console.log(canPlaceFlowers([0, 0, 0, 0], 3)); //false
