import Head from 'next/head';
export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>NextJS Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      </Head>

      <div className="content">
        {children}
      </div>
    </div>
  );
};
