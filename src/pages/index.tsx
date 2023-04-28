import Head from "next/head";
import { Herofn, Layout, styles } from "@/components";
import {
  About,
  AboutUs,
  GetMore,
  MemBenefits,
  Interested,
  Advocacy,
  Gallery,
} from "@/components/landing-page";
import { links } from "@/constants/landingPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>BPMI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Herofn
            img={"g"}
            title={
              "Promoting the practice of Business Process Management in Nigeria"
            }
          />
          <ul
            className={`list-none flex flex-col md:flex-row justify-between  md:items-center flex-1 ${styles.paddingX} ${styles.paddingY}`}
          >
            {links.map((link) => (
              <li
                key={link.id}
                className={`font-play  cursor-pointer font-bold text-[17px] md:text-[25px] p-2  text-link whitespace-nowrap 

                `}
              >
                <a
                  href={`${link.id}`}
                  className={
                    link.title === "Sign in"
                      ? "pl-6 border-l-[3px] border-primary"
                      : ""
                  }
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}
          >
            <AboutUs />
          </div>
          <div className={`flex flex-col md:flex-row ${styles.paddingX} `}>
            <MemBenefits />
          </div>
          <div
            className={`flex flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}
          >
            <Advocacy />
          </div>
          {/* <div className="relative flex flex-col bg-stone-900 h-[600px] items-center">
            <Image
              src={`/curve1.jpg`}
              className="w-[100%]"
              alt=""
              height={500}
              width={1000}
            />
            <div className=""></div>
            <Image
              src={`/curve2.jpg`}
              className="w-[100%] "
              alt=""
              height={500}
              width={1000}
            />
          </div> */}
          <div className={`${styles.paddingX}`}>
            <GetMore />
          </div>

          <div
            className={`bg-[url(/mem.jpg)] bg-no-repeat bg-cover flex justify-center items-center p-4 md:p-20 z-20 relative mb-20`}
          >
            <Interested />
          </div>

          <div className={`${styles.paddingX}`}>
            <div className=" flex justify-center z-20">
              <About />
            </div>

            <Gallery />
          </div>
        </Layout>
      </main>
    </>
  );
}
