import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    let timeout = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops..</h1>
      <h2>This page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
