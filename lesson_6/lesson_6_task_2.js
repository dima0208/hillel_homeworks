function removeElement(array, item) {
    if (array.includes(item)) {
            console.log(`removeElement: из массива [${array}] удален элемент ${item}`);
            array.splice(array.indexOf(item), 1);
            console.log(array);
    } else (console.log(`removeElement: в массиве [${array}] нет элемента ${item}`));
};
