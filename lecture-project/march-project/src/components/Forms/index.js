import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Forms() {
  const userContext = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [errors, setErrors] = useState({});

  console.log("user context: ", userContext);

  useEffect(() => {
    const errors = {};
    if (firstName.length < 2) {
      errors.firstName = "Name needs to be more than two chars";
    }
    setErrors(errors);
  }, [firstName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.setValue({
      ...userContext,
      value: { ...userContext.value, formValue: { firstName } },
    });
    console.warn("testing submit, form value: ", firstName);

    //!! send info to database

    //reset form
    setFirstName("");
  };

  console.log("component rerendering");

  return (
    <form onSubmit={handleSubmit}>
      <h1>React Forms</h1>
      <label>First Name: </label>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
      />
      {errors.firstName && <h5>{errors.firstName}</h5>}
      <button disabled={!!errors.firstName}>submit</button>
      <button type="button">cancel</button>
    </form>
  );
}
