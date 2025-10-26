import SignupForm from "./SignupForm";
import Logo from "@/assets/daanpitara.jpg";

export default function NGOForm() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-6 md:mt-10 px-4 md:px-10 lg:px-20">
      
      {/* Left side (Image + Text) */}
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-10">
        <img
          src={Logo}
          alt="NGO Signup Illustration"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
        />
        <p className="text-center md:text-left italic text-gray-500 mt-3 text-sm sm:text-base">
          Together, we can make a difference!
        </p>
      </div>

      {/* Right side (Signup Form) */}
      <div className="w-full max-w-md sm:max-w-lg">
        <SignupForm />
      </div>
    </div>
  );
}
