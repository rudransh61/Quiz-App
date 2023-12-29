import React, { useState } from 'react';


function Question(props) {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    
        // Check if the selected option is correct and call the parent's onCorrectAnswer function
        if (option === props.correct) {
          props.onclick();
        }
      };


    

    return (<>

        <h2>{props.questions}</h2>
        <div>
            <ol>
                <li className="option" onClick={()=>handleOptionClick(1)}>{props.option1}</li>
                <li className="option" onClick={()=>handleOptionClick(2)}>{props.option2}</li>
                <li className="option" onClick={()=>handleOptionClick(3)}>{props.option3}</li>
                <li className="option" onClick={()=>handleOptionClick(4)}>{props.option4}</li>

            </ol>
        </div>

    </>);
}

export default Question;