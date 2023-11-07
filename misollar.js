//                           // 1-misol
// let a=2, b=2, c=3
// if( a<=0 || b<=0 || c<=0){
//     console.log(0)
// }
// else {
//     console.log(`${a}${b}${c}`)
// }

//                                    //2-misol
// let a=1;
// switch (a) {
//     case 1: console.log("Dushanba"); break;
//     case 2: console.log('Seshanba'); break;
//     case 3: console.log('Chorshanba'); break;
//     case 4: console.log('Payshanba'); break;
//     case 5: console.log('Juma'); break;
//     case 6: console.log('Shanba'); break;
//     case 7: console.log('Yakshanba'); break;
//     default: console.log('none'); break;
// }

//                                        //3-misol
// let yil=2001

// if (yil%400===0 || (yil%4===0 && yil%100!==0)) {
//     console.log('true')
// } else {
//     console.log('false')
// }
//                                        //4-misol
// let a=100
// const number = b =>{
//     if(b%10===b) return 1
//     else if(b%100===b) return 2
//     else if(b%1000===b) return 3
//     else return '[1,999] oraliqdagi sonlarni kiriting'
// }   
// console.log(number(a))

//                                      //5-misol
// let a=1, b=2, c=3, d=4
// if(a>0 && b>0 && c>0 && d>0){
//     console.log('true')
// }
// else{
//     console.log('false')
// }

//                                     //6-misol
// let a=5;
// let sum=0;
// for(let i=1; i<=a; i++){
//     sum=sum+i;
// }
// console.log(sum)

//                                   //7-misol
// let a=28;
// let sum=0;
// for(let i=1; i<=a/2; i++){
//     if(a%i===0) sum+=i
// }
// if(a===sum) console.log(true)
// else console.log(false)

//                                   //8-misol
function son(n){
    let sch=0;
    for(let i=0; n%10>0; i++){
            n=n/10-(n%10)/10
            sch++
    }
    return sch
}
console.log(son(160))

//                                   //9-misol

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//                                    //15-misol

// const ar=[6,5,6,8,1,3,9]

// ar.sort()
// console.log(`max: ${ar[6]}, min: ${ar[0]}`)

//                                    //14-misol
// const ar=[6,5,6,8,1,3,9]
// console.log(...ar)
// ar.sort()
// console.log(...ar)

//                                     //13-misol

// const ar=[6,5,6,8,1,3,9]
// let a=10
// let b=ar.length
// for(let i=0; i<b; i++){
//     for(let j=i+1; j<b; j++){
//         if( (ar[i]+ar[j])===a ){
//             console.log(ar[i])
//             console.log(ar[j])
//         }
//     }
// }

//                                       //12-misol

// const ar=[6,5,6,8,1,3,9]
// let a=5
// let n=0
// for(let i=0; i<ar.length; i++){
//     if(ar[i]===a) n++
// }
// console.log('Bu yerda '+n+" ta "+a+' bor')

//                                        //11-misol

// const ar=[6,5,6,8,1,3,9]
// let n=ar.length
// const ar2=[]

// for(let i=n-1; i>=0; i--){
//     ar2.push(ar[i])
// }
// console.log(...ar2)

//                                       //9-misol


// const ar=f1(1,2,3,4)
// console.log(ar)
// const ar1=[]

// for(let i=0; i<ar.length; i++){
//     ar1.unshift(ar[i])
// }

