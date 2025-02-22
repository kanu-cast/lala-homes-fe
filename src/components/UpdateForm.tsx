import React, { useState } from "react";
import InputComponent from "@/components/partials/InputComponent";
import FileUpload from "@/components/partials/ReusableFileUploader";
import { updateProperty } from "../utils/api"; // Update to use PUT method
import { uploadToCloudinary } from "@/utils/api";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  location: string;
  imageUrl: string;
  hostId: string;
  createdAt: string;
  updatedAt: string;
  host: {
    id: string;
  };
}

interface UpdateFormProps {
  property: Property;
  onClose: () => void;
  onUpdateProperty: (updatedProperty: Property) => void; // Callback to update parent state
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  property,
  onClose,
  onUpdateProperty,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState<string>(property.location);
  const [description, setDescription] = useState<string>(property.description);
  const [title, setTitle] = useState<string>(property.title);
  const [price, setPrice] = useState<number>(property.price);

  const handleUpdate = async () => {
    let imageUrl = property.imageUrl;
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
        currency: property.currency,
        category: property.category,
        price,
      };

      const response = await updateProperty(property.id, propertyData);
      console.log("Property updated successfully:", response);

      if (response.data) {
        // Notify the parent component of the update
        onUpdateProperty(response.data);
      }

      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error("Failed to update property:", error);
    }
  };

  return (
    <div
      className="card border shadow-stable br-3 block px-lg-5 px-4"
      style={{ minWidth: "18rem" }}
    >
      <h1 className="block text-center pt-5 pb-4 font-3-5 bold-2 px-4">
        Edit Property
      </h1>
      <div className="block mt-0">
        <div className="block">
          <FileUpload label="" onFileSelect={setSelectedFile} />
        </div>
        <div className="block pt-4">
          <InputComponent
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required={true}
            className="br-2 font-2 my-0 block bg-hue border"
            labelClassName="font-1 bold-1"
            label="Title:*"
            value={title}
          />
          <InputComponent
            name="location"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            required={true}
            className="br-2 font-2 my-0 block bg-hue border"
            labelClassName="font-1 bold-1"
            label="Location:*"
            value={location}
          />
          <InputComponent
            name="price"
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            required={true}
            className="br-2 font-2 my-0 block bg-hue border"
            labelClassName="font-1 bold-1"
            label="Price per Night:*"
            value={price}
          />
          <InputComponent
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            required={true}
            className="br-2 font-2 my-0 block bg-hue border"
            labelClassName="font-1 bold-1"
            label="Description:*"
            value={description}
          />
        </div>
      </div>
      <div className="block text-center py-4">
        <button
          className="bg-purpple clr-white py-3 px-4 br-3 block text-center mb-4"
          style={{ width: "100%" }}
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
