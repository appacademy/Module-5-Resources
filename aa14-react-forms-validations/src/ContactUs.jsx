import { useState, useEffect } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [didSubmit, setDidSubmit] = useState(false)

  // do errors require state? y/n

  const onSubmit = async (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
    setDidSubmit(true)

    // Create a new object for the contact information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    // Ideally, you'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact information to the console.
    console.log(contactUsInformation);

  //   const response = await fetch("/api/session", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(contactUsInformation),
  //   });

  //   if (response.ok) {
  //     // success
  //   } else {
  //     const errorObj = await response.json();
  //     // {errors: []}
  //     /*
  //       "errors": {
  //       "credential": "Email or username is required",
  //       "password": "Password is required"
  // }
  //     */
  //     setErrors(errorObj.errors)

    // }

    // Reset the form state.
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setComments("");
  };

  useEffect(() => {
    // create new ref
    const newErrors = {};

    // do the checks
    if (name.length < 2) {
      newErrors.name = "Get a new name :)";
    }
    if (!email.includes("@")) {
      newErrors.email = "Invalid email bro";
    }

    // update the error slice of state
    setErrors(newErrors);
  }, [name, email]);

  useEffect(() => {
    console.log("in useEffect, errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            minLength={2}
          />
        </div>
        {didSubmit ? (<span style={{ color: "red" }}>{errors.name}</span>) : null}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {didSubmit && (<span style={{ color: "red" }}>{errors.email}</span>)}
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
