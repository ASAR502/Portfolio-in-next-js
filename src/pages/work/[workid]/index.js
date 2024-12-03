import Head from "next/head";
import { useRouter } from 'next/router';
import Inner from "@/components/Layout/Inner";
import WorkDetails from "./_components";

export default function Page({ params }) {
  // console.log(params?.workid)
  const router = useRouter();
  const { workid } = router.query
  return (
    <>
      <Head>
        <title> {workid} || Aaquib Essien</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/profile_6.png"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
      </Head>
      <Inner>
        <WorkDetails />
      </Inner>
    </>
  );
}