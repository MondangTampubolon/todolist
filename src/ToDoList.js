import React from 'react';


const ToDoList = () => {
    let toDo =["Belajar Intro React JS", "Belajar Component React JS", "Belajar Route React JS"];
    let result = toDo.map((todo) =>{
    return(
        <li>{todo}</li>
    )
}
)
    return (
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )
}

export default ToDoList;