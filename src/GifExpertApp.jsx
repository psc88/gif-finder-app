import { useState } from "react"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = () => {
    setCategories([...categories, 'Kimetsu no yaiba'])
  }

  return (
    <>
      <h1>Gif Search App</h1>
      <button onClick={ onAddCategory }>Agregar</button>

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
