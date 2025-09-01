import Navbar from "../components/Navbar";
import ContactUs from "../components/Contectus/page";
import Drag from "../Drag/page";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      {/* Navbar Top */}
      <Navbar />

      {/* 2 Column Layout */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-6">
        
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactUs />
        </div>

        {/* Right Side - Placeholder for Other Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center border rounded-lg p-6">
          <div className="text-gray-600">   {/* ✅ <p> ko <div> me badal diya */}
            <Drag />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
