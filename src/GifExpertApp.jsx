import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
  const onAddCategory = (newCategory) => {

    const newCategoryLowerCase = newCategory.toLowerCase();
    const newCategoryUpperCase = newCategoryLowerCase.charAt(0).toUpperCase() + newCategoryLowerCase.slice(1);

    if(categories.includes(newCategoryLowerCase)) return;
    setCategories([newCategoryUpperCase, ...categories])
  
  }

  return (
    <>
      <h1>Gif Search App</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
