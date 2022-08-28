const numOne = prompt('Введите трехзначное число');

if (numOne[0] == numOne[1] && numOne[1] == numOne[2]) {
  console.log(`В числе ${numOne} все цифры равны`);
} else if (
  numOne[0] == numOne[1] ||
  numOne[1] == numOne[2] ||
  numOne[0] == numOne[2]
) {
  console.log(`В числе ${numOne} две цифры одинаковые`);
} else {
  console.log(`В числе ${numOne} все цифры разные`);
}
