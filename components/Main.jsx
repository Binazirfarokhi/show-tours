import React from 'react'
/**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */


export default function Main() {
    const ingredients =["chicken", "apple", "tomatos"]
 const [count, setCount] = React.useState([])
 const[newitem, setNewitem]= React.useState('')
 function isAdd(){
    setCount([...count,newitem])
    setNewitem('');
 }
 
    // const showlist = ingredients.map(item=>(

    //    <li key={item}>{item}</li>
    // )
    // )
    function handleSubmit(event){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
      ingredients.push(newIngredient)
    }
  return (
    <>
      <main>
        <form  onSubmit={handleSubmit} className="add-ingredient-form">
          <input
            type="text"
            aria-label="add ingredient"
            placeholder="e.g. egg"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>
            {isAdd}
        </ul>
      </main>
    </>
  );
}
