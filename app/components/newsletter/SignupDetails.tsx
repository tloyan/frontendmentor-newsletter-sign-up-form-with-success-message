import { BenefitItem } from "./BenefitItem";

export function SignupDetails() {
  return (
    <div className="space-y-6">
      <p className="text-[2.5rem] font-bold leading-none">Stay updated!</p>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="space-y-2.5">
        <BenefitItem>Product discovery and building what matters</BenefitItem>
        <BenefitItem>Measuring to ensure updates are a success</BenefitItem>
        <BenefitItem>And much more!</BenefitItem>
      </ul>
    </div>
  );
}
