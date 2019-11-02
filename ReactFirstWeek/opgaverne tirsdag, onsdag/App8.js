import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("ddd");
  function handleChange(event) {}

  function handleSubmit(event) {
  event.preventDefault();
    alert("name: "+ document.getElementById("formName").value);
  }
 
  return (
    <div>
      <form >
        <label>
          Name:
          <input id="formName" type="text" />
        </label>
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      {name} 
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
