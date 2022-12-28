'use strict';

const nums = [1, 2, 3, 4, 5, 5];

function isContainSame(array) {
  const set = new Set(array);
  return set.size < array.length;
}
console.log(isContainSame(nums));

// ---------------------------------------------------------------------

const nums1 = [1, 2, 3, 4, 5, 5];
const nums2 = [10, 12, 2, 8, 4, 4];

function getIntersection(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const nums3 = [];

  set2.forEach((value) => (set1.has(value) ? nums3.push(value) : 'just skip'));

  return nums3;
}

console.log(getIntersection(nums1, nums2));
