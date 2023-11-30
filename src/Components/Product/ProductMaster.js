// ProductMaster.js
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import "./ProductMaster.css";
import { useNavigate } from 'react-router-dom';

export default function BasicDemo() {
  const [value, setValue] = useState('');
  const [product, SetProductcode] = useState('');
  const [date, setDate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const navigate = useNavigate();
 
  
 


  return (
    
      <div className="card flex justify-content-center" style={{width:"1000px"}}>
        <h2 className='product-heading'>Product Master</h2>
        <div className="justify-content">
        <p style={{textAlign:"left"}}>Product Name</p>
          <InputText value={value} onChange={(e) => setValue(e.target.value)} />
          <p style={{textAlign:"left"}}>Product Code</p>
          <InputText value={product} onChange={(e) => SetProductcode(e.target.product)} />
          </div>
          <div className="justify-content">
          <p style={{textAlign:"left"}}>Product Start Date</p>
          <Calendar value={date} onChange={(e) => setDate(e.value)} />         
          <p style={{textAlign:"left"}}>Product End Date</p>
          <Calendar value={enddate} onChange={(e) => setEnddate(e.value)} /> 
           </div>
          <div style={{marginLeft:"160px"}}>
          <Button className="mt-4" label="Submit" onClick={()=>navigate('/')} />
        </div>
      </div>
      
      
  )
}