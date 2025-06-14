import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./sign-in.css";
function SignInPage() {
  return (
    <div className="sign-in">
      <SignIn appearance={{ baseTheme: dark }} afterSignInUrl={"/"} />
    </div>
  );
}

export default SignInPage;
