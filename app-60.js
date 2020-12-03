
const abc = [45, 65,  65, 1, 1, 31.5, 1, 1,45, 54, 21,45, 54, 20.5, 32, 45]
const total = abc.reduce((p, c) => p + c)


const _abc = abc//.sort((a, b) => a - b).reverse();
let result = []
let pointer=0;
let itrat=0;
let itratPointer=0;

while(result.reduce((p,c)=>p+c,0) != total/2){
       
        if(itrat != pointer){
            const itratVal=_abc[itrat];
           
            console.log(pointer," itratVal-->",itratVal,'  ::: ',_abc[pointer])

            const val = result.reduce((p,c)=>p+c,itratVal+_abc[pointer]);
            if(val < total/2){
                result.push(_abc[pointer]);
            }

            if(val == total/2){
                result=[itratVal, ...result,_abc[pointer]]
                break;
            }
        }
    
    pointer++;
    
    if(pointer ==_abc.length){
        itratPointer++;
        pointer=itratPointer;
        result=[];
    }

    if(itratPointer ==_abc.length){
        itrat++;
        itratPointer=0;
        pointer=itratPointer;
        result=[];
    }

    if(itrat==_abc.length) break;
}


console.log(abc,total,'RESULT----->',result)