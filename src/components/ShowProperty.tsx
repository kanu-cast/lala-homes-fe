import Image from "next/image";
import React, { useState, useContext } from "react";
import {
  FaLocationDot,
  FaStairs,
  FaTrash, // Add Trash icon
} from "react-icons/fa6";
import {
  FaBed,
  FaChair,
  FaEdit,
  FaFire,
  FaShower,
  FaTable,
} from "react-icons/fa";
import BookNowForm from "./BookingForm";
import UpdateForm from "./UpdateForm";
import { Modal, Box } from "@mui/material";
import { useRouter } from "next/router"; // Import useRouter for redirection
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

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
  livingRooms?: number;
  kitchens?: number;
  diningRooms?: number;
  bathrooms?: number;
  bedrooms?: number;
  floors?: number;
  host: {
    id: string;
  };
}

interface ShowPropertyProps {
  property: Property;
  onUpdateProperty: (updatedProperty: Property) => void;
}

const ShowProperty: React.FC<ShowPropertyProps> = ({
  property,
  onUpdateProperty,
}) => {
  // context consumption here
  const context = useContext(AuthContext);
  if (!AuthContext) {
    throw new Error("Navbar must be used within a ContextProvider");
  }
  const { user, isLoggedIn } = context;
  const [openEditModal, setOpenEditModal] = useState(false); // State for edit modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // State for delete modal
  const router = useRouter(); // Initialize useRouter

  // Open edit modal
  const handleOpenEditModal = () => setOpenEditModal(true);

  // Close edit modal
  const handleCloseEditModal = () => setOpenEditModal(false);

  // Open delete modal
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);

  // Close delete modal
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  // Handle delete confirmation
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("User is not authenticated!");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/property/${property.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        toast.error("Something went wrong please try again later");
        console.error("Failed to delete property");
        return;
      }
      toast.success("Property deleted successfully! 🎉");
      // Redirect to /property after successful deletion
      router.push("/property");
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="triple-midlle-big-grid">
      <div className="block"></div>
      <div className="block text-center px-lg-5">
        <div
          className="img-holder-fluid border br-3"
          style={{ height: "30rem", width: "auto" }}
        >
          <Image
            src={property.imageUrl || "/house12.jpg"}
            height={100}
            width={100}
            alt={`picture of ${property.title}`}
            className="img-fit br-3"
          />
        </div>
        <div className="block border my-3 py-4 px-4 card br-3">
          <div className="block text-left pb-5">
            <div className="block">
              {/* Edit and Delete Buttons */}
              {isLoggedIn && property.host.id == user?.id ? (
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleOpenEditModal}
                    className="flex items-center gap-2 bg-purpple clr-white py-2 px-3 br-3"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={handleOpenDeleteModal}
                    className="flex items-center gap-2 bg-red clr-white py-2 px-3 br-3"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="double-grid">
                <span className="block capitalize bold-1 font-4 pt-3 px-2">
                  {property.title}
                </span>
                <span className="block font-4 bold-3 pt-3 text-right">
                  {property.currency} {property.price}/Night
                </span>
              </div>

              <span className="block font-0 text-muted">
                <FaLocationDot className="clr-red mx-2" />
                {property.location}
              </span>
            </div>
          </div>
          <div className="block my-3 px-2 pb-5">
            <div className="double-grid my-3">
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaChair className="f-left" />
                Livingrooms
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.livingRooms || 1}
                </span>
              </span>
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaFire className="f-left" />
                Kitchens
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.kitchens || 1}
                </span>
              </span>
            </div>
            <div className="double-grid my-3">
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaTable className="f-left" />
                Diningrooms
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.diningRooms || 1}
                </span>
              </span>
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaShower className="f-left" />
                Bathrooms
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.bathrooms || 3}
                </span>
              </span>
            </div>
            <div className="double-grid my-3">
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaBed className="f-left" />
                Bedrooms
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.bedrooms || 4}
                </span>
              </span>
              <span className="inline-block border br-3 py-2 px-3 font-1">
                <FaStairs className="f-left" />
                Floors
                <span
                  className="f-right br-rnd border clr-white bg-purpple flex-centered flex-centered-vertical font-0"
                  style={{ height: "14px", width: "14px" }}
                >
                  {property.floors || 1}
                </span>
              </span>
            </div>
          </div>
          <div className="block">
            <BookNowForm propertyId={property.id} />
          </div>
        </div>
      </div>
      <div className="block"></div>

      {/* Edit Modal */}
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <UpdateForm
            property={property}
            onClose={handleCloseEditModal}
            onUpdateProperty={onUpdateProperty}
          />
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <h2 className="font-3 bold-2">Confirm Deletion</h2>
          <p className="font-1 my-3">
            Are you sure you want to delete this property? This action cannot be
            undone.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleCloseDeleteModal}
              className="bg-gray clr-white py-2 px-4 br-3"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red clr-white py-2 px-4 br-3"
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ShowProperty;
