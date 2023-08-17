import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const baseUrlPost = "https://apichallenges.herokuapp.com/todos";

export default function FormWithApi() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [doneStatus, setDoneStatus] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //collect my data
    const formData = {
      title: title,
      doneStatus: doneStatus,
      description: description,
    };

    //do the thing
    const response = await fetch(baseUrlPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      history.push("/success");
    } else {
      const { errorMessages } = await response.json();
      setErrors(errorMessages);
    }

    //reset the form
    setTitle("");
    setDoneStatus("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 &&
        errors.map((errorMessage) => <h3>{errorMessage}</h3>)}
      <div className="input-group">
        <label>Title</label>
        <input
          id="todo-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>doneStatus</label>
        <input
          id="todo-done-status"
          type="text"
          value={doneStatus}
          onChange={(e) => setDoneStatus(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Description</label>
        <input
          id="todo-description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button>submit your new todo!</button>
    </form>
  );
}
