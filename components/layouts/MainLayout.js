import Head from "next/head";
import Header from "@/components/common/Header";

const Layout = ({ title, description, children, ...rest }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full " {...rest}>
        <Header />
        <div className="my-0 w-full ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
