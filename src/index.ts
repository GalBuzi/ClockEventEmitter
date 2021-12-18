import { Clock } from "./Clock"
import { START, TICK, STOP, ONCE } from "./Clock"
// print out the rolex count on every tick
// set the rolex to stop after 5 ticks
// print out the clock started or stopped along with its current count
function startClock(payload: number){
    console.log('>>>>>>>start with count' , payload)
}

function stopClock(payload : number){
    console.log('<<<<<<<ends with count ', payload)
}


function tickingMyClock(payload : number){
    console.log('number of ticks so far: ' , payload)
    
    if (payload >= 10){
        rolex.stop()
    }
}

// function once1(payload : number){
//     setTimeout(()=> console.log('once function num 1  ' , payload), Math.random() * 3000)
    
// }

// if you've completed the `once` bonus task
//   - make sure you respond to start and stop only once
//
// if you've completed the `eventNames` bonus task
//   - print out the event names on start and stop
//   - validate the event names for start and stop had been removed
//     (they are called only once...)
//
//
// start the rolex
let rolex = new Clock(500);
rolex.on(TICK, tickingMyClock)
// rolex.once(ONCE, once1)
rolex.once(START, startClock)
rolex.once(STOP, stopClock)
console.log(rolex.eventNames());

rolex.start()


// console.log(rolex.eventNames());
// console.log(rolex.listeners(TICK));



// =============================== Exam Exercises =================================

// ------------------------------------- canFind -------------------------------------

// https://edabit.com/challenge/wQGGp6Qce6phDCvW9


// function canFind(bigrams:string[], words:string[]) {
//     return bigrams.filter(b=> words.some(w=>w.includes(b))).length === bigrams.length
// }

// console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]))// ➞ true

// console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])) // ➞ false

// console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])) // ➞ true

// console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])) //➞ false




// ------------------------------------- reorderDigits -------------------------------------

// https://edabit.com/challenge/4zCJaqJvEcAmqcb7y

// function reorderDigits (arr:number[], flag:string):number[]{
//     let str = arr.map(x=> ''+x)
//     let ordered = str.map(s=> {
//         let arrChar = s.split('')
//         let sorted : string[] = []
//         if(flag === 'desc'){
//             sorted = arrChar.sort((a,b)=> Number(b)-Number(a))
//         }else{
//             sorted = arrChar.sort((a,b)=> Number(a)-Number(b))
//         }

//         return Number(sorted.join(''))
//     })

//     return ordered
// }

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
//   //➞ [155, 134, 89, 44, 112]

// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));
// //  //➞ [551, 431, 98, 44, 211]

// console.log(reorderDigits([63251, 78221], "asc"));
// // // ➞ [12356, 12278]

// console.log(reorderDigits([63251, 78221], "desc"));
// //  // ➞ [65321, 87221]

// console.log(reorderDigits([1, 2, 3, 4], "asc"));
// //  // ➞ [1, 2, 3, 4]

// console.log(reorderDigits([1, 2, 3, 4], "desc"));
// //  // ➞ [1, 2, 3, 4]


// ------------------------------------- Stock Picker -------------------------------------

// https://edabit.com/challenge/DQR6rjLkFtKgoqgWX

// function stockPicker(arr : number[]):number{
//     let profits = arr.map((item,index) => {
//         let tmpArr = [...arr].slice(index)
//         let diff = tmpArr.map(x=> x-item)       
//         return Math.max(...diff)
//     })
   
//     let maxProf = Math.max(...profits)
//     if(maxProf <=0){
//         return -1
//     } 
//      return maxProf
// }

// function stockPicker2(arr:number[]):number {
// 	const profits = arr.map((i, idx) => Math.max(...arr.slice(idx + 1)) - i);
// 	const best = Math.max(...profits);
// 	return best < 0 ? -1 : best;
// }
// console.log(stockPicker2([10, 12, 4, 5, 9]) );//➞ 5
// console.log(stockPicker2([14, 20, 4, 12, 5, 11]));// ➞ 8
// console.log(stockPicker2([80, 60, 10, 8]));// ➞ -1

// let x = Promise.resolve(5).then(n => n)
// console.log(x);






