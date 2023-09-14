import { useContext } from "react";
import { useState } from "react";
import { NiceContext } from "../context/NiceContext";

export default function Form() {
  const [somethingNice, setSomethingNice] = useState("");
  const [serverError, setServerError] = useState({ message: null });
  const { setContextFormData, setContextStatus } = useContext(NiceContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setContextFormData(somethingNice);
        sendToServer(url, setServerError, setContextStatus);
        setSomethingNice("");
      }}
    >
      <div>
        <label>Say something nice!</label>
        <br />
        <input
          name="somethingNice"
          type="text"
          value={somethingNice}
          onChange={(event) => setSomethingNice(event.target.value)}
        />
      </div>
      <button type="button">Cancel</button>
      <button>Submit</button>
      <br />
      {serverError.message && (
        <span style={{ color: "red" }}>{serverError.message}</span>
      )}
    </form>
  );
}

function sendToServer(url, setError, setContextStatus) {
  fetch(url)
    .then((res) => {
      setContextStatus(res.status);
      
      // if bad status code, send to catch
      if (res.status >= 400) {
        throw res;
      } else {
        setError({ message: null });
      }
      return res.text();
    })
    .then((data) => {
      //not much to do with the data
    })
    .catch(async (error) => {
      // do something with error
      const errorText = await error.text();
      setError({ message: errorText });
    });
}

var url = "http://httpstat.us/random/200,201,401,403,400";
