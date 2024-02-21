"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./ui/loadingSpinner";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    router.push("/login");
  }, []);

  if (loading) {
    return <LoadingSpinner type="page" />;
  }

  return <div></div>;
}
