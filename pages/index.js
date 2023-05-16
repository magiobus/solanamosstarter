import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="container max-w-7xl w-full flex flex-col justify-center items-center">
        <iframe
          src="https://giphy.com/embed/rgUAbFsBqSLxouZcPL"
          width="480"
          height="480"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <h1 className="text-4xl font-bold my-4">Solanamos Starter 🙌 !</h1>
      </div>
    </div>
  );
}
