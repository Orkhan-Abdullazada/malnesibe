import React from 'react'

function Form({data,setdata,orginal}) {
    const handleSearch=(e)=>{
        const search=e.target.value.trim().toLowerCase()
        if(search==""){
            setdata(orginal)
        }else{
            let searchData=data.filter((x)=>x.name.trim().toLowerCase().includes(search))
           setdata(searchData)
        }
    }
  return (
    
    <div className='All'> 
        <div><input placeholder='search...'  type="text" onChange={(e)=>handleSearch(e)} /></div>
        <button>Sort By Price</button>
        <button>Discounted</button>
    </div>
  )
}

export default Form