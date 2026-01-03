import React from "react";

function List (){
    const names =["yash", "kacha","girishbhai"]
    const students = [
        {id:1, name:"Yash" , age:34},
        {id:2 , name:"Gracy" , age:32}
    ]
    return(
        <div>
            {/* A list is just an array of items you want to display in your UI. In React, we use the .map() method to render each item. */}
            <h1>Name List</h1>
            <ul>
                {names.map((name, index) =>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <h1>List of Object</h1>
            <ul>
                {students.map((studentId) =>(
                    <p key={studentId.id}>
                        {studentId.name} - {studentId.age} year old
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default List;