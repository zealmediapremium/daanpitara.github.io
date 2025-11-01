import { useRef, useState } from "react";
import InputField from "@/assets/theme/FormInputField";
import {
  UserIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  BuildingsIcon,
  TagIcon,
  LockIcon,
  KeyIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";
import SubmitButton from "@/assets/ButtonDesigns/SubmitButton";
import { createNGOUser } from '@/assets/Services/users';
import type { CreateNGOUserParams } from '@/assets/Services/users';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 1 refs
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Step 2 refs
  const ngoNameRef = useRef<HTMLInputElement>(null);
  const ngoCategoryRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  // Step 3 refs
  const emailOtpRef = useRef<HTMLInputElement>(null);
  const phoneOtpRef = useRef<HTMLInputElement>(null);

  const stepTitles = ["Personal Information", "NGO Details", "Verify OTP"];

  // 🧠 Validation Functions
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!firstNameRef.current?.value.trim()) newErrors.firstName = "First name is required";
    if (!lastNameRef.current?.value.trim()) newErrors.lastName = "Last name is required";

    const email = emailRef.current?.value.trim();
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";

    const phone = phoneRef.current?.value.trim();
    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\+?[0-9\s-]{8,15}$/.test(phone)) newErrors.phone = "Enter a valid phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!ngoNameRef.current?.value.trim()) newErrors.ngoName = "NGO name is required";
    if (!ngoCategoryRef.current?.value.trim()) newErrors.ngoCategory = "NGO category is required";

    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSignup = async() => {
    if (!validateStep2()) return;

const data: CreateNGOUserParams = {
  name: `${firstNameRef.current?.value || ''} ${lastNameRef.current?.value || ''}`,
  email: emailRef.current?.value || '',
  phone_no: phoneRef.current?.value || '',
  ngo_name: ngoNameRef.current?.value || '',
  ngo_category: ngoCategoryRef.current?.value || undefined, // optional
  password: passwordRef.current?.value || '',
};


      //     name: 'John Doe',
      // phone_no: '1234567890',
      // email: 'john@example.com',
      // password: 'securePassword123',
      // ngo_name: 'Helping Hands',
      // ngo_category: 'Health',
          console.log("✅ Signup Data (Step 1 + Step 2):", data);
    try {
      const result = await createNGOUser(data);
      // setSuccess(result.message);
      alert(result.message);
      console.log('✅ Created user:', result.user);
      setStep((prev) => prev + 1);
    } catch (err: any) {
      // setError(err.message);
      alert(err.message);
    } 
  };

  const handleVerifyOtp = () => {
    const otpData = {
      emailOtp: emailOtpRef.current?.value,
      phoneOtp: phoneOtpRef.current?.value,
    };
    console.log("OTP Data:", otpData);
  };

  return (
    <div className="max-w-md w-full p-6 rounded-lg space-y-6 relative bg-white">
      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {stepTitles[step - 1]}
          </h2>
          {step > 1 && (
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-brand-blue transition"
            >
              <ArrowLeftIcon size={24} weight="bold" />
            </button>
          )}
        </div>
        <div className="h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-blue transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1 */}
      <div style={{ display: step === 1 ? "block" : "none" }} className="mt-4">
        <InputField
          ref={firstNameRef}
          text="First Name:"
          placeholder="John"
          icon={<UserIcon size={20} />}
          error={errors.firstName}
        />
        <InputField
          ref={lastNameRef}
          text="Last Name:"
          placeholder="Carter"
          icon={<UserIcon size={20} />}
          error={errors.lastName}
        />
        <InputField
          ref={emailRef}
          text="Email:"
          placeholder="john@example.com"
          icon={<EnvelopeSimpleIcon size={20} />}
          error={errors.email}
        />
        <InputField
          ref={phoneRef}
          text="Phone:"
          placeholder="+91 98765 43210"
          icon={<PhoneIcon size={20} />}
          error={errors.phone}
        />
        <SubmitButton submit={handleNext} text="Next" />
      </div>

      {/* Step 2 */}
      <div style={{ display: step === 2 ? "block" : "none" }} className="mt-4">
        <InputField
          ref={ngoNameRef}
          text="NGO Name:"
          placeholder="Helping Hands Foundation"
          icon={<BuildingsIcon size={20} />}
          error={errors.ngoName}
        />
        <InputField
          ref={ngoCategoryRef}
          text="NGO Category:"
          placeholder="Education / Health"
          icon={<TagIcon size={20} />}
          error={errors.ngoCategory}
        />
        <InputField
          ref={passwordRef}
          text="Password:"
          placeholder="••••••••"
          type="password"
          icon={<LockIcon size={20} />}
          error={errors.password}
        />
        <InputField
          ref={confirmPasswordRef}
          text="Confirm Password:"
          placeholder="••••••••"
          type="password"
          icon={<LockIcon size={20} />}
          error={errors.confirmPassword}
        />
        <SubmitButton submit={handleSignup} text="Sign Up" />
      </div>

      {/* Step 3 */}
      <div style={{ display: step === 3 ? "block" : "none" }} className="mt-4">
        <InputField
          ref={emailOtpRef}
          text="Email OTP:"
          placeholder="Enter email OTP"
          icon={<KeyIcon size={20} />}
        />
        <InputField
          ref={phoneOtpRef}
          text="Phone OTP:"
          placeholder="Enter phone OTP"
          icon={<KeyIcon size={20} />}
        />
        <SubmitButton submit={handleVerifyOtp} text="Verify OTP" />
      </div>
    </div>
  );
}
