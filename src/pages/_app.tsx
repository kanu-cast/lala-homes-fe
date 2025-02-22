import "../../i18n";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext"; // Updated import path

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000} // Closes after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar /> <Component {...pageProps} /> <Footer />
    </AuthProvider>
  );
}
