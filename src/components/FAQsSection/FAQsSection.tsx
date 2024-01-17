import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex items-center justify-between w-full py-5 px-8 text-left text-black font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="px-8 pb-5">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const FAQsSection: React.FC = () => {
  const faqs: AccordionItemProps[] = [
    {
      title: "Why wouldn't I just hire a full-time designer?",
      content: (
        <>
          Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available).
          Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.<br /> <br /> With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.
        </>
      )
    },
    {
      title: "Is there a limit to how many requests I can have?",
      content: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one"
    },
    {
      title: "How fast will i receive my designs?",
      content: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
    },
    {
      title: "Who are the designers?",
      content: "You might be surprised to hear this, but TurboWeb is actually an agency of one. This means you'll work directly with me, founder of TurboWeb. However, power-ups requests such as animations or custom illustrations are provided by partner designers."
    },
    {
      title: "How does the pause feature work?",
      content: (
        <>
          We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.<br /> <br /> Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.
        </>
      )
    },
    {
      title: "Whats programs do you design in? ",
      content: "Most requests are designed using Figma"
    },
    {
      title: "How do i requests designs",
      content: "TurboWeb offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
    },
    {
      title: "What if i don't like the design?",
      content: "No worries! We'll continue to revise the design untill you're 100% satisfied."
    },
    {
      title: "Is there any design work you don't cover? ",
      content: "Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, and extensive print design (magazines, books, etc.)."
    },
    {
      title: "What if i only have a single request?",
      content: "That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
    },
    {
      title: "Are there any refunds if i don't like the service?",
      content: "Due to the high quality nature of the work, there will be no refunds issued."
    },
    
  ];

  return (
    <div id="faqs-section" className="max-w-2xl mx-auto my-12">
      <h1 className="text-5xl font-bold text-center mb-12">FAQs</h1>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};

export default FAQsSection;