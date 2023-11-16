
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import List from './components/List';

import axios from 'axios';



function App() {
  const [data,setdata]=useState([])
  const [orginal,setOrginalData]=useState([])
  useEffect(()=>{
    axios.get("https://northwind.vercel.app/api/products").then(res=>{
     setdata(res.data)
     setOrginalData(res.data)
    })
        },[])
    
  const deleteButton=(id)=>{
    let target=data.find((data)=>data.id==id)
    let indexofTarget=data.indexof(target)
    data.splice(indexofTarget,1)
    setdata([...data])
  }
  return (
    <div className="App">
     <Form data={data} setdata={setdata} orginal={orginal}/>
     <Main data={data} />
     <List data={data}/>
    </div>
  );
}

export default App;
