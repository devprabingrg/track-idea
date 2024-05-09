import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center  h-screen w-screen overflow-hidden">
        <Link href="/ideas/create"
          className="text-gray-800 text-lg text-center hover:underline">New Idea</Link>
    </main>
  );
}
