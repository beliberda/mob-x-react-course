import { FunctionComponent } from "react";
import counter from "./store/counter";
import { observer } from "mobx-react-lite";

interface CounterProps {}

// Для отслеживания необходимо функцию обернуть в observer
const Counter: FunctionComponent<CounterProps> = observer(() => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => counter.decrement()}>-</button>
      <span>{"count = " + counter.count}</span>
      <button onClick={() => counter.increment()}>+</button>
    </div>
  );
});

export default Counter;
