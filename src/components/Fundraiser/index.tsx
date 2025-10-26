import { useRef, useState } from "react";
import InputField from "@/assets/theme/FormInputField";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  BuildingsIcon,
  GlobeIcon,
  ListIcon,
  ClipboardTextIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import SubmitButton from "@/assets/Buttons/SubmitButton";

export default function CsrConnectionForm() {
  const [step, setStep] = useState(1);

  // Step 1 refs
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  // Step 2 refs
  const [userType, setUserType] = useState("");
  const [purpose, setPurpose] = useState("");

  // Step 3 refs
  const [focusArea, setFocusArea] = useState<string[]>([]);
  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const beneficiariesRef = useRef<HTMLInputElement>(null);

  // Step 4 refs
  const websiteRef = useRef<HTMLInputElement>(null);
  const achievementsRef = useRef<HTMLInputElement>(null);

  // Step 5 refs
  const authorizedRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleFocus = (area: string) => {
    setFocusArea((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = () => {
    const formData = {
      name: nameRef.current?.value,
      contactPerson: contactRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      location: locationRef.current?.value,
      userType,
      purpose,
      focusArea,
      summary: summaryRef.current?.value,
      beneficiaries: beneficiariesRef.current?.value,
      website: websiteRef.current?.value,
      achievements: achievementsRef.current?.value,
      authorizedName: authorizedRef.current?.value,
      date: dateRef.current?.value,
    };

    console.log("Form Submitted:", formData);
    alert("✅ Application submitted successfully!");
  };

  const stepTitles = [
    "Basic Details",
    "Type & Purpose",
    "Focus Area & Project Info",
    "Documents & Credentials",
    "Declaration & Submission",
  ];

  return (
    <div className="max-w-2xl mx-auto rounded-lg bg-white relative">
      {/* Header */}
      <div className="relative mb-4 text-center p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          CSR | NGO | Fundraiser Connection Form
        </h2>
        <h3 className="text-base text-gray-600 font-medium mt-2">
          {step}. {stepTitles[step - 1]}
        </h3>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-brand-blue transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content Container with fixed height */}
      <div className="px-4 max-h-[600px] min-h-[500px] overflow-y-auto">
        {step === 1 && (
          <div className="space-y-5">
            <InputField
              ref={nameRef}
              text="Full Name / Organization Name:"
              placeholder="Enter your name or organization"
              icon={<BuildingsIcon size={20} />}
            />
            <InputField
              ref={contactRef}
              text="Contact Person:"
              placeholder="Full name of the authorized contact"
              icon={<UserIcon size={20} />}
            />
            <InputField
              ref={emailRef}
              text="Email Address:"
              placeholder="example@email.com"
              icon={<EnvelopeSimpleIcon size={20} />}
            />
            <InputField
              ref={phoneRef}
              text="Phone / WhatsApp:"
              placeholder="+91-XXXXXXXXXX"
              icon={<PhoneIcon size={20} />}
            />
            <InputField
              ref={locationRef}
              text="Country / City:"
              placeholder="Enter your location"
              icon={<MapPinIcon size={20} />}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">You are:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {["NGO / Non-Profit", "Corporate (CSR)", "Individual Donor"].map(
                  (type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="userType"
                        value={type}
                        checked={userType === type}
                        onChange={() => setUserType(type)}
                      />
                      {type}
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Purpose of Submission:</p>
              {[
                "Seeking CSR Support / Partnership",
                "Offering CSR Collaboration",
                "Running a Fundraising Campaign",
                "Volunteering or Awareness Partnership",
              ].map((p) => (
                <label key={p} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purpose"
                    value={p}
                    checked={purpose === p}
                    onChange={() => setPurpose(p)}
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="font-medium mb-2">Primary Focus Area:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Education",
                "Health & Hygiene",
                "Environment & Sustainability",
                "Women Empowerment",
                "Rural Development",
                "Skill Development",
                "Animal Welfare",
                "Other",
              ].map((area) => (
                <label key={area} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={focusArea.includes(area)}
                    onChange={() => toggleFocus(area)}
                  />
                  {area}
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Project / Initiative Summary:
              </label>
              <textarea
                ref={summaryRef}
                rows={4}
                placeholder="Write a brief description..."
                className="w-full border-b focus:outline-none focus:border-black p-2"
              />
            </div>
            <InputField
              ref={beneficiariesRef}
              text="Target Beneficiaries / Location:"
              placeholder="Mention your community or region"
              icon={<ListIcon size={20} />}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <InputField
              ref={websiteRef}
              text="Website / Social Links:"
              placeholder="Paste your website or social handles"
              icon={<GlobeIcon size={20} />}
            />
            <InputField
              ref={achievementsRef}
              text="Previous CSR Partners / Achievements:"
              placeholder="Mention past collaborations"
              icon={<ClipboardTextIcon size={20} />}
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-5">
            <div className="flex items-start gap-2">
              <input type="checkbox" required />
              <p className="text-sm">
                I confirm that the information provided is accurate and may be
                shared for CSR / fundraising matchmaking purposes.
              </p>
            </div>
            <InputField
              ref={authorizedRef}
              text="Authorized Name / Signature:"
              placeholder="Enter full name"
              icon={<UserIcon size={20} />}
            />
            <InputField
              ref={dateRef}
              text="Date:"
              placeholder="DD/MM/YYYY"
              icon={<ListIcon size={20} />}
            />
          </div>
        )}

        {/* Sticky Navigation Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 py-3 flex justify-between mt-4">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              <ArrowLeftIcon size={20} /> Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next <ArrowRightIcon size={20} />
            </button>
          ) : (
            <SubmitButton submit={handleSubmit} text="Submit Your Application" />
          )}
        </div>
      </div>
    </div>
  );
}
