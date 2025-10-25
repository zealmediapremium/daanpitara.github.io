import ImageCard from "@/assets/theme/ImageCard";
import Globe from "@/assets/Home/globe.jpg";

export default function Landing() {
  return (
    <div className="flex gap-10 items-stretch">
      {/* Left Section */}
      <div className="flex flex-col flex-1 justify-around p-4">
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
        <h1>Welcome to the Home Page</h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center p-4">
        <ImageCard
          src={Globe}
          altImage="/images/fallback.png"
          altText="User profile picture"
          className="rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
}
