"use client"
import axios from 'axios';
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    image: null,
    phone: "",
    email: "",
    address: "",
    additional_data: "",
    icons: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'image') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: files[0]
      }));
      console.log(files)
    } else if (name === 'icons') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        icons: Array.from(files)
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const apiUrl = "http://localhost:9090/api/footer";
    // try {
    //   const response = await axios.post(apiUrl, formData);
    //   console.log('Form data sent successfully');
    // } catch (error) {
    //     console.error('Failed to send form data:', error);
    // }
    console.log(formData);
  }

  return (
    <div>
      API Solutions Limited
      <br/>
      <br/>
      <h1>Footer Form</h1>
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" onChange={handleChange} accept="image/*"/> <br/>
        
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" onChange={handleChange} required/> <br/>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required/> <br/>
        
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" onChange={handleChange} required/> <br/>
        
        <label htmlFor="additional_data">Additional Data:</label>
        <textarea id="additional_data" name="additional_data" onChange={handleChange} required></textarea> <br/>
        
        <label htmlFor="icons">Icons:</label>
        <input type="file" id="icons" name="icons" accept="image/*" onChange={handleChange} multiple/> <br/>
        
        <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default page