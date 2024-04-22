import { Navbar } from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
      <SignIn path="/sign-in" />;
      </div>
    </div>
  )
}