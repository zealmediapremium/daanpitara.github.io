import ImageCard from "@/assets/theme/ImageCard";
import Globe from "@/assets/Home/globe.jpg";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-stretch p-4">
      {/* Left Section */}
      <div className="flex flex-col justify-center flex-1 text-center lg:text-left space-y-4 lg:space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Hello, Changemakers!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700">
          DaanPitara helps NGOs grow digitally, boost donations, and connect with CSR partners seamlessly.
          From visibility to fundraising, we guide you every step of the way.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base lg:text-lg">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center mt-6 lg:mt-0">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="User profile picture"
          className="rounded-full border border-gray-300 w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover"
        />
      </div>
    </div>
  );
}
