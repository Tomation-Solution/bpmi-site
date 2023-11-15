import Image from "next/image";
import React from "react";
import PLink from "../PLink";
import styles from "../style";

const Gallery = () => {
  return (
    <div className={`flex flex-col justify-center  w-full ${styles.paddingY}`}>
      <h3 className={` text-center text-primary ${styles.heading3} mb-10`}>
        GALLERY
      </h3>
      <div className="flex flex-col xl:flex-row justify-between md:justify-around ">
        <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3  w-full ">
          <Image
            src={"/g (1).JPG"}
            alt=""
            width={500}
            height={200}
            className="col-span-1 row-span-2 "
          />

          {/* <Image
            src={"/g (4).JPG"}
            alt=""
            width={500}
            height={200}
            className="col-span-1"
          /> */}
          <Image
            src={"/g (6).JPG"}
            alt=""
            width={500}
            height={200}
            className="col-span-1 row-span-2 "
          />
<Image
            src={"/g (5).JPG"}
            alt=""
            width={500}
            height={200}
            className="col-span-1 row-span-2 "
          />
<Image
            src={"/boss.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1 row-span-2 "
          />

          <Image
            src={"/gal-4.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1"
          />
                    <Image
            src={"/gal-8.jpg"}
            alt=""
            width={500}
            height={200}
            className="col-span-1"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <PLink
          text="Learn More"
          href="gallery"
          styles="bg-primary text-white mt-8 p-4 "
        />
      </div>
    </div>
  );
};

export default Gallery;
