import { SignUp } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";

export default function Page() {

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <SignUp path="/sign-up" />;
      </div>
    </div>
  )
}