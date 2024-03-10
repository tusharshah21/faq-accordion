import React, { useState } from "react";
import desktopbg from '../assets/images/background-pattern-desktop.svg'
import mobilebg from '../assets/images/background-pattern-mobile.svg'

import star from '../assets/images/icon-star.svg'

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(index === isOpen ? null : index);
  };

  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "You can install Tailwind CSS via npm or yarn. Run the following command: npm install tailwindcss",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I det help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
        <div className="absolute w-screen">
            <img src={desktopbg} alt="desktopbg" className="mt-[-4rem] w-full hidden lg:block" />
            <img src={mobilebg} alt="desktopbg" className="mt-[-4rem] w-full lg:hidden block" />
        </div>

      <div className="font-body absolute h-screen w-screen text-center mx-auto flex justify-center items-center">
        <div className="text-[color:hsl(292,_42%,_14%)] shadow-2xl cardo md:w-[39%] w-[89%] bg-white rounded-[10px] px-6 lg:px-12 pt-8 lg:pt-10 lg:pb-4">
          <h2 className="text-4xl lg:text-5xl font-bold lg:mb-2 items-center text-left flex">
                <img src={star} alt="star" className="mr-6 w-[10%] lg:w-[8%]" />
            FAQs
          </h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <div className="flex justify-between items-center">
                  <button
                    className="leading-5 text-[17px] font-semibold text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                  </button>
                  <button
                    className=""
                    onClick={() => toggleAccordion(index)}
                  >
                    {isOpen === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="31"
                        fill="none"
                        viewBox="0 0 30 31"
                        className="ml-8 lg:ml-0"
                      >
                        <path
                          fill="#301534"
                          d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="31"
                        fill="none"
                        viewBox="0 0 30 31"
                        className="ml-8 lg:ml-0"
                      >
                        <path
                          fill="#AD28EB"
                          d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {isOpen === index && (
                  <p className="text-[15px] text-left mt-6 text-[color:hsl(292,_16%,_49%)]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
