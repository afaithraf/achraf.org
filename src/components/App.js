import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../css/App.scss";
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=Z8H_mcvGXZA"
        playing
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
