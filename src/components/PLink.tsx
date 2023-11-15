import Link from "next/link";
import React, { ReactNode } from "react";

type LinkProp = {
  text: ReactNode;
  onClick?: () => void;
  styles: string;
  href: string;
};

const PLink = ({ href, styles, text,onClick }: LinkProp): JSX.Element => (
  <Link
    href={href}
    type="button"
    onClick={e=>{
      e.preventDefault()
      if(onClick){
        onClick()
        
      }
    }}
    className={`p-2 font-poppins transition ease-in-out   hover:scale-105  duration-300   hover:opacity-80   outline-none ${styles} whitespace-nowrap rounded-md`}
  >
    {text}
  </Link>
);

export default PLink;
