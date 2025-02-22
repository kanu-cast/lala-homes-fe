import React, { useState } from "react";
import CleanInputComponent from "@/components/partials/CleanInputComponent";
import FileUpload from "@/components/partials/ReusableFileUploader";
import { registerProperty } from "../utils/api";
import { uploadToCloudinary } from "@/utils/api";

const RegisterForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  //// handling file

  const handleRegister = async () => {
    let imageUrl = "";
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("User is not authenticated!");
      return;
    }
    if (selectedFile) {
      const cloudImage = await uploadToCloudinary(selectedFile);
      if (cloudImage) {
        imageUrl = cloudImage;
      }
    }
    try {
      const propertyData = {
        token,
        imageUrl,
        title,
        description,
        location,
        currency: "USD",
        category: "villa",
        price,
      };

      const response = await registerProperty(propertyData);
      console.log("Property registered successfully:", response);
    } catch (error) {
      console.error("Failed to register property:", error);
    }
  };

  return (
    <div
      className="card border shadow-stable br-3 block px-lg-5 px-4"
      style={{ minWidth: "18rem" }}
    >
      <h1 className="block text-center pt-5 pb-4 font-3-5 bold-2 px-4">
        Register Your Property Today
      </h1>
      <div className="block mt-0">
        <div className="block mt-0">
          <div className="block">
            <FileUpload label="" onFileSelect={setSelectedFile} />
          </div>
          <div className="block pt-4">
            <CleanInputComponent
              name="title"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setTitle(e.target.value)}
              type="text"
              required={true}
              className="br-2 font-2 my-0 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Title:*"
            />
            <CleanInputComponent
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              required={true}
              className="br-2 font-2 my-0 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Location:*"
            />
            <CleanInputComponent
              name="price"
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
              required={true}
              className="br-2 font-2 my-0 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Price per Night:*"
            />
            <CleanInputComponent
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required={true}
              className="br-2 font-2 my-0 block bg-hue border"
              labelClassName="font-1 bold-1"
              label="Description:*"
            />
          </div>
        </div>
      </div>
      <div className="block text-center py-4">
        <button
          className="bg-purpple clr-white py-3 px-4 br-3 block text-center mb-4"
          style={{ width: "100%" }}
          onClick={handleRegister}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default RegisterForm;
