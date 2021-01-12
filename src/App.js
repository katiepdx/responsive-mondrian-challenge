import React, { useState, useEffect } from 'react'
import './App.css';
import { dragData } from './drag-data.js'
import { Draggable, Droppable } from 'react-beautiful-dnd'

function App() {
  // const [gameData, setGameData] = useState();

  // useEffect(() => {
  //   setGameData(dragData);
  //   console.log(gameData, 'in useEffect')

  // }, [gameData])


  return (
    <div>
      <Droppable droppableId='1'>
        {({ innerRef, droppableProps }) =>
          <div ref={innerRef} {...droppableProps}>
            <Draggable draggableId='1' index={0}>
              {({ innerRef, draggableProps, dragHandleProps }) => <h1 ref={innerRef} {...draggableProps} {...dragHandleProps}>h1</h1>}
            </Draggable>
            <Draggable draggableId='2' index={1}>
              {({ innerRef, draggableProps, dragHandleProps }) => <h1 ref={innerRef} {...draggableProps} {...dragHandleProps}>h2</h1>}
            </Draggable>
            <Draggable draggableId='3' index={2}>
              {({ innerRef, draggableProps, dragHandleProps }) => <h1 ref={innerRef} {...draggableProps} {...dragHandleProps}>h3</h1>}
            </Draggable>
          </div>
        }
      </Droppable>

    </div>


    // <div className="App">
    //   {/* 10 divs */}
    //   <div className="big-red">Big Red</div>
    //   <div className="sm-yellow">Small Yellow</div>
    //   <div className="white-square">White Square</div>
    //   <div className="sm-red">Small Red</div>
    //   <div className="lg-vert-white">Large vertical White</div>
    //   <div className="horizontal-blue">Horizontal Blue</div>
    //   <div className="sm-vert-white">Small vertical White</div>
    //   <div className="lg-horizontal-white">Lg Horizontal White</div>
    //   <div className="vert-blue">Vertical blue</div>
    //   <div className="yellow-square">Yellow square</div>
    // </div>
  );
}

export default App;
