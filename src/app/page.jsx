import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full min-h-min h-screen">
      <header>
        <Link href='/dashboard'> Dashoboard</Link>
      </header>
    </section>
  );
}
