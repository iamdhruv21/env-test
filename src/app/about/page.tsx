import { Config } from "@/lib/config";
import Link from "next/link";

export default function About() {
  const appName = Config.get("NEXT_PUBLIC_APP_NAME") || "Default App Name";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">About {appName}</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
      <div className="mt-8 p-4 border rounded shadow">
        <p>This is the About page for <span className="text-emerald-600 text-2xl font-bold">{appName}</span>. We build great things.</p>
      </div>
    </main>
  );
}
