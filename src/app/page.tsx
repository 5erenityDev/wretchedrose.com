import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
            aria-hidden
            src="/images/site/WretchedRoseLogo.png"
            alt="Wretched Rose"
            style={{ width: '70%', height: 'auto' , display: 'block', margin: 'auto'}}
            width={1024}
            height={512}
        />
        <h2 className="text-[300%] py-10">Please, Come Sit! We have so much to discuss!</h2>
        <h3 className="text-[100%]">Releasing 2025 or 2026 or 2027 or 2028 or 2029 or specifically 2034</h3>
      </main>
    </div>
  );
}
