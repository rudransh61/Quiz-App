import Question from './Question';
import { useState } from 'react';

function Homepage() {
    const [score , incrementScore] = useState(1);
    
    let scoreadd = (score)=>{
        incrementScore(score+1);
        console.log(score);
    };

    
    return (
        <div className="">
            <p>Your Score : {score}</p>
            <h1 onClick={scoreadd}>Welcome to my Quiz , Meths Quiz App</h1>
            <Question/>
        </div>
    );
}

export default Homepage;