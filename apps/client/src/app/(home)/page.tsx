import Image from "next/image";
import Link from "next/link";
import bg from "../../../public/bg.png";
import bot from "../../../public/bot.png";
import orbital from "../../../public/orbital.png";
import "./homepage.css";
function HomePage() {
  return (
    <div className="homePage">
      <Image src={orbital} alt="background" className="background-image" />
      <div className="left">
        <h1>Ahsan AI</h1>
        <h2>Boost your creativity and productivity</h2>
        <h3>
          From idea to execution, Ahsan AI helps you think faster, work smarter,
          and get more done with less effort.
        </h3>
        <Link href="/dashboard-page">Get Started</Link>
      </div>
      <div className="right">
        <div className="image-container">
          <Image src={bg} alt="bg-image" className="bg-image" />
          <Image src={bot} alt="bot-image" className="bot-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
