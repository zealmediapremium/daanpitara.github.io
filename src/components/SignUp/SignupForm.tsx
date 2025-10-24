import React, { useRef, useState } from "react";
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

import SubmitButton from "@/assets/Buttons/SubmitButton";

export default function SignupForm() {
    const [step, setStep] = useState(1);

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

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleSignup = () => {
        const data = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            ngoName: ngoNameRef.current?.value,
            ngoCategory: ngoCategoryRef.current?.value,
            password: passwordRef.current?.value,
            confirmPassword: confirmPasswordRef.current?.value,
        };
        console.log("Signup Data:", data);
        handleNext();
    };

    const handleVerifyOtp = () => {
        const otpData = {
            emailOtp: emailOtpRef.current?.value,
            phoneOtp: phoneOtpRef.current?.value,
        };
        console.log("OTP Data:", otpData);
    };

    // Step titles
    const stepTitles = ["Personal Information", "NGO Details", "Verify OTP"];

    return (
        <div className="max-w-md w-full p-6 rounded-lg  space-y-6 relative bg-white">
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

                <div className="h-2  rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-blue transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Step 1: Personal Info */}
            {step === 1 && (
                <div className="space-y-5 mt-4">
                    <InputField ref={firstNameRef} text="First Name:" placeholder="John" icon={<UserIcon size={20} />} />
                    <InputField ref={lastNameRef} text="Last Name:" placeholder="Carter" icon={<UserIcon size={20} />} />
                    <InputField ref={emailRef} text="Email:" placeholder="john@example.com" icon={<EnvelopeSimpleIcon size={20} />} />
                    <InputField ref={phoneRef} text="Phone:" placeholder="+91 98765 43210" icon={<PhoneIcon size={20} />} />
                    {/* <button
            onClick={handleNext}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Next
          </button> */}

                    <SubmitButton
                        submit={handleNext}
                        text="Next"
                    />
                </div>
            )}

            {/* Step 2: NGO Info */}
            {step === 2 && (
                <div className="space-y-5 mt-4">
                    <InputField
                        ref={ngoNameRef}
                        text="NGO Name:"
                        placeholder="Helping Hands Foundation"
                        icon={<BuildingsIcon size={20} />}
                    />
                    <InputField
                        ref={ngoCategoryRef}
                        text="NGO Category:"
                        placeholder="Education / Health"
                        icon={<TagIcon size={20} />}
                    />
                    <InputField
                        ref={passwordRef}
                        text="Password:"
                        placeholder="••••••••"
                        type="password"
                        icon={<LockIcon size={20} />}
                    />
                    <InputField
                        ref={confirmPasswordRef}
                        text="Confirm Password:"
                        placeholder="••••••••"
                        type="password"
                        icon={<LockIcon size={20} />}
                    />

                    <SubmitButton
                        submit={handleSignup}
                        text="Sign Up"
                    />
                </div>
            )}

            {/* Step 3: OTP Verification */}
            {step === 3 && (
                <div className="space-y-5 mt-4">
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

                    <SubmitButton
                        submit={handleVerifyOtp}
                        text="Verify OTP"
                    />
                </div>
            )}
        </div>
    );
}
