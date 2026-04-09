import config from "@/lib/config";
import Link from "next/link";

export default function Contact() {
  const appName = config.get("NEXT_PUBLIC_APP_NAME");
  const contactEmail = config.get("NEXT_PUBLIC_CONTACT_EMAIL");
  const supportPhone = config.get("NEXT_PUBLIC_SUPPORT_PHONE");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Contact <span className="text-emerald-600 text-2xl font-bold">{appName}</span></h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-500 hover:underline">About</Link>
        <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
      <div className="mt-8 p-4 border rounded shadow space-y-4">
        <p>Feel free to reach out to us at:</p>
        <p><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">{contactEmail}</a></p>
        <p><strong>Phone:</strong> {supportPhone}</p>
      </div>
    </main>
  );
}
