import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import Animated from "./components/Animated";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen relative">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 ">
            <Image
              src={profilePic}
              alt="CodeBucks"
              className="w-full h-auto "
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center ">
            <Animated
              text="Turning Vision Into Reality With Code And Design."
              className="text-6xl text-left !important"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold  hover:bg-light hover:text-dark  border border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume <LinkArrow className={`w-6 ml-1`} />
              </Link>
              <Link
                href="mailto:abcd@fmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="Codebucks" className="w-full h-auto" />
      </div>
    </main>
  );
}
