import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { CircularText } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg relative">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link
            href="https://devreaming.com"
            className=" underline underline-offset-2"
            target={"_blank"}
          >
            CodeBucks
          </Link>
        </div>
        <Link
          href="https://devreaming.com"
          target={"_blank"}
          className=" underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>

    </footer>
  );
};

export default Footer;
