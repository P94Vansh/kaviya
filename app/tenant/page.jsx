import { ProfileCard } from "../farmer/profile/page";
import Footer from "../components/footer";
import NavBar from "../components/Navbar";
import style from "./page.module.css"
import { IoIosArrowDown } from "react-icons/io";

export default function Page() {
  return (
    <>
      <form className="max-w-md mx-auto my-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-red-50 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>

          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-red-900 border border-red-300 rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-white dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Mockups, Logos..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
        </div>
      </form>
      <Farmers />
      <div className="text-center mb-10 flex justify-center">
      <button className="text-white flex justify-center font-semibold  items-center bg-green-600 rounded-lg py-3 px-5">Explore More &nbsp;&nbsp;<IoIosArrowDown /> <span style={{transform: "rotate(90deg)"}}></span></button>
      </div>
      {/* </div> */}
      {/* <Footer/> */}
    </>
  );
}

function Farmers() {
  return (
    <div className="" id={style.farmers}>
      {farmers.map(({ name, address, phone, email }, i) => (
        <ProfileCard
          key={i}
          name={name}
          address={address}
          phone={phone}
          email={email}
          callMe
        />
      ))}
      {/* <ProfileCard name={name}/> */}
    </div>
  );
}


// export function ProfileCard({ name, address, phone, email }) {
//   return (
//     <div className={style["profile-card"]}>
//       {/* <div className={style['banner']}></div> */}
//       <div className={style["details"]}>
//         <div className={style["banner"]}>
//           <div className={style["profile-pic"]}>
//             <img className={style["profile-img"]} src="/pics/farmer2.jpg" />
//             <div className={style["profile-add-btn"]}>➕</div>
//           </div>
//           <div className={style["banner-shape"]}></div>
//         </div>

//         <div className={style["name"]}>{name}</div>
//         <div className={style["address"]}>📌 {address}</div>
//         <div className={style["phone"]}>📞 {phone}</div>
//         <div className={style["email"]}>📧 {email}</div>
//       </div>
//     </div>
//   );
// }

const farmers = [
  {
    name: "RAMPAL SINGH",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
  {
    name: "Anurag Gogoi",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
  {
    name: "Abhay Bisht",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
  {
    name: "Vansh",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
  {
    name: "Anshul Pundir",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
  {
    name: "Yogesh",
    address: "Premnagar, Dehradun, Uttarakhand",
    phone: "+919876054321",
    email: "singhrampal1980@gmail.com",
  },
];
