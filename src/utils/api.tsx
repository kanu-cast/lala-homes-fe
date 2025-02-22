import axios from "axios";
import { toast } from "react-toastify";

interface RegisterPropertyParams {
  token: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  currency: string;
  price: number;
  category: string;
}

export const registerProperty = async ({
  token,
  imageUrl,
  title,
  description,
  location,
  currency,
  price,
  category,
}: RegisterPropertyParams) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/property`,
      {
        imageUrl,
        title,
        description,
        location,
        currency,
        price,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error registering property:", error);
    throw new Error("Failed to register property");
  }
};

export const uploadToCloudinary = async (
  file: File
): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lala-images");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      toast.error("Sorry Something went wrong, Try again later");
      return null;
    }

    const data = await response.json();
    toast.success("Property registered successfully! 🎉");
    return data.secure_url; // Cloudinary returns the image URL here
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

interface PropertyData {
  token: string;
  imageUrl: string;
  title: string;
  description: string;
  location: string;
  currency: string;
  category: string;
  price: number;
}

export const updateProperty = async (id: string, data: PropertyData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/property/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      toast.error("Sorry Something went wrong, Try again later");
      return;
    }
    toast.success("Property updated successfully! 🎉");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export const createBooking = async (bookingData: {
  propertyId: string;
  checkIn: Date;
  checkOut: Date;
  token: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bookingData.token}`,
        },
        body: JSON.stringify({
          propertyId: bookingData.propertyId,
          checkIn: bookingData.checkIn.toISOString(),
          checkOut: bookingData.checkOut.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
