"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log("Error page");
  }, [error]);

  return (
    <div className="p-4 bg-red-100 text-red-700">
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
