import React from 'react'

function Main() {
    
  return (
    <div>
        <h2>Add Form</h2>
        <div className='Prime'>
            <input placeholder='add name' type="text" />
            <input placeholder='add price' type="number"/> <br />
            Discounted <input type="radio" /> <br />
            <button>Add</button>
        </div>
    </div>
  )
}

export default Main