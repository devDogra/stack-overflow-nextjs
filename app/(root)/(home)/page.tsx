import ThemeConsumer from "@/components/ThemeConsumer";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="h1-bold">Hello World</h1>
      <ThemeConsumer></ThemeConsumer>
    </div>
  );
}
