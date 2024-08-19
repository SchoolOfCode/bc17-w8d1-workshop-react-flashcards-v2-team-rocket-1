import { useState } from "react"


export default function Flashcard({key, emoji, question, answer}) {

    const[visibility, changeVisibility]= useState(false)


    
    return(
        
        <div>
            <h2 onClick={(()=> changeVisibility(true))}>{emoji}</h2>
            {visibility ? <h5>{answer}</h5>: <h5>{question}</h5> }
        </div>

    )

}