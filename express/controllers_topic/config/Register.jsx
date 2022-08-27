import React, { useState, useEffect } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwor2: "",
    // password_confirm:"",
    // confirm_password:""
  });

  // destrcut
  const { name, email, phoneNumber, password, password2 } = formData;

  // handleChange
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1>Register account</h1>

      <section>
        <p>please fill the complete form</p>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="john doe"
                  value={name}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="984800XXXX"
                  value={number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="confirm password"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
