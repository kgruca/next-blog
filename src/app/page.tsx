import React from "react";
import Link from "next/link";

const Home = () => (
  <>
    <h1>Blog Home</h1>
    <h2>
      Read <Link href="/posts/first-post">this page</Link>!
    </h2>
  </>
);

export default Home;
