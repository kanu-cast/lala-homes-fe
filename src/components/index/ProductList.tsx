import React from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    service: "Villas",
    nickName: "abasare",
    price: "From 10,000",
    currency: "RWF",
    link: "/property",
    eta: "30 mins",
    panicButton: true,
    chargedPerHour: true,
    chargedPerDay: true,
    chargedPerKm: true,
    discount: true,
    basicChargedBy: "Night",
  },
  {
    service: "Apartments",
    nickName: "abasare",
    price: "From 50,000",
    currency: "RWF",
    link: "/property",
    eta: "30 mins",
    panicButton: true,
    chargedPerHour: false,
    chargedPerDay: true,
    chargedPerKm: false,
    discount: true,
    basicChargedBy: "Night",
  },
  {
    service: "Cottages",
    nickName: "drivers with trucks",
    price: "From 10,000",
    currency: "RWF",
    link: "/property",
    eta: "30 mins",
    panicButton: true,
    chargedPerHour: false,
    chargedPerDay: true,
    chargedPerKm: true,
    discount: true,
    basicChargedBy: "Night",
  },
];
const ProductList = () => {
  const result = data.map((item) => (
    <ProductCard
      key={item.service}
      service={item.service}
      nickName={item.nickName}
      price={item.price}
      link={item.link}
      eta={item.eta}
      panicButton={item.panicButton}
      chargedPerKm={item.chargedPerKm}
      chargedPerHour={item.chargedPerHour}
      chargedPerDay={item.chargedPerDay}
      discount={item.discount}
      currency={item.currency}
      basicChargedBy={item.basicChargedBy}
    />
  ));
  return (
    <div className="inline-block  py-1 px-lg-4">
      <h1 className="block font- bold-2 py-5">
        Make your Booking <span className="clr-purpple">Today</span>
      </h1>
      {result}
    </div>
  );
};
export default ProductList;
