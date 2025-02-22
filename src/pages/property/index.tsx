import PropertyCard from "@/components/PropertyCard";
import React from "react";
import { Pagination } from "@/components/partials/Pagination";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Property } from "@/components/PropertyCard";

interface PropertyPageProps {
  property: Property[];
}

const PropertyPage: React.FC<PropertyPageProps> = ({ property }) => {
  console.log(">>>>>>>>>>>>", property);
  return (
    <div className="block px-lg-5 px-3 px-md-4 py-5">
      <Pagination
        items={property}
        itemsPerPage={8}
        className="user-list quadriple-grid"
        renderItem={(item) => (
          <PropertyCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            currency={item.currency}
            category={item.category}
            location={item.location}
            imageUrl={item.imageUrl}
            hostId={item.hostId}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        )}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  PropertyPageProps
> = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/property`
    );

    // Ensure the response data is in the expected format
    const properties = response.data;

    return {
      props: {
        property: properties,
      },
    };
  } catch (error) {
    console.error("Error fetching properties:", error);
    return {
      props: {
        property: [], // Return an empty array if there's an error
      },
    };
  }
};

export default PropertyPage;
