import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./sign-up.css";
function SignUpPage() {
  return (
    <div className="signUp">
      <SignUp appearance={{ baseTheme: dark }} afterSignUpUrl="/" />
    </div>
  );
}

export default SignUpPage;
