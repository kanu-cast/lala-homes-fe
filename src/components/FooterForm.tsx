import React from "react";
import InputComponent from "./partials/InputComponent";

const FooterForm = () => {
  return (
    <div className="block px-md-3">
      <h1 className="font-3 bold-1 mt-4 px-2">Contact Us: </h1>
      <div className="form-wrapper mt-1 mt-md-4 pt-1 px-2 px-md-0">
        <div className="double-grid">
          <div className="block my-0">
            <InputComponent
              name="firstName"
              type="text"
              required={true}
              className="br-2 font-2 my-1 block"
              placeholder="First Name"
            />
          </div>
          <div className="block my-0">
            <InputComponent
              name="lastName"
              type="text"
              required={true}
              className="br-2 font-2 my-1 block"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="block my-0">
          <InputComponent
            name="email"
            type="email"
            required={true}
            className="br-2 font-2 my-2 block"
            placeholder="email"
          />
        </div>
        <div className="block my-0">
          <textarea
            required={true}
            rows={10}
            cols={34}
            className="br-2 font-2 my-2 py-3 px-3 block border"
            placeholder="Type your message here..."
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default FooterForm;
