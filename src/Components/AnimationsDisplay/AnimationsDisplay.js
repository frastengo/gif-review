import React from 'react'

function AnimationDisplay(props){

    return (
        <div>
            <h1>{props.animationName}</h1>
            <img src={props.animationUrl} />
            <button onClick={() => props.deleteAnimation(props.id)}>Delete me</button>
        </div>
    )
}

export default AnimationDisplay;