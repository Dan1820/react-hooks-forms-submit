import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const[submittedData, setSubmittedData]=useState([])
  // state for holding errors
  const [errors, setErrors]= useState([])

  function handleSubmit(event){
    event.preventDefault()
    if(firstName.length>0 && lastName.length>0){
    const formData={
      firstName: firstName,
      lastName:lastName,
    }
    const dataArray=[...submittedData, formData]
    setSubmittedData(dataArray)
    // props.sendFormDataSomewhere(formData)
    setFirstName("")
    setLastName("")
    setErrors([])
  }else{
    setErrors(["please fill in all the form data is required!"])
  }
}

  const listOfSubmissions= submittedData.map((data,index)=>{
    return(
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit" >Submit</button>
    </form>
    {/* conditional to render error message */}
    {errors.length>0 ? errors.map((error,index)=>(
      <p key={index} style={{color:"red"}}>{error}</p>
    )): null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
