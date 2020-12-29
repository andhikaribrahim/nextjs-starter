import { Common as Layout } from '../components/Layouts';
import Head from 'next/head';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NextJS Starter</title>
      </Head>
      <div className="content">
        <h1 className="font-mono text-xl">NextJS Starter</h1>
      </div>
    </Layout>
  );
};
