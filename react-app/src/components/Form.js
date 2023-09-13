import { useState } from "react";

export default function Form() {
  const [somethingNice, setSomethingNice] = useState("");
  const [result, setResult] = useState("");
  const [serverError, setServerError] = useState({ message: null });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendToServer(url, setResult, setServerError);
      }}
    >
      <div>
        <label>Say something nice!</label>
        <br />
        <input
          name="somethingNice"
          type="url"
          value={somethingNice}
          onChange={(event) => setSomethingNice(event.target.value)}
        />
      </div>
      {serverError.message && (
        <h5 style={{ color: "red" }}>{serverError.message}</h5>
      )}
      <button type="button">Cancel</button>
      <button>Submit</button>
      <br />
      <br />
      {result && (
        <img
          style={{ maxWidth: "200px", maxHeight: "200px" }}
          src={success}
          alt="success"
        />
      )}
    </form>
  );
}

function sendToServer(url, setSuccess, setError) {
  fetch(url)
    .then((res) => {
      // if bad status code, send to catch
      if (res.status >= 400) throw res;
      return res.text();
    })
    .then((data) => {
      setError({ message: null })
      setSuccess(data);
    })
    .catch(async (error) => {
      // do something with error
      const errorText = await error.text()
      setError({ message: errorText });
    });
}

var success =
  "https://gifdb.com/images/high/saitama-funny-eyebrows-up-d2zddr6q5ligpbie.gif";

var url = "http://httpstat.us/random/200,201,401,403,400,500-504";
