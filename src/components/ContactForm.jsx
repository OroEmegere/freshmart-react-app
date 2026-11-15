import { useState } from "react";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setSuccess(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Full name is required.";
    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) newErrors.subject = "Subject is required.";
    if (!values.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setValues(emptyForm);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {success && <p className="success">✅ Thank you! Your message has been sent.</p>}

      <label>Full Name</label>
      <input type="text" name="name" value={values.name} onChange={handleChange} />
      {errors.name && <span className="error">{errors.name}</span>}

      <label>Email Address</label>
      <input type="email" name="email" value={values.email} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}

      <label>Subject</label>
      <input type="text" name="subject" value={values.subject} onChange={handleChange} />
      {errors.subject && <span className="error">{errors.subject}</span>}

      <label>Message</label>
      <textarea name="message" rows="5" value={values.message} onChange={handleChange} />
      {errors.message && <span className="error">{errors.message}</span>}

      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

export default ContactForm;