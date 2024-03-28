"use client"
import Image from "next/image";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
export default function Home() {
  const [clicks, setClick] = useState(50);
  const router = useRouter();
  const [clickMessage, setClickMessage] = useState("");
  const handleClick = () => {
    if (clicks == 1) {
      router.push("/page1")
    } else {
      setClick(clicks - 1)
      setClickMessage(`Please click ${clicks} more times to go to the next page.`)
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-7xl">FATIGUE</h1>
      <p className="text-2xl w-1/2 p-6">
        Fatigue is something each of us deal with,
        but we all deal with it in different ways and 
        in different circumstances, perhaps during this photo 
        essay you might even see how you deal with it. 
        This photo essay attempts to show a few of the different
        environments we may experience fatigue exhaustion,
        and how it can come in different forms. There were many different
        examples of someone being exhasted, but even
        though they came from completely different activities, their actions looked
        very similar.
      </p>
      <button className="text-2xl p-2 border-lg rounded-lg bg-teal-600" onClick={handleClick}>Click me to go to the next page</button>
      <div>{clickMessage}</div>
    </main>
  );
}
