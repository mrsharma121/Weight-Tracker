import React, { useEffect, useState } from 'react'
import fire from './fire1';
export const Weight = ({user}) => {
    
    
    const[input, setInput] = useState("")
    const[weightList, setWeightList] = useState("")
    const handleOnSubmit = () =>{
        const dataRef = fire.database().ref(user['uid']); //user is imported to get a unique id for every Authentication
        const data = ({
            input,
            time : new Date().toLocaleTimeString()
        });
        dataRef.push(data)
    }
    useEffect(()=>{
        
        const dataRef =  fire.database().ref(user['uid']);
        dataRef.on('value', (snapshot)=>{
            var weight = (snapshot.val())
            var weightList = []
            for (let id in weight){
                weightList.push(weight[id])
            }
            setWeightList(weightList.reverse())
            
        })

    }
    ,[])

    return (
        <div
        className = "weight-input"
        >
                <input
                type = "text"
                placeholder = "Enter Your Weight on Kilogram"
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                />
                <button 
                onClick = {handleOnSubmit} >Submit</button>
                <span
                className = "weight-container"
                >
            {weightList? weightList.map((val, index) =>{
                return(
                    <div
                    className = "weight-item"
                    key = {index} >
                <h2>{val.input} K.G</h2>
                <i>{val.time}</i>    
                    </div>
                )
            }): "" }
            </span>
        </div>
    )
}
