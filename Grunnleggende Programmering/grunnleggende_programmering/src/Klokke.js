import { useState, useEffect } from "react";

export default function Klokke() {

    const [currentTime, setCurrentTime] = useState(new Date)


useEffect(() => {


   const myInterval = setInterval(() => {
        setCurrentTime(new Date);
    }, 1000);
    
    console.log('Utvikling er kult');

    return () => clearInterval(myInterval);
})

    return (
        <>
        <h1> digital klokke </h1>
        <h2> {currentTime.toTimeString()} </h2>
        </>
    )   
}