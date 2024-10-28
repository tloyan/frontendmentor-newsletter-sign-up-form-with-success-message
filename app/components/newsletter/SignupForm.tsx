import { useFormStatus } from "react-dom";

import { cn } from "@/app/utils/cn";
import { SignupStateType } from "@/app/actions/newsletter/signup";

export function SignupForm({
  state,
  action,
}: {
  state?: SignupStateType;
  action: (payload: FormData) => void;
}) {
  return (
    <form action={action} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <label htmlFor="email">Email address</label>
          { state?.errors && <p className="text-primary">Valid email required</p> }
        </div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@company.com"
          className={cn(
            "h-14 rounded-lg border border-neutral-3 pl-6 placeholder-neutral-3 focus:border-neutral-1",
            state?.errors && "border-primary bg-[#FFE7E6] text-primary",
          )}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "h-14 w-full rounded-lg bg-neutral-1 font-bold text-white",
        pending
          ? "bg-neutral-3"
          : "from-[#FF6A3A] to-[#FF527B] hover:bg-gradient-to-b hover:bg-gradient-to-t hover:shadow-[0_16px_32px_0px_rgba(255,97,85,.5)]",
      )}
    >
      Subscribe to monthly newsletter
    </button>
  );
}
