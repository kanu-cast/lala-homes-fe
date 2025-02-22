import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createBooking } from "@/utils/api"; // Import the createBooking function
import { toast } from "react-toastify"; // For showing notifications
import "react-toastify/dist/ReactToastify.css";

interface BookNowFormProps {
  propertyId: string; // Accept propertyId as a prop
}

const BookNowForm: React.FC<BookNowFormProps> = ({ propertyId }) => {
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      toast.error("Please select both check-in and check-out dates.");
      return;
    }

    if (checkIn >= checkOut) {
      toast.error("Check-out date must be after check-in date.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to book a property.");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const bookingData = {
        propertyId,
        checkIn,
        checkOut,
        token,
      };
      console.log("????????????????", bookingData);
      const response = await createBooking(bookingData);
      toast.success("Booking created successfully! 🎉");
      console.log("Booking response:", response);
    } catch (error) {
      toast.error("Failed to create booking. Please try again.");
      console.error("Error creating booking:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-now-form">
      <div className="date-picker-container">
        <div className="date-picker">
          <label>Check-in Date</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date as Date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            placeholderText="Select check-in date"
            className="date-picker-input"
          />
        </div>

        <div className="date-picker">
          <label>Check-out Date</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date as Date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn || new Date()}
            placeholderText="Select check-out date"
            className="date-picker-input"
          />
        </div>
      </div>

      <button
        type="submit"
        className="book-now-button bg-purpple clr-white"
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default BookNowForm;
