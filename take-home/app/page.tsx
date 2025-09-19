import Link from "next/link";

export default function Home() {
  return (
    <nav className="text-center">
      <h1>Welcome to my take home!</h1>
      <div><Link className="underline" href={"/insurance"}>Insurance Landing Page</Link></div>
      <div><Link className="underline" href={"/gummies"}>Gummies Landing Page</Link></div>
    </nav>
  );
}
