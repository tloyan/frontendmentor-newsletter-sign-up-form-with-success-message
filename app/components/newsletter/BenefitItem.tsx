import Image from "next/image";
import iconList from "@/public/icon-list.svg";

export function BenefitItem({ children }: { children?: React.ReactNode }) {
  return (
    <li className="flex space-x-4">
      <div className="shrink-0 h-6 flex">
        <Image src={iconList} alt="icon" />
      </div>
      <p>{children}</p>
    </li>
  );
}
