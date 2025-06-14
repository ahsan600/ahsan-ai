"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo.png";
import "./navbar.css";
function Navbar() {
  const url = usePathname();
  const authPage = ["/sign-in", "/sign-up"];
  const showAuthButton = authPage.includes(url);

  return (
    <div className="navbar">
      <Link href="/" className="navbar-logo">
        <Image src={logo} alt="Ahsan ChatGPT Logo" width={50} height={50} />
        <span>AhsanAI</span>
      </Link>

      <div className="navbar-user">
        <SignedOut>
          {!showAuthButton && (
            <SignInButton>
              <button className="signIn">Sign In</button>
            </SignInButton>
          )}
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
