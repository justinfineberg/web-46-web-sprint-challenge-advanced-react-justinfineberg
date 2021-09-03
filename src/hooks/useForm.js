// write your custom hook here to control your checkout form
import React, { useState } from "react"
const useForm = (initialValue, success)=>{
    const [showSuccessMessage, setShowSuccessMessage] = useState(success);
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({ ...values, 
        [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    return [values, showSuccessMessage, handleChanges, handleSubmit]
}



export default useForm