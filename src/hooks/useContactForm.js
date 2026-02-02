import { useState } from 'react';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:admin@procontractorsfl.com?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    setSubmitStatus('success');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return { formData, submitStatus, handleChange, handleSubmit, setSubmitStatus };
};
