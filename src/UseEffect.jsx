import { useEffect, useState } from "react"


function UseEffect(){
    //this is first type of useEffect
    useEffect(()=>{
        //dta fetch ko logic sabai eha hunxa
        console.log('hey')
    },[])//sabai execution chai []array maa depent hunxa

    //second type of useEffect
    const [count,setcount]=useState(0)
    const increaseCOunt=()=>{
        setcount(count+1)
    }
    const decreasecount=()=>{
setcount(count-1)
    }

    useEffect(()=>{
        //esko execution vaneko jastai fb maa like garyo vani autoupdate huna paryo
        console.log('hello')
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCOunt}>+</button>
        <button onClick={decreasecount}>-</button>
        </>
    )
}

export default UseEffect