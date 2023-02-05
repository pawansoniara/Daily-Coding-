let arr = [1, 2, 3],
    arr1 = [3, 4, 3, 1];
let m = 3, n = 4;

function peakElement(array, size) {
    let i = 0;
    let index = -1;
    while (i < size) {
        if (i == 0 && array[i] > array[i + 1]) {
            index = i
        } else if (array[i] < array[i + 1] && array[i + 1] > array[i + 2]) {
            index = i + 1
        } else if (i == size - 1 && array[size - 1] > array[size - 2]) {
            index = size
        }
        i++;
    }
    return index
}


const value = peakElement(arr1, n)
console.log(value)