import React, { useState } from "react";


export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {

    if (replace === true) {

      setMode(mode);
      const newHistory = history.slice(0, history.length - 1);


      setHistory(history => ([...newHistory, mode]));

    } else {

      setMode(mode);
      setHistory(history => ([...history, mode]));
    }
  }

  function back() {

    if (mode !== history[0]) {

      const newHistory = history.slice(0, history.length - 1);

      // setting the mode
      setMode(newHistory[newHistory.length - 1]);

      // set the history
      setHistory(newHistory);

    } else {

      transition(mode);

    }
  }
  return { mode, transition, back }
};

