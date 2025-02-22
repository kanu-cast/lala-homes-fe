import ShowProperty from "@/components/ShowProperty";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

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

interface PropertyPageProps {
  property: Property;
}

const PropertyPage: React.FC<PropertyPageProps> = ({
  property: initialProperty,
}) => {
  const [property, setProperty] = useState<Property>(initialProperty);

  // Function to update the property state
  const handleUpdateProperty = (updatedProperty: Property) => {
    setProperty(updatedProperty);
  };

  return (
    <div className="block pb-5 pt-3">
      <ShowProperty
        property={property}
        onUpdateProperty={handleUpdateProperty}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PropertyPageProps> = async (
  context
) => {
  const { id } = context.params as { id: string };
  try {
    // Fetch property data from the backend API
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/property/${id}`
    );

    // Ensure the response data is in the expected format
    const property = response.data.property;

    return {
      props: {
        property,
      },
    };
  } catch (error) {
    console.error("Error fetching property:", error);

    // Return a 404 page if the property is not found
    return {
      notFound: true,
    };
  }
};

export default PropertyPage;
