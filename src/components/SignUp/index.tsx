
import SignupForm from "./SignupForm";
import Logo from "@/assets/daanpitara.jpg";



export default function NGOForm() {



  return (
    <div className="flex justify-center items-start mt-10">
    <div>
      <img
        src={Logo}
        alt="NGO Signup Illustration"
        className="w-96 h-96 object-contain hidden md:block ml-10 mt-10"
      />
      <p className="text-center italic text-gray-500 mt-2">Together, we can make difference!</p>
    </div>
    <SignupForm />

    </div>
  );
}
