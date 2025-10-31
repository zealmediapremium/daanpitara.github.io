import SectionHeading from "@/assets/headings/SectionHeading";
import FaqSingleQuestion from "@/assets/theme/FaqSingleQuestion";
import SubsectionHeading from "@/assets/headings/SubsectionHeading";

export default function Faqs() {

  const basic_faqs =[
  {
    "question": "How does DaanPitara support NGOs?",
    "answer": "DaanPitara acts as a digital growth partner for NGOs, helping them raise funds online, connect with CSR opportunities, and get discovered through digital campaigns and Google Ad Grants. We make it easier for NGOs to grow and gain visibility."
  },
  {
    "question": "What makes Mission Mosaic special?",
    "answer": "Mission Mosaic is our initiative that brings together changemakers from every corner of India. It’s a space where different missions unite, ensuring NGOs, donors, and volunteers work hand-in-hand for shared impact."
  },
  {
    "question": "What do you mean by “signing up for free”?",
    "answer": "When we say sign up for free, it means your NGO can create a verified listing on our Digital NGOs platform without paying anything. It’s our way of ensuring that every organization big or small has an equal chance to be seen and supported."
  },
  {
    "question": "Who can be part of DaanPitara?",
    "answer": "Any registered NGO, foundation, or social impact group working towards a cause is welcome to join. Whether you focus on education, environment, health, or women empowerment, we help your mission reach further."
  },
  {
    "question": "What benefits will my NGO get after joining?",
    "answer": "Once you’re onboard, you’ll receive a verified NGO profile, improved online visibility, potential donor outreach, and access to CSR and digital funding tools, all designed to help your organization grow sustainably."
  },
  {
    "question": "Does the free access expire?",
    "answer": "No, your free access stays active. We don’t believe in limiting impact. You can continue showcasing your NGO as long as you wish and choose to upgrade later only if you want to explore more advanced digital tools."
  }
]


const paymentFAQ = [
  {
    "question": "Does joining DaanPitara require any initial cost?",
    "answer": "To become part of DaanPitara, a small one-time setup charge of ₹2,100 is required. This covers your NGO’s verification, onboarding, and digital listing on the platform so you can access all our tools and features seamlessly."
  },
  {
    "question": "What’s included once my NGO is successfully registered?",
    "answer": "Once registered, you’ll gain access to your dedicated NGO dashboard, digital tools for fundraising and visibility, and personalized guidance from our expert team to help your cause reach more people."
  },
  {
    "question": "Are the pricing plans flexible for different NGOs?",
    "answer": "Yes, absolutely. We understand that every NGO operates differently, so our plans are customized to fit your size, needs, and goals. You can always discuss customized options with our support team."
  },
  {
    "question": "When should payments be made for services?",
    "answer": "Payments are generally required before your selected service begins. For larger projects or ongoing partnerships, we also offer scheduled or milestone-based payment options for your convenience."
  },
  {
    "question": "Can you ensure definite results for each service?",
    "answer": "Our focus is on impact and progress, not promises. While we can’t guarantee fixed results, our team ensures consistent effort, transparent reporting, and meaningful outcomes for your NGO’s growth."
  },
  {
    "question": "Is it possible to stop services midway if needed?",
    "answer": "Yes, you can pause or cancel your plan anytime with prior notice. We’ll make sure the process is smooth and guide you through any formalities that may apply."
  },
  {
    "question": "Do you offer refunds once payment is made?",
    "answer": "Since most of our work begins immediately after payment, refunds aren’t generally applicable. However, if there’s a genuine concern or technical issue, our team will review your case personally to find a fair solution."
  },
  {
    "question": "What payment methods are accepted by us?",
    "answer": "You can pay easily through UPI, net banking, credit/debit cards, or secure payment gateways. Once your payment is completed, an instant acknowledgment and invoice will be shared with you."
  }
]




return (
  <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-0">
    <SectionHeading heading="Frequently asked questions for quick answers" />

    <div
      className="
        w-full
        max-w-[700px]
      "
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
          ))}
      </div>

      <SubsectionHeading heading="Payment & Refund" />
      {paymentFAQ.length > 1 &&
        paymentFAQ.map((faq, index) => (
          <FaqSingleQuestion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
    </div>
  </div>
);

}
