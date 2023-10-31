// ProductMaster.js
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import "./ProductMaster.css";

export default function BasicDemo() {
  const [value, setValue] = useState('');
  const [product, SetProductcode] = useState('');
  const [date, setDate] = useState(null);
  const [enddate, setEnddate] = useState(null);


  return (
      <div className="card flex justify-content-center">
        <h3 className='product-heading'>Product Master</h3>
        <label htmlFor="productname">Product Name</label>
          <InputText value={value} onChange={(e) => setValue(e.target.value)} />
          <label htmlFor="productcode">Product Code</label>
          <InputText value={product} onChange={(e) => SetProductcode(e.target.product)} />
          <div className="justify-content">
          <label htmlFor="productstartdate">Product Start Date</label>
          <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />  </div>
          <div>
          <label htmlFor="productenddate">Product End Date</label>
          <Calendar value={enddate} onChange={(e) => setEnddate(e.value)} showIcon />  </div>
          <div className="justify-content-center">
            <Button label="Submit" />
        </div>
      </div>
      
      
  )
}
