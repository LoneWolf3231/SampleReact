import React, { useState } from "react";
import captchaimg from './captchaimg.jpg'

const Captcha = () => {
  // Generate a random captcha string
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshString = () => {
    setText("");
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

  return (
    <div>
      {success && <p style={{ color: "green" }}>Successful</p>}
      <div className="card">
        <h2>Validate Captcha</h2>
        <div className="captcha-container">
          <img src={captchaimg} alt="Captcha" className="captcha-image" />
          <p>{captcha}</p>
        </div>
        <button className="reload" onClick={refreshString}>&#x21bb;</button>

        <form onSubmit={matchCaptcha}>
          <input type="text" placeholder="Enter Captcha" value={text} onChange={(e) => setText(e.target.value)} style={{ borderColor: valid ? "red" : "initial" }}/>
          {valid && <p style={{ color: "red" }}>Invalid Captcha</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Captcha
