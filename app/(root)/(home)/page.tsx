import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="h1-bold">Hello World</h1>
    </div>
  );
}
