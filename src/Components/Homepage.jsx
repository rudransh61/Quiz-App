import Question from './Question';
import { useState } from 'react';
import { data } from '../data';

function Homepage() {


    const [score, incrementScore] = useState(1);
    let scoreadd = () => {
        incrementScore(score + 1);
        console.log(score);
    };

    return (
        <div className="">
            <p>Your Score : {score}</p>
            <h1>Welcome to my Quiz , Meths Quiz App</h1>
            <div>
                {/* {console.log(data)} */}
                {Object.entries(data).map(([key, value]) => (
                    <Question questions={key}
                            option1={value.Wrong1}        
                            option2={value.Correct}        
                            option3={value.Wrong2}        
                            option4={value.Wrong3}
                            correct = {2}
                            onclick = {scoreadd}        
                    />
                ))}
            </div>
        </div>
    );
}

export default Homepage;