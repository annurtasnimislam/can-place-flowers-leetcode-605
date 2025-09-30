// Time Complexity: O(n)
// Space Complexity: O(1)

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let isFirst = false;
  let isLast = false;
  let middle = 0;
  let target = n;

  if (n === 0) {
    return true;
  }

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

    if (count === target * 2 + 1) {
      return true;
    }

    if (i === flowerbed.length - 2 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      isLast = true;
      target--;
    } else if (flowerbed[i] === 0) {
      count++;
    } else {
      if (count >= 3) {
        middle += Math.floor(count / 3);
      }
      count = 0;
    }
  }

  if (count >= 3) {
    middle += Math.floor(count / 3);
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

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1) === true ? '✅ Test 1 passed' : '❌ Test 1 failed');
console.log(
  canPlaceFlowers([1, 0, 0, 0, 1], 2) === false ? '✅ Test 2 passed' : '❌ Test 2 failed'
);
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1) === true ? '✅ Test 3 passed' : '❌ Test 3 failed');
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2) === true ? '✅ Test 4 passed' : '❌ Test 4 failed'
);
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 1], 2) === false ? '✅ Test 5 passed' : '❌ Test 5 failed'
);
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 0, 1, 0, 0], 3) === true ? '✅ Test 6 passed' : '❌ Test 6 failed'
);
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 4) === true
    ? '✅ Test 7 passed'
    : '❌ Test 7 failed'
);
console.log(canPlaceFlowers([0], 1) === true ? '✅ Test 8 passed' : '❌ Test 8 failed');
console.log(canPlaceFlowers([0, 0, 0, 0], 3) === false ? '✅ Test 9 passed' : '❌ Test 9 failed');
console.log(
  canPlaceFlowers([0, 0, 0, 0, 0], 3) === true ? '✅ Test 10 passed' : '❌ Test 10 failed'
);
console.log(
  canPlaceFlowers([0, 0, 0, 0, 0, 0], 4) === false ? '✅ Test 11 passed' : '❌ Test 11 failed'
);
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 0, 0, 0, 1], 3) === true
    ? '✅ Test 12 passed'
    : '❌ Test 12 failed'
);
console.log(
  canPlaceFlowers([0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1], 3) === true
    ? '✅ Test 13 passed'
    : '❌ Test 13 failed'
);
console.log(
  canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0) === true ? '✅ Test 14 passed' : '❌ Test 14 failed'
);
