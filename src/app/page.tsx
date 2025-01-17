import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
      <main className="w-80 h-[31rem] bg-white rounded-xl flex flex-col justify-center items-center ">
        <div className=" my-4">
          <Image
            src="/image-qr-code.png"
            width={288}
            height={288}
            alt="QR Picture"
            className="rounded-xl"
          />
        </div>
        <div className="w-72 h-72 px-4 text-center">
          <h1 className="text-xl text-slate-900  font-bold mb-2">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}
