function main(num1, num2) {

    // let results = num1 / num2;
    let num = 0
    
//    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
//        return
//    }

   num1 = Math.abs(num1);
   num2 = Math.abs(num2);
   console.log(num1)

   while (num2) { 
       let total = num2;
       num2 = num1 % num2;
       num1 = total;
   }; 
    console.log(num1)
}
main(15, 5);
main(2154, 458)





// var max1=Math.max(text1,text2)
// var max2=Math.max(max1,text3)
// for (i=-max2;i<=max2;i=i+1){
// var a=text1/i
// var b=Math.floor(a)
// var c=a-b
// if (c==0){
// var first=1
// }
// else {
// var first=0
// }
// var a=text2/i
// var b=Math.floor(a)
// var c=a-b
// if (c==0){
// var second=1
// }
// else {
// var second=0
// }
// var a=text3/i
// var b=Math.floor(a)
// var c=a-b
// if (c==0){
// var third=1
// }
// else {
// var third=0
// }
// if ((first==1)&&(second==1)&&(third==1)){

// document.form1.answer.value=i
// }
// else{}

// }