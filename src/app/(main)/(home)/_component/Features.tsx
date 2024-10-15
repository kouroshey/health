import Link from "next/link";

import { featuresDetails } from "@/store/local/home.static";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8">
      {featuresDetails.map((card) => (
        <Link key={card.path} href={card.path} className="w-full h-24">
          <FeatureCard
            key={card.icon}
            path={card.path}
            icon={card.icon}
            name={card.name}
            bgColor={card.bgColor}
          />
        </Link>
      ))}
    </div>
  );
};

export default Features;
