import Image from "next/image";
import iconSuccess from "@/public/icon-success.svg"

export function SignupSuccess() {
  return (
    <div className="flex h-full flex-col justify-between bg-white px-6 pb-10 pt-[9.25rem] sm:h-[520px] sm:w-[504px] sm:rounded-[2.25rem] sm:p-16 sm:pt-12">
      <div className="space-y-10">
        <div>
          <Image src={iconSuccess} alt="icon success" />
        </div>
        <div className="space-y-6">
          <p className="text-[2.5rem] font-bold leading-none sm:text-[3.5rem]">
            Thanks for subscribing!
          </p>
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-bold">ash@loremcompany.com</span>. Please open
            it and click the button inside to confirm your subscription.
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="item-end h-14 w-full rounded-lg bg-neutral-1 font-bold text-white"
      >
        Dismiss message
      </button>
    </div>
  );
}
