import axios from 'axios';
import React, { createContext, useEffect ,useState} from 'react'

export const ProductContext = createContext();


function Context(props) {
  const [products, setproducts] = useState(null);

  const getproducts = async () =>{
    try{
      const {data} = await axios.get("/products")
      setproducts(data)
    }catch(err){
      console.log(err)
  }
};

useEffect(()=>{
  getproducts();
 }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context;
