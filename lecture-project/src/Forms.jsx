import { useEffect, useState } from "react";

// forms are high velocity components

export default function Forms(props) {
  const [input1, setInput1] = useState("");
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //! below is the pseudocode for a typical submit handler logic

    //step 1 - collect form values

    const formData = {
      input1, input2, input3, input4
    }

    // do the thing
    const res = await fetch("https://mod4api.onrender.com/api/spots/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    if(res.ok){
      const returnFromServer = await res.json()
      history.push(`/newpage/${returnFromServer.id}`)
    } else {
      const errorFromRoute = await res.json();
      setErrors(errorFromRoute)
    }

    console.log(formData)

    //step 3 - reset the form
    setInput1("")
    setErrors({})
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="input-group">
          <label htmlFor="input-1">This is what the input is for</label>
          <input
            id="input-1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            required={true}
            type="email"
          />
        </div>
        <button>submit</button>
        <button type="button">cancel</button>
      </form>
    </div>
  );
}
