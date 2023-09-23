import React, { useEffect, useRef, useState } from 'react';
import red_sound from "./audios/red_sound.mp3"
import blue_sound from "./audios/blue_sound.mp3"

export default function Ring() {

  const [selectedBox, setSelectedBox] = useState(null);
  let lastCol = null
  let i = 22

  // Create 100 div elements
  const divs = [];
  let last = 'Red'
  for (let i = 0; i < 200; i++) {
    divs.push(
      <div key={i} id={'box' + i} className={`box ${selectedBox === i ? 'selected' : ''}`} >
        {i < 20 ? <div className={'ringDiv' + last}></div> : ''}
      </div>
    );
    if (last === "Red") {
      last = "Blue"
    } else {
      last = "Red"
    }

    
   
  }


function start(){
  setInterval(() => {
    handleBoxClick()
    console.log("wow");
  }, 1200);
}
    
  


  // Function to handle box click
  const handleBoxClick = () => {


 if(!document.getElementById(`box${i}`).querySelector("ringDivRed") && !document.getElementById(`box${i}`).querySelector("ringDivBlue") ){
  
  let ringDiv = document.createElement("div")
  console.log(last);
  if (!lastCol || lastCol === "blue") {
    ringDiv.classList.add("ringDivRed")
    lastCol = "red"
  } else if(lastCol === "red") {
    ringDiv.classList.add("ringDivBlue")
    lastCol = "blue"

  }
  document.getElementById(`box${i}`).appendChild(ringDiv)
  console.log(lastCol);
  const audio = new Audio(lastCol === 'red' ?  blue_sound : red_sound );
    audio.play();
  i++

 }
 

  };

  

  return <div className="ring">
    <div id='grid-Container' className="grid-Container">

      {divs}

    </div>
    <button onClick={()=>{
      start()
    }}>Start</button>
  </div>;
};
