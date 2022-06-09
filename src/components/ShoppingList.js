import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchInput] = useState("")


  const [submittedData, setSubmittedData] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearchInput(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){ 
      return true}
    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  });

  const itemToDisplay = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))


  function onItemFormSubmit(newItem) {
     setSubmittedData([...submittedData, newItem]);
  };

  const submittedItem = submittedData.filter((item) => {
    if (selectedCategory === "All"){ 
      return true}
    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  });

  const submittedItemFiltered = submittedItem.map((item) => {
    return (
      <Item key={item.id} name={item.name} category={item.category} />
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemToDisplay}
        {submittedItemFiltered}
      </ul>
    </div>
  );
}

export default ShoppingList
