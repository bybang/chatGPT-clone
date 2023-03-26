"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  Image;
  return (
    <div className="flex flex-col h-screen bg-[#11A37F] items-center justify-center text-center">
      <Image
        src="https://uploads-ssl.webflow.com/621396eaae0610d2e24c450e/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-3xl text-white font-bold animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
