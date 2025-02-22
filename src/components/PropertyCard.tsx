import React from "react";
import { FaStairs } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import { FaBed, FaChair, FaFire, FaShower, FaTable } from "react-icons/fa";
import Link from "next/link";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  location: string;
  imageUrl?: string;
  hostId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const PropertyCard = (props: Property) => {
  const { id, title, price, currency, location, imageUrl } = props;
  return (
    <Link href={`/property/${id}`}>
      <div
        className="inline-block mx-3 my-3 card shadow-0-stable mx-2 br-top-2 px-2 py-2 relative border"
        style={{ width: "18rem", height: "auto" }}
      >
        <span
          className="absolute bg-purpple clr-white font-0 py-2 px-3 br-2"
          style={{ top: "6px", right: "6px" }}
        >
          Verified
        </span>
        <img
          alt={"lorem ipsum"}
          src={imageUrl as string}
          width={100}
          height={100}
          className="block border br-top-2 img-fit"
          style={{ height: "9.5rem" }}
        />

        <div className="block ">
          <div className="block">
            <span className="block capitalize bold-1 font-2 pt-3 px-2">
              {title}
            </span>
            <span className="block font-0 text-muted">
              <FaLocationDot className="clr-red mx-2" />
              {location}
            </span>
          </div>
          <div className="block font-2 bold-3  pt-3">
            {currency} {price}/Day
          </div>
        </div>
        <div className="block my-3 px-2">
          <div className="double-grid my-3">
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaChair className="mx-2 inline-block" />
              Livingrooms
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                1
              </span>
            </span>
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaFire className="mx-2 inline-block" />
              Kitchens
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                1
              </span>
            </span>
          </div>
          <div className="double-grid my-3">
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaTable className="mx-2 inline-block" />
              Diningrooms
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                1
              </span>
            </span>
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaShower className="mx-2 inline-block" />
              Bathrooms
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                3
              </span>
            </span>
          </div>
          <div className="double-grid my-3">
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaBed className="mx-2 inline-block" />
              Bedrooms
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                4
              </span>
            </span>
            <span className="inline-block border br-3 py-2 px-2 font-1">
              <FaStairs className="mx-2 inline-block" />
              floors
              <span
                className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                style={{ height: "14px", width: "14px" }}
              >
                1
              </span>
            </span>
          </div>
        </div>
        <div className="block text-center py-3">
          <button className="bg-purpple br-3 px-4 py-3 font-1 bold-1 clr-white pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};
export default PropertyCard;
