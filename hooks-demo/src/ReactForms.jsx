import { useState, useEffect } from "react";

export default function ReactForms() {
  //todo: create "controlled forms"
  // every input gets its own useState slice

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log("rendering: ", firstName);
  console.log("rendering: ", lastName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      firstName,
      lastName
    }
    
    const response = await fetch('some url', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    if(response.ok) {
      const returnFromAPI = response.json();
      console.log("we submitted, formData: ", formData)
    }
    

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            console.log("we canceled");
          }}
        >
          cancel
        </button>
        <button>submit</button>
      </form>
    </div>
  );
}
