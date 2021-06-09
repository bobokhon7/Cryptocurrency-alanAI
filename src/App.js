import "./App.css";
import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FetchedApi from "./Component/Data/FetchedApi";

const alanKey = "a1e879e5210af325e788384d2bd2b70b2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <FetchedApi />
    </div>
  );
}

export default App;
