import SectionHeading from "@/assets/Headings/SectionHeading";
import FaqSingleQuestion from "@/assets/theme/FaqSingleQuestion";
import SubsectionHeading from "@/assets/Headings/subsectionHeading";

export default function Faqs() {

  const basic_faqs =[
  {
    question: "What is DaanPitara?",
    answer: "DaanPitara is India’s first full-stack digital platform helping NGOs grow through digital fundraising, CSR visibility, Google Ad Grants, and complete digital onboarding."
  },
  {
    question: "What is Mission Mosaic?",
    answer: "It’s a nationwide movement to digitally list 1000 NGOs across India by Independence Day, enabling them to be displayed on a live interactive India map mosaic."
  },
  {
    question: "What does “free listing” mean?",
    answer: "Free listing means your NGO will be digitally mapped and visible on our national NGO mosaic without any initial charges."
  },
  {
    question: "Who can get listed?",
    answer: "Any legally registered NGO, Trust, or Society from India with valid documentation and willingness to grow digitally."
  },
  {
    question: "What do I get after listing?",
    answer: "A live NGO profile page, eligibility for Google Ad Grants (₹80,000/month), CSR matchmaking access, and a digital fundraising roadmap."
  },
  {
    question: "Is there a time limit for free listing?",
    answer: "Yes, the free listing is open under the “Digital Independence Campaign” till 15th August 2025."
  }
];

const paymentFAQ = [
  {
    question: "Is there any fee to join DaanPitara?",
    answer: "Yes, a one-time official onboarding fee of ₹2,100/- is applicable. This covers your NGO’s registration, verification, and listing on the platform. Post onboarding, you’ll gain access to our full suite of services."
  },
  {
    question: "What happens after onboarding?",
    answer: "After successful onboarding, NGOs can choose from various available services, packages, or combos as per their needs. These services will be activated as per mutual discussion and will reflect in the monthly billing."
  },
  {
    question: "Are service charges fixed or negotiable?",
    answer: "There is no fixed price list displayed publicly. All pricing for services, packages, or combos is discussed and mutually decided post onboarding — based on your NGO’s goals, budget, and campaign requirements."
  },
  {
    question: "When do clients have to pay?",
    answer: "Payment is due monthly based on the services selected. Once a service is chosen and activated, it will reflect in the monthly bill. Clients are required to pay invoices promptly, regardless of campaign results, as results depend on external market factors and are not linked to billing terms."
  },
  {
    question: "Are results guaranteed with services?",
    answer: "While our team offers best-in-class digital support, all fundraising and marketing results depend on various market and donor behavior factors. Therefore, results cannot be used as a condition for payment or refund."
  },
  {
    question: "Can I cancel a service mid-month?",
    answer: "You may request cancellation or pause of any service before the next billing cycle. However, services already activated in a billing cycle will be billed fully and must be paid accordingly."
  },
  {
    question: "Are payments refundable?",
    answer: "No refunds are applicable once onboarding is completed and services are activated. In exceptional cases (such as system errors or double payments), refunds may be reviewed on a case-by-case basis."
  },
  {
    question: "How can payments be made?",
    answer: "Payments can be made via UPI, bank transfer, or secure payment gateway links shared by our team."
  }
];



  return (
    <div
    className="flex flex-col content-center items-center w-full"
    >
    <SectionHeading heading="Frequently asked questions for quick answers" />
    <div 
    style={{width:"700px"}}
    >
      <div className="py-8">

      <SubsectionHeading heading="Basic FAQ's Block" />

    {basic_faqs.length > 1 && 
      basic_faqs.map((faq, index) => (
        <FaqSingleQuestion
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))
    }
      </div>
    <SubsectionHeading
    heading="Payment & Refund" /> 
        {paymentFAQ.length > 1 && 
      paymentFAQ.map((faq, index) => (
        <FaqSingleQuestion
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))
    }
    </div>
    

    </div>
  );
}
