import Head from "next/head";
import React from "react";
import Animated from "./components/Animated";

const about = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Animated text="Passion Fuels Purpose!" />
      </main>
    </>
  );
};

export default about;
