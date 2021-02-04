const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [13, 14, 15, 16],
  ];
  
  const arra = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
  
  let counter = 0;
  let x = 0;
  let y = 0;
  
  while (counter < arr.length / 2) {
    x += counter;
    y += counter;
  
    if (x == counter && y == counter) {
      while (y < arr[x].length) {
        console.log(x + " " + y + "  ", arr[x][y] + ",");
        y++;
      }
    console.log(x, y);
    counter++;
    }
  
    /*if(x==counter && y!=counter){        
          while(y<arr[x].length){
              console.log(arr[x][y]+',')
              x++;
          }
      }*/
  }
