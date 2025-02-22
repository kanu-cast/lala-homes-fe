import React from "react";
import InputComponent from "@/components/partials/InputComponent";
import Link from "next/link";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const API = process.env.NEXT_PUBLIC_BACKEND_API_URL as string;
console.log("this is API", API);

const LoginForm = () => {
  return (
    <div className="block">
      <div
        className="border py-4 px-4 px-md-5 card-body br-3 "
        // style={{ width: '20rem' }}
      >
        <span className="bold-1 font-4 text-center block mt-4  mb-5 mb-md-0 clr-gree">
          Login
        </span>
        <div className="form-wrapper mt-4 mt-md-5 px-2 px-md-0">
          <div className="block my-0">
            <InputComponent
              type="text"
              required={true}
              name="email"
              className="br-2 font-2 my-2 block border"
              //   label="Phone / Email"
              //   labelClassName="font-1 bold"
              // width={300}
              placeholder="Email"
            />
          </div>

          <div className="block my-0">
            <InputComponent
              type="password"
              required={true}
              className="br-2 font-2 my-2 block border"
              //   label="Phone / Email"
              //   labelClassName="font-1 bold"
              //   width={300}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="block mt-2 mb-4">
            <Link href={"#"}>
              <span className="f-right font-1 clr-green">Forgot Password?</span>
            </Link>
          </div>
          <div className="action block text-center py-3">
            <button
              className="bg-purpple clr-white py-3 pointer font-1 br-2 px-4 font-3 bold-1 my-2 my-md-4"
              style={{ width: "100%" }}
            >
              Login
            </button>
          </div>
          <hr />

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
            Dont have an account yet?{" "}
            <Link href={"/signup"}>
              <span className="clr-green">Sign Up here</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
