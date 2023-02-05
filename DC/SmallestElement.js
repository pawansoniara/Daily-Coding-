let array = [8, 10, 6, 89, 1, 0, 2, 3, 9, 4]

function smallestNumber(arr, k) {
    let smallestNum = arr[0], i = 0;
    while (i < arr.length - 1) {
        if (smallestNum > arr[i]) {
            smallestNum = arr[i]
        }
        i++
    }
    return smallestNum;
}

const value = smallestNumber(array, 2);
console.log(value)