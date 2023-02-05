/* Given a floor of size n x 2 and tiles of size 1 x 2.
The problem is to count the number of ways to tile the given floor using 1 x m tiles.
A tile can either be placed horizontally or vertically.
Both n and m are positive integers and 2 < = m.*/

const numberOfWays = () => {
    tile = 2 * 1 || 1 * 2
    area = 2 * 2
    return number
}


function countWays(n, m) {
    let count = new Array(n + 1);
    count[0] = 0;

    let i;
    for (i = 1; i <= n; i++) {

        if (i > m)
            count[i] = count[i - 1] + count[i - m];

        // base cases and i = m = 1
        else if (i < m || i == 1)
            count[i] = 1;

        // i = = m
        else
            count[i] = 2;
    }

    // required number of ways
    return count[n];
}

let n = 7;
let m = 4;
numberOfWays()