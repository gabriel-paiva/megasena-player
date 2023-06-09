import { Sidebar } from "@/components";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="bg-gray-50 flex flex-row h-screen w-screen">
          <Sidebar />
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
