// console.log("Javascript is super easy");
// function testlet(){
//   if (true){
//     let b=20;
//     console.log(b)
//   }
// }
// testlet();
// function scopetest (){
//     var x = "outervar";
//     console.log(x);
//     if (true){
//         var x = "changed value" ;
//         console.log(x);
//     }
// }
// scopetest();
// function scope(){
//     var x = "outervar";
//     console.log("startfunction", x);
//     if (true){
//         var x = "innervar";
//         console.log("inside",x);
//     }
//     console.log(x)
// }
// // scopedexample();
// function scopelet(){
//     let x = "outerlet";
//     console.log("startfunction",x);
// }
// scopelet();
// function functionscope(){
//     if (true){
//         var a = "inside block var";
//     }
//     console.log(a);
// }
// functionscope();
function blockscope(){
    let b = "outerlet"
    if (true){
        b = "changed outerlet";
        console.log(b);
    }
    console.log(b);
}
blockscope();