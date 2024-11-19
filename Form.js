import React, { useState } from "react";
import "./Form.css";
import logo from "./healthcare-logo.png"; // Add a healthcare-related logo in your project folder

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="header-container">
        <img src={logo} alt="Healthcare Logo" className="healthcare-logo" />
        <h2>Fill out your details!</h2>
      </div>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="age">Age</label>
      <select
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      >
        <option value="">Select Age</option>
        {[...Array(101)].map((_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>

      <div className="file-upload">
        <label htmlFor="file">Upload File</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
      <p>Your information is secure with us.</p>
    </form>
  );
}

export default Form;
