import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-full flex h-screen items-center justify-center mt-24 py-72 flex-col gap-8">
      <h1 className="text-5xl">Page not Found</h1>
      <div className="items-center flex flex-col">
        <p className="text-xl">This page cannot be found.</p>
        <p className="text-xl">
          Double check the URL or head back{" "}
          <Link href="/" className="text-accent_primary underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
