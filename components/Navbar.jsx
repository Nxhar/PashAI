
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";


export function Navbar() {

    const user = null;
  
  
    return (
      <div className='flex flex-col w-screen fixed z-50 font-medium '>
        <div className='px-10 py-2 flex justify-between mx-auto items-center w-screen bg-green-600 text-white'>
          <Link href='/' className='text-xl flex justify-center items-center h-[3rem] '>PashOn.</Link>
  
          <div className="flex h-[3rem] gap-10 scale-0 md:scale-100 items-center">
            <Link href='/sign-in'>Start Learning</Link>
            <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            <Link href='/about'>About</Link>
            {/* <Link href='/dashboard'></Link> */}
            <img src={user ? user.photoURL : ''} className="chat-user-icon" />
          </div>
  
        </div>
        <Separator className='mb-4 bg-green-600' />
      </div>
    )
  }