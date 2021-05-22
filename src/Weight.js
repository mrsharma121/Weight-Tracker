import React, { useEffect, useState } from 'react'
import fire from './fire1';
export const Weight = () => {

    const[input, setInput] = useState("")
    const[weightList, setWeightList] = useState("")
    const handleOnSubmit = () =>{
        const dataRef = fire.database().ref('Tushar');
        const data = ({
            input,
            time : new Date().toLocaleTimeString()
        });
        dataRef.push(data)
        // console.log(dataRef.orderBy('currTime').get())
    }
    useEffect(()=>{
        
        const dataRef =  fire.database().ref('Tushar');
        dataRef.on('value', (snapshot)=>{
            var weight = (snapshot.val())
            var weightList = []
            for (let id in weight){
                weightList.push(weight[id])
            }
            setWeightList(weightList.reverse())
            
            // console.log(weightList.reverse())
        })

    }
    ,[])

    return (
        <div>
                <input
                type = "text"
                placeholder = "Enter Your Weight"
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                />
                <button onClick = {handleOnSubmit} >Submit</button>
            {weightList? weightList.map((val, index) =>{
                return(
                    <div key = {index} >
                <h1>{val.input}</h1>
                <i>{val.time}</i>    
                    </div>
                )
            }): "" }
        </div>
    )
}
