import Head from "next/head";
import { Hero, Layout } from "@/components";
import { Interested } from "@/components/landing-page";
import DevAndPrograms from "@/components/membership/DevAndPrograms";

export default function Home() {
  return (
    <>
      <Head>
        <title>BPMI | Membership</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"memHero"} title={"Membership"} />
          <DevAndPrograms />
          <div
            className={`bg-[url(/twoWomen.jpg)] bg-no-repeat bg-cover flex justify-center items-center p-4 md:p-20 z-20 relative`}
          >
            <Interested />
          </div>
        </Layout>
      </main>
    </>
  );
}
