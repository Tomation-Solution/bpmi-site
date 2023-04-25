import Head from "next/head";
import { Hero, Layout } from "@/components";
import { Interestedfn } from "@/components/landing-page";
import Service from "@/components/services";

export default function Events() {
  return (
    <>
      <Head>
        <title>BPMI | Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"womenwriting"} title={"Services"} />
          <Service />
          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}
