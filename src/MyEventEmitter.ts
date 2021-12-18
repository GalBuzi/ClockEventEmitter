let add : (x:number, y:number) => number = function (a:number, b:number){ return a+b } 



type listenerCallback = (...args: any[]) => void;


interface eventsManager {
  [key: string] : listenerCallback[];
}

export class MyEventEmitter {
  /**
   * Essential tasks
   **/
  private allEventsListeners: eventsManager = {};
  private onceEventsListeners : eventsManager = {}

  on(name: string, listener: listenerCallback) : void{
    //adds a callback to be called when an event occures
    if (!this.allEventsListeners[name]) {
      this.allEventsListeners[name] = [];
      this.allEventsListeners[name].push(listener);
    } else {
      this.allEventsListeners[name].push(listener);
    }
  }
  off(name: string, listener: listenerCallback) : void{
    //removes a callback from a given event name
    let eventNameListeners = this.allEventsListeners[name]
    this.allEventsListeners[name] = eventNameListeners.filter(
        (l) => {
            l !== listener
    })
  }
  emit(name : string, ...args : any[]) : void{
    //calls all callbacks registered to a given event
    //takes an event name, and any payload/s to pass to its registered callbacks.
    let registeredCallbacks : listenerCallback[] = this.allEventsListeners[name]
    if(registeredCallbacks && registeredCallbacks.length > 0){
        registeredCallbacks.forEach((cb) => {
            cb(...args)
        })
    } 
    let onceRegistered : listenerCallback[] = this.onceEventsListeners[name]    
    if(onceRegistered && onceRegistered.length > 0){
      onceRegistered.forEach((cb) => {
          cb(...args)
      })
      // this.onceEventsListeners[name] = []
      delete this.onceEventsListeners[name];
      // console.log(this.onceEventsListeners);
      
      
  }
  }

  /**
   * Bonus tasks
   **/
  once(name:string, listener: listenerCallback) {
    // adds a callback to be called when an event occures
    // same as `on` but happens only once!
    if (!this.onceEventsListeners[name]) {
      this.onceEventsListeners[name] = [];
      this.onceEventsListeners[name].push(listener);      
    } 
    else {
      this.onceEventsListeners[name].push(listener);
    }    
  }
  listeners(name:string) : listenerCallback[]{
    // returns ALL callbacks of a given event name
    let nameCallbacks: listenerCallback[] = []
    for (const cb of this.allEventsListeners[name]) {
      nameCallbacks.push(cb)
    }
    return nameCallbacks
  }
  eventNames() : string[]{
    // returns ALL event names
    let eventNames : string[] = []
    for (const key in this.allEventsListeners) {
      eventNames.push(key)
    }
    for (const key in this.onceEventsListeners) {
      eventNames.push(key)
    }

    return eventNames
  }
  removeAllListeners(name : string) : void{
    // removes all listeners of a given event name
    this.allEventsListeners[name] = []
  }
}
