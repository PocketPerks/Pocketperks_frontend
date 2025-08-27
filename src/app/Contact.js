import Hello from "./component/Navbar";
import ContactUs from "./component/ContactUs";
import Drag from "./component/Drag";
import Footer from "./component/Footer";
export default function Contact() {
  return (
    <div>
      {/* Navbar Top */}
      <Hello />

      {/* 2 Column Layout */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-6">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactUs />
        </div>

        {/* Right Side - Placeholder for Other Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center border rounded-lg p-6">
          <p className="text-gray-600">
          <Drag/>
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}