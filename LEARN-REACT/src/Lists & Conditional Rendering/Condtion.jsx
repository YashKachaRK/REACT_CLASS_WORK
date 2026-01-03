

function Conditional (){
    const student = [
        {id : 1 , name :"yash" , passed:true},
        {id : 2 , name :"garcy" , passed:true},
        {id : 3 , name :"Mitansu" , passed:false},

    ]
    return(
        <div>
            {student.map((s)=>(
                <p key={s}>
                    {s.name} - {s.passed ? "Passed ✅" : "Failed ❌"}
                </p>
            ))}
        </div>
    )
}

export default Conditional;