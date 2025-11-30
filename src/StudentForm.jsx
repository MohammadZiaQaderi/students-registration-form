// // StudentRegistrationForm.jsx (Bootstrap Version)
// // Clean, simple, rewritten from scratch

import React, { useState } from "react";

export default function StudentRegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!" + "" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm p-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h3 className="text-center mb-4">Student Registration</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <select
              className="form-select"
              name="course"
              value={form.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BSc IT">BSc IT</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
// SimpleCenteredBox.jsx
// A clean, simple centered box using Bootstrap

// import "bootstrap/dist/css/bootstrap.min.css";

// export default function CenterBox() {
//   return (
//          <div className="container d-flex justify-content-ceneter">
//                 <div className="row mx-auto text-center">
//                sss
//                 </div>
//          </div>
//   );
// }

