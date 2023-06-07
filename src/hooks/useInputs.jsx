import { useState } from 'react';

export const useInputs = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return [inputs, handleChange];
};
