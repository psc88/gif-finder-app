import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  // const onAddCategory = () => {
  //   setCategories([...categories, 'Kimetsu no yaiba'])
  // }

  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategory setCategories = {setCategories} categories = {categories} />

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
