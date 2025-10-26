import ImageCard from "@/assets/theme/ImageCard";
import Globe from "@/assets/Home/globe.jpg";
import HighlightButton from "@/assets/Buttons/highlightButton";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch p-6 lg:p-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 text-center lg:text-left space-y-4 lg:space-y-5 max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
          Hello, Changemakers!
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed">
          DaanPitara helps NGOs grow digitally, boost donations, and connect with CSR partners seamlessly.
          From visibility to fundraising, we guide you every step of the way.
        </p>
        {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base lg:text-lg w-fit mx-auto lg:mx-0">
          Get Started
        </button> */}
        <HighlightButton to="/fund-form" text="Let's Fundraise" />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center mt-8 lg:mt-0">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="Globe illustration"
          className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover shadow-md"
        />
      </div>
    </div>
  );
}
