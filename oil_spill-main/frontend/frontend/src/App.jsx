import { useState } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'



function App() {

  const [formData,setFormData] = React.useState(
    {
    "mmsi": 123456789,
    "base_date_time": "2024-09-09T12:00:00Z",
    "latitude": 12.34,
    "longitude": 56.78,
    "sog": 10.5,
    "cog": 180,
    "heading": 90,
    "vessel_name": "Example Vessel",
    "imo": "1234567",
    "call_sign": "ABC123",
    "vessel_type": "Cargo",
    "status": "Active",
    "length": 100.0,
    "width": 20.0,
    "draft": 5.0,
    "cargo": "Oil",
    "transceiver_class": "A"
}
    )
    
    
  // React.useEffect(()=>{
  //   const api = async()=>{
  //     try {
  //       const response = await axios.post('http://localhost:8006/vessels/', formData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       const reqData = JSON.stringify(response.data, null, 2)
        
  //       console.log(`Response Data: ${reqData}`)
        
  //     } catch (err) {
  //       console.log(err)
  //     }
      

  //   }
  //   api()
   


  // },[])
  const [data,setData] = React.useState("")
  

  return (
    <>
    <div>
      {/* <p>{`${req2Data}`}</p> */}
      <button onClick={async ()=>{
try {
  const response = await axios.post('http://localhost:8020/vessels/', formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const reqData = JSON.stringify(response.data, null, 2)
  setData(reqData)
  
  console.log(`Response Data: ${reqData}`)
  
} catch (err) {
  console.log(err)
}


      }}>
      </button>
      <p>{`${data}`}</p>
    </div>
      
    </>
  )
}

export default App
