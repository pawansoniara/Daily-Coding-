
let a = [1, 5, 10, 20, 20, 40, 80],
    b = [6, 7, 20, 20, 80, 99, 100],
    c = [3, 4, 15, 20, 20, 30, 70, 99, 80, 120];
let arr = []

function findCommon(a, b, c, m, n, o) {
    let i = 0, j = 0, k = 0;
    while (i < m && j < n && k < o) {
        if (a[i] == b[j] && b[j] == c[k]) {
            i++;
            j++;
            k++;
            arr.push(a[i]);
        } else if (a[i] < b[j]) {
            i++;
        } else if (b[j] < c[k]) {
            j++;
        } else {
            k++;
        }
    }
}


findCommon(a, b, c, a.length, b.length, c.length)
console.log(arr)
// Output: 20, 80