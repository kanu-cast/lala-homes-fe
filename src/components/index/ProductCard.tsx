import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ProductCardInterface {
  service: string;
  nickName: string;
  price: string;
  link: string;
  eta: string;
  panicButton: boolean;
  chargedPerDay: boolean;
  chargedPerKm: boolean;
  chargedPerHour: boolean;
  discount: boolean;
  currency: string;
  basicChargedBy: string;
}
const ProductCard = (props: ProductCardInterface) => {
  const {
    service,
    price,
    chargedPerDay,
    chargedPerKm,
    chargedPerHour,
    discount,
    currency,
    basicChargedBy,
  } = props;
  return (
    <div
      className="inline-block  br-3 b-1px-green shadow-1 mx-0 mx-lg-3 px-2 px-md-3 py-3 my-3"
      style={{ width: "18rem" }}
    >
      <div className="block pt-4">
        <span className="block text-center font-2 bold-1 capitalize">
          {service}
        </span>
      </div>
      <span className="bloc px-2 px-lg-4 flex-centered">
        <span
          className="block px-4 bold-1 font-1 py-3 bg-dark clr-white br-5"
          style={{ maxWidth: "14rem" }}
        >
          {price}
          {currency}/{basicChargedBy}
        </span>
      </span>
      <div className="block py-4 mt-4" style={{ height: "14rem" }}>
        {chargedPerHour ? (
          <div className="double-grid px-3 py-2">
            <span className="text-left block  font-1 bold">
              Charged Per Night
            </span>
            <span className="inline-block font-1 bold text-right">
              <FaCheckCircle />
            </span>
          </div>
        ) : (
          ""
        )}
        {chargedPerKm ? (
          <div className="double-grid px-3 py-2">
            <span className="text-left block  font-1 bold">
              Breakfast Included
            </span>
            <span className="inline-block font-1 bold text-right">
              <FaCheckCircle />
            </span>
          </div>
        ) : (
          ""
        )}
        {chargedPerDay ? (
          <div className="double-grid px-3 py-2">
            <span className="text-left block  font-1 bold">
              Charged Per Night
            </span>
            <span className="inline-block font-1 bold text-right">
              <FaCheckCircle />
            </span>
          </div>
        ) : (
          ""
        )}

        <div className="double-grid px-3 py-2">
          <span className="text-left block  font-1 bold">Rate Accomodator</span>
          <span className="inline-block font-1 bold text-right">
            <FaCheckCircle />
          </span>
        </div>
        {discount ? (
          <div className="double-grid px-3 py-2">
            <span className="text-left block  font-1 bold">Discount</span>
            <span className="inline-block font-1 bold text-right">
              <FaCheckCircle />
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="block px-4 py-4 mt-0">
        <Link href={"/property"}>
          <button className=" font-2 bg-green bold-1 clr-white px-5 py-3 br-3">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
