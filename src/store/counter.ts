import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count++;
    console.log("increment", this.count);
  }
  decrement() {
    this.count--;
    console.log("decrement", this.count);
  }
}

export default new Counter();
