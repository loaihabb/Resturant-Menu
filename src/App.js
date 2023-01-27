import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";
import { items } from "./Data";
import { useState } from "react";
function App() {
 // const [itemsData, setItemData] = useState(items);
 const [itemsData, setItemData] = useState(items);

     function fetchData(data) {
      setItemData(data);
       
    }
  
    
  //get all unique category
  const allCategory = ["Hepsi", ...new Set(items.map((i) => i.category))]
  

  //filter by category
  const filterByCategory = (cat) => {
    if(cat === "Hepsi")
    {
      setItemData(items);
    }
    else{
    const newArr = items.filter((item)=> item.category === cat)
      fetchData(newArr)
    //setItemData(newArr);
    }
  }

    //search by search form
  const filterBySearch = (word) => {
    if(word !== "") {
    const newArr = items.filter((item)=> item.title === word)
    setItemData(newArr);
    }
  }

  return (
    <div className="color-body font">
      <Navbar filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Category filterByCategory = {filterByCategory} allCategory={allCategory}/>
        <Items itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
