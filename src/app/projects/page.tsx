import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Animated from "../components/Animated";

const page = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
            {/* <Animated text="" /> */}
        </Layout>
      </main>
    </>
  );
};

export default page;
