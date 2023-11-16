import React from 'react'

function List({data}) {
  return (
    <div>
        <ul>
            {
                data && data.map((element)=>(
                    <li>{element.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default List