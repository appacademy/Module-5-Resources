import { useEffect, useState } from "react";

export default function Form() {
  const [somethingNice, setSomethingNice] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("result changed", result);
  }, [result]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendToServer(url, setResult);
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
      <button type="button">Cancel</button>
      <button>Submit</button>
      <br />
      <br />
      <h2>result of submit: {result}</h2>
    </form>
  );
}

function sendToServer(url, setter) {
  fetch("http://httpstat.us/random/200,201,401,403,400,500-504")
    .then((res) => {
      if(res.status >= 400){
        throw new Error("something went wrong in the fetch")
      }
      return res.text();
    })
    .then((data) => {
      setter(data);
    })
    .catch((error) => {
      console.log("there was a fetch error, error: ", error);
    });
}

var success =
  "https://gifdb.com/images/high/saitama-funny-eyebrows-up-d2zddr6q5ligpbie.gif";

var url = "http://httpstat.us/random/200,201,500-504";
