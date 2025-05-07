import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let newErrors = {};
    let isValid = true;
  
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Некоректний email";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Некоректний password";
      isValid = false;
    }

    setErrors(newErrors);
    console.log(newErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      navigate('/admin/adminpanel');
    }
  };

  return (   
    <div className="container mt-5">
      <h1>Login</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            className="form-control"
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange}
            required
          />
          {errors.email && <div className="valid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            className="form-control"
            type="password" 
            name="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange}
            required
          />
          {errors.email && <div className="valid-feedback">{errors.email}</div>}
        </div>
        <div>
          <button  className  ="btn btn-primary mb-3" type="submit">Вход</button>
        </div>
        <div>
          No account 
          <Link to="/auth/register"> Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;