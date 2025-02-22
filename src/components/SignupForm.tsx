import React from "react";
import InputComponent from "@/components/partials/InputComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const API = process.env.NEXT_PUBLIC_BACKEND_API_URL as string;
const SignupForm = () => {
  return (
    <div className="block px-4">
      <div
        className="border py-4 px-4 px-md-5 card-body br-3 "
        // style={{ width: '20rem' }}
      >
        <span className="bold-1 font-4 text-center block my-4 py-4  clr-gree">
          Signup
          <span className="block font-2 bold-0">Its Easy, Quick & Free!</span>
        </span>
        <div className="form-wrapper mt-4 mt-md-4 pt-4 px-2 px-md-0">
          <div className="double-grid">
            <div className="block my-0">
              <InputComponent
                type="text"
                name="firstName"
                required={true}
                className="br-2 font-2 my-2 block"
                placeholder="First Name"
              />
            </div>

            <div className="block my-0">
              <InputComponent
                type="text"
                name="lastName"
                required={true}
                className="br-2 font-2 my-2 block"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="block my-0">
            <InputComponent
              type="text"
              name="email"
              required={true}
              className="br-2 font-2 my-2 block"
              placeholder="Phone"
            />
          </div>
          <div className="block my-0">
            <InputComponent
              type="password"
              name="password"
              required={true}
              className="br-2 font-2 my-2 block"
              placeholder="Password"
            />
          </div>
          <div className="block my-0">
            <InputComponent
              type="password"
              name="confirmPassword"
              required={true}
              className="br-2 font-2 my-2 block"
              placeholder="Confirm Password"
            />
          </div>
          <div className="action block text-center ">
            <button
              className="bg-purpple clr-white py-3 pointer font-1 br-2 px-4 font-3 bold-1 my-2 my-md-4"
              style={{ width: "100%" }}
            >
              Signup
            </button>
          </div>
          <Button
            variant="contained"
            fullWidth
            startIcon={<FcGoogle />}
            onClick={() => {
              window.location.href = `${API}/auth/google`;
            }}
            style={{ marginBottom: "10px" }}
          >
            Sign in with Google
          </Button>
          <span className="block font-1 py-4">
            Already have an Account?{" "}
            <Link href={"/login"}>
              <span className="clr-green">Login here</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
