export default function Main() {
    const ingredients =["chicken", "apple", "tomatos"]

    const showlist = ingredients.map(item=>(

       <li key={item}>{item}</li>
    )

    )
  return (
    <>
      <main>
        <form action="" className="add-ingredient-form">
          <input
            type="text"
            aria-label="add ingredient"
            placeholder="e.g. egg"
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
