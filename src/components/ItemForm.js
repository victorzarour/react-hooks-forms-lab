import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleItem(e) {
    setItemName(e.target.value)
  }

  function handleCategory(e) {
    setItemCategory(e.target.value)
  }


  function formSubmit(e) {
    e.preventDefault()

      onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    });
  };

  
  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName} 
          onChange={handleItem}/>
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={itemCategory}    
          onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
