import { useState, useEffect } from 'react';

const ContactUseForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = element => {
    const { name, value } = element.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmitFrom =  element=> {
    element.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmitFrom, values, errors };
};

export default ContactUseForm;