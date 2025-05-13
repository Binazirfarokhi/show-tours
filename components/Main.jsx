export default function Main() {
    const ingredients =["chicken", "apple", "tomatos"]

    const showlist = ingredients.map(item=>(

       <li key={item}>{item}</li>
    )

    )
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
            {showlist}
        </ul>
      </main>
    </>
  );
}
