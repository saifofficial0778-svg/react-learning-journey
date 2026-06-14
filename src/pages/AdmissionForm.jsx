import { useState } from "react";
import axios from "axios";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/student/admission",
        formData,
        {
          withCredentials: true
        }
      );

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Student Admission Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default AdmissionForm;