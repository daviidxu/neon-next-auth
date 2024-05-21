"use client";
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Dashboard;
