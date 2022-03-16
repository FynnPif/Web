import { useEffect, useState } from "react";

export default function CounterFunc(){
//Gedächtnis
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({"firstname":"Fynn", "lastName":"P"})

    useEffect(()=>{
        console.log("started func");
    },[count])

    let increase = () =>{
        setCount(count + 1)
        setPerson({"firstname":"Kurt"})
    }
    return( 
        <div>
            <h1>FUnctional Counter</h1>
            <h2>{count}</h2>
            <button onClick={increase}>inc</button>
            {person.firstname}
        </div>
    );
}
