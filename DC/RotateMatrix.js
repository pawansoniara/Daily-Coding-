const N = 3;
const array = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]]
const output = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]


function transpose(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr[i].length; j++) {
            let temp = arr[j][i]
            arr[j][i] = arr[i][j]
            arr[i][j] = temp
        }
    }
}

function reverse(arr) {
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0, k = arr[0].length - 1; j < k; j++, k--) {
            let temp = arr[j][i];
            arr[j][i] = arr[k][i];
            arr[k][i] = temp;
        }
    }
}

transpose(array)
reverse(array)

console.log(array)

