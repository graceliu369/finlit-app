import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold text-center sm:text-left">
          Welcome to FinLit!
        </h1>
        <p className="text-center sm:text-left text-sm">
          Discover your financial personality and take control of your finances.
        </p>
      </main>
    </div>
  );
}
