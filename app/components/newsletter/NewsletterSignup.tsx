"use client"
import Image from "next/image";
import { useFormState } from "react-dom";
import { SignupDetails } from "./SignupDetails";
import { SignupForm } from "./SignupForm";
import { SignupSuccess } from "./SignupSuccess";
import illustrationMobile from "@/public/illustration-sign-up-mobile.svg";
import illustrationDesktop from "@/public/illustration-sign-up-desktop.svg";
import { signup } from "@/app/actions/newsletter/signup";

export function NewsletterSignup() {
  const [state, formAction] = useFormState(signup, { success: false });

  if (state?.success) {
    return <SignupSuccess />
  }

  return (
    <div className="bg-white w-full min-h-full lg:min-h-fit flex flex-col lg:flex-row-reverse lg:p-6 lg:rounded-[2.25rem] lg:w-[928px] lg:h-[641px]">
      <div className="lg:rounded-2xl overflow-hidden lg:w-[400px] shrink-0">
        <Image src={illustrationMobile} alt="illustration" style={{width: "100%"}} className="lg:hidden" />
        <Image src={illustrationDesktop} alt="illustration" className="hidden lg:block" />
      </div>
      <div className="px-6 py-10 space-y-10 flex flex-col justify-center lg:pl-10 lg:pr-16 shrink-1">
        <SignupDetails />
        <SignupForm state={state} action={formAction} />
      </div>
    </div>
  )
}
