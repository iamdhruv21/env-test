import config from "@/lib/config";
import Link from "next/link";

export default function Home() {
  const appName = config.get("NEXT_PUBLIC_APP_NAME");
  const amazon_secret = config.get("AMAZON_SECRET")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to <span className="text-emerald-600 text-5xl font-bold">{appName}</span></h1>
        <h1 className="text-rose-600 text-4xl font-bold">{amazon_secret}</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
      <div className="mt-8 p-4 border rounded shadow">
        <p>This is the Home page. The App Name is fetched from environment variables.</p>
      </div>
    </main>
  );
}
