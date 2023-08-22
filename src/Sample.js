import React, { useEffect, useState } from 'react'
import Adddata from './Adddata';

export default function Sample() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/student")
    .then((obj)=>obj.json())
    .then((res)=>setData(res))
  })

  return (
    <div>
      <Adddata />
        <table border="1">
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Age</th>
            <th>Operation</th>
          </tr>
          {data.map((item,id)=>{
            return(
              <tr>
                <td>{id+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button>Delete</button></td>
              </tr>
            )
          })}
        </table>
      
    </div>
  )
}
