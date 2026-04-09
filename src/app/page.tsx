import Client from "@/Component/Client"
import Server from "@/Component/Server"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Client />
      <Server />
    </main>
  );
}
