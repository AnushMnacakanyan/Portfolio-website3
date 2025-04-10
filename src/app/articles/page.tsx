"use client";
import Head from "next/head";
import React, { useRef } from "react";
import Layout from "../components/Layout";
import Animated from "../components/Animated";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

interface IFeatured {
  img: string;
  title: string;
  time: string;
  summary: string;
  link: string;
}

interface IArticles {
  img: string;
  title: string;
  date: string;
  link: string;
}

interface IMovingImg {
  img: string;
  title: string;
  link: string;
}
const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }: IMovingImg) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement | null>(null); // ճիշտ տիպ

  function handleMouse(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  }

  function handleMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        width={700}
        height={400}
      />
    </Link>
  );
};

const Articles = ({ img, title, date, link }: IArticles) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }: IFeatured) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl " />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width={700}
          height={400}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <Animated
            text="Words Can Change The World!"
            className="mb-16"
          ></Animated>
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img="/images/articles/pagination component in reactjs.jpg"
            />

            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience."
              time=" 10 min read"
              link="/"
              img="/images/articles/create loading screen in react js.jpg"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16">
            All Articles
          </h2>
          <ul>
            <Articles
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22,2023"
              link="/"
              img="/images/articles/form validation in reactjs using custom react hook.png"
            />
            <Articles
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 22,2023"
              link="/"
              img="/images/articles/smooth scrolling in reactjs.png"
            />
            <Articles
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="March 22,2023"
              link="/"
              img="/images/articles/create modal component in react using react portals.png"
            />
            <Articles
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 22,2023"
              link="/"
              img="/images/articles/todo list app built using react redux and framer motion.png"
            />
            <Articles
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="March 22,2023"
              link="/"
              img="/images/articles/What is Redux with easy explanation.png"
            />
            <Articles
              title="What Is Higher Order Component (Hoc) In React?"
              date="March 22,2023"
              link="/"
              img="/images/articles/What is higher order component in React.jpg"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
