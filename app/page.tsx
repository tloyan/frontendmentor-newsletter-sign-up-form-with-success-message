import { NewsletterSignup } from "./components/newsletter/NewsletterSignup";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-neutral-2">
      <NewsletterSignup />
    </main>
  );
}