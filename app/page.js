import Image from "next/image";
import Card from "./components/card";
import Link from "next/link";
export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/farmbg.png)',
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh', // Adjust as needed
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    
};
  return (
    <>
    <div className='bg-red-100 flex flex-col items-center gap-5 justify-around '  style={backgroundImageStyle}>
        <div className="font-semibold flex items-center text-2xl text-white">&quot;Connecting &nbsp; <div className="font-extrabold text-4xl"> Farmers </div> &nbsp;  to Develop  &nbsp; <div className="font-extrabold text-4xl"> Bharat&quot;</div></div>
        <div className="font-extrabold text-7xl text-white">Kaviya FarmNet</div>
        <Link href={"/tenant"}> <button className="text-white font-semibold bg-green-600 rounded-lg py-3 px-5">Let&apos;s Connect&gt;</button></Link>
    </div>
    <div className="h-1 bg-orange-600"></div>
    <div className="my-9 flex flex-col items-center">
    <div className="text-center text-5xl">Latest News</div>
    <Card/><Link href={'/news'}><button className="text-white font-semibold bg-green-600 rounded-lg py-3 px-5">Read More &gt; </button></Link>
   
     </div>
    </>
  );
}
