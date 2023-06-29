import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon ball']);
  const onAddCategory = (newCategory) => {

    const newCategoryLowerCase = newCategory.toLowerCase();
    const newCategoryUpperCase = newCategoryLowerCase.charAt(0).toUpperCase() + newCategoryLowerCase.slice(1);
    const categoryCurrent = categories.map((categori) => categori.toLowerCase())

    if (categoryCurrent.includes(newCategoryLowerCase)) return;
    setCategories([newCategoryUpperCase, ...categories])
  }

  return (
    <>
      <h1>Gif Search App</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
