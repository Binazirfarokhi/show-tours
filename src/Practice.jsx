import React from "react"
export default function Practice(){
 const [isValue, setIsValue] = React.useState("Bina")
function handleClick(){
    setIsValue("hprray")
}
    return(
        <main>
            <button onClick={handleClick}>{isValue}</button>
        </main>
    )
}
