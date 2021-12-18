import { MyEventEmitter } from "./MyEventEmitter";

export const START : string = 'start'
export const TICK : string = 'tick'
export const STOP : string = 'stop'
export const ONCE : string = 'once'


// Clock should inherit from EventEmitter
export class Clock extends MyEventEmitter{
    
    private intervalID: ReturnType<typeof setInterval> = setInterval(() => {}); 
    private countTicks : number = 0
    private ms : number = -1 ;
    // constructor
    constructor(milisecs:number){
        super()
        this.ms = milisecs
    }
    // start
    start(){
        this.emit(START, this.countTicks)
        this.intervalID = setInterval(this.tick, this.ms)
        console.log(this.eventNames());

    }
    // stop
    stop(){
        this.emit(STOP, this.countTicks)
        clearInterval(this.intervalID)
        console.log(this.eventNames());
    }
    // tick
    private tick = () => {
        this.countTicks++
        this.emit(TICK, this.countTicks)
        this.emit(ONCE,this.countTicks)
    }
  }
