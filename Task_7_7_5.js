function arraySort(arr) {
    const newArraySort = arr.sort((a, b) => a - b); 
    return newArraySort;
}
const array_3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const arraySorted = arraySort(array_3);
console.log(arraySorted);