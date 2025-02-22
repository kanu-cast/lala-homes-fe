import React from "react";

const EndorsementCard = () => {
  return (
    <div className="inline-block mx-3 shadow-1 px-3 py-3 my-3">
      <div className="stacking-double-grid-grow">
        <div className="flex-centered flex-centered-vertical my-4">
          <img
            src="/call2.jpg"
            className="img-fit br-rnd"
            style={{ height: "3rem", width: "3rem" }}
          />
        </div>
        <div className="block" style={{ maxWidth: "16rem" }}>
          <span className="font-2 bold-1">
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis iste, nihil est similique praesentium ducimus rem
            </i>
          </span>
        </div>
      </div>
      <div className="block">
        <span className="text-muted font-1 block f-right py-4">
          ~ Munyaneza Castro
        </span>
      </div>
    </div>
  );
};
export default EndorsementCard;
