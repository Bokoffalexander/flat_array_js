// To make array flat	
let flat = function (arr, depth){
let res = []; //empty
//start LOOP to iterate elems
  for (const elem of arr){
	   if (Array.isArray(elem)&&(depth>0)) {
             res.push(...elem);
        } else {
             res.push(elem);
        }// end if-else
       
   }// end for LOOP  
    
    return res;
}; //end flat function 
/////////////TEST//////////////
const test = flat ( [1, [1,4], [2, 5], 9], 1);
console.log(test);
