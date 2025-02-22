import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <div
      className="flex-centered flex-centered-vertical-nospace py-5 "
      style={{ minHeight: "90vh" }}
    >
      <RegisterForm />
    </div>
  );
}
