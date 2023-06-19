import React from "react";
import Popup from "reactjs-popup";
import './ContactModel.css'

export const Model = ({item}) => {
  return (
    <Popup
      contentStyle={{
        width: '90%',
        maxWidth: "576px",
        padding: "0px",
        borderRadius: "26px",
        border: "2px solid rgba(76, 86, 187, 0.26)",
      }}
      trigger={item}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="texts">
            <h1 className="heading1">Lets's Talk</h1>
            <p className="body-txt">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <div className="inputs">
            <label className="body-txt" htmlFor="name">
              Your Name
            </label>
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label className="body-txt" htmlFor="email">
              Your Email
            </label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <label className="body-txt" htmlFor="addr">
              Address
            </label>
            <br />
            <textarea name="addr" id="addr" cols="20" rows="6"></textarea>
            <br />
            <div>
              <button className="btn" onClick={close} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
