/**
You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

init(arr, size): initialize with the original large array and size.
set(i, val): updates index at i with val.
get(i): gets the value at index i.
 */


 class SparseArray {
     array={};
     size=0;
     constructor(_arr){
        for(const index in _arr){
            if(_arr[index]) this.array[index]=_arr[index];
        }
        this.size=_arr.length;
     }
     set(i, val){
        if(i<0 || i>this.size) throw 'invalid index'

        if(i==this.size)this.size++;
        
         this.array[i]=val;
     }

     get(i){
        if(i<0 || i>this.size-1) throw 'invalid index'
        return this.array[i] || 0;
     }

     values(){
         return this.array;
     }

 }



 const sparseArray=new SparseArray([0,4,5,2,1,0,2,4,12,0,0,12,0,00,0,0,0,0,5,0,5,0,0,0,0,41,45,5])

 console.log(sparseArray.values())

 console.log(sparseArray.get(3))

 sparseArray.set(3,55)

 console.log(sparseArray.get(3))

 console.log(sparseArray.values())