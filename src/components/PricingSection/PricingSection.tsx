import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="bg-gray-100 p-10">
      <div className="grid grid-cols-3 gap-4">
        <PricingCard
          title="Standard"
          description="One request at a time. Pause or cancel at any time."
          price="$4,995/m"
          buttonText="Begin"
          includedItems={[
            "One request at a time",
            "Average delivery in 48 hours",
            "Unlimited brands",
            "Unlimited users",
            "Unlimited stock photos via Shutterstock",
            "Easy credit card payments",
            "Pause or cancel at any time"
          ]}
        />
        <PricingCard
          title="Pro"
          description="Duplicate requests. Pause or cancel at any time."
          price="$7,995/m"
          buttonText="Begin"
          includedItems={[
            "Two request at a time",
            "Average delivery in 48 hours",
            "Unlimited brands",
            "Unlimited users",
            "Unlimited stock photos via Shutterstock",
            "Easy credit card payments",
            "Pause or cancel at any time"
          ]}
        />
        <AdditionalInfo
          title="Refer a friend and earn"
          description="Earn 5% monthly recurring commissions for each referral."
          buttonText="Join now"
          imageUrl="https://placehold.co/300x200"
          imageAlt="Two hands pulling on a rope, symbolizing a referral program"
        />
      </div>
    </div>
  );
};

export default PricingSection;
