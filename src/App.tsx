import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Store } from "./stores";
import { onSnapshot } from "mobx-state-tree";

const store = Store.create();

const App: React.FC = () => {
  useEffect(() => {
    const disposer = onSnapshot(store, snapshot => {
      console.log("snapshot:", snapshot);
    });

    store.add({ title: "Hello MobX!" });

    store.add({ title: "Hello MobX2!" });

    store.toggleAll();

    return () => {
      disposer();
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
