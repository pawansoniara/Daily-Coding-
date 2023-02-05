// let Arr = [1, 10];
// let Arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
let Arr = [65, 6, 74, 94, 56, 89, 9, 63, 75, 25, 34, 68, 93, 48, 16]
// let Arr = [15, 86, 78, 93, 100, 6]
// let Arr = [35 ,98 ,95 ,94 ,75 ,8 ,47 ,28 ,75 ,91 ,28 ,83 ,72 ,54 ,67 ,9 ,34]

function maxIndexDiff(A, N) {
    let i = 0, y = N;
    while (i < N / 2) {
        if (A[i] < A[y - i]) {
            return (y - i) - i
        }
        if (A[i] < A[y - i - 1]) {
            return (y - i) - i - 1
        }
        if (A[i + 1] < A[y - i]) {
            return (y - (i)) - (i + 1)
        }
        if (A[i + 1] < A[y - i - 1]) {
            return ((y - 1) - (i)) - (i + 1)
        }

        i += 2;
        y-2;
    }
    return -1
}

console.log(maxIndexDiff(Arr, Arr.length - 1));
