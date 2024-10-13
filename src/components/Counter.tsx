import { useState } from "react";
import styles from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        className={styles.btn}
        onClick={() => setCount((count) => count + 1)}
      >
        add
      </button>
    </>
  );
}
