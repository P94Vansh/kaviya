"use client"
import React from 'react'
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";

const Page = () => {
    const reloadPage = () => {
        window.location.reload()
    }
    return (
        <div>

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
            <div className='flex gap-6 flex-wrap justify-center mb-10'>

                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Farm services Act, 2020</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">The Act provides a framework for written agreements between farmers and buyers, including agribusiness firms, processors, wholesalers, exporters, or large retailers for the sale of future farming produce at a pre-agreed price.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Farming Agreement Final Act</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">The Act allows farmers to enter into written agreements with buyers before the sowing season, detailing terms like the sale price, quality standards, and delivery schedules.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Dispute Resolution Rules Gazette notification -Hindi & English</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">The Dispute Resolution Rules under the Farmers (Empowerment and Protection) Agreement on Price Assurance and Farm Services Act, 2020 provide the framework for resolving disputes between farmers and buyers who enter into farming agreements</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div> Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">Provides income support to all landholding farmer families in the country to supplement their financial needs.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div> Pradhan Mantri Fasal Bima Yojana (PMFBY)</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">Provides insurance coverage and financial support to farmers in case of crop failure due to natural calamities, pests, and diseases.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Kisan Credit Card (KCC) Scheme</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">Provides insurance coverage and financial support to farmers in case of crop failure due to natural calamities, pests, and diseases.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>National Agriculture Market (e-NAM)</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">To create a unified national market for agricultural commodities by integrating existing APMC markets through an online trading platform.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Soil Health Card Scheme</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">Provides soil health cards to farmers which carry crop-wise recommendations of nutrients and fertilizers required for the individual farms.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-red-200 rounded-lg  dark:border-black shadow-xl">
                    <div className='flex justify-between'> <div>Rashtriya Krishi Vikas Yojana (RKVY)</div>
                        <Image src={"/wheat.png"} width={50} height={50} /> </div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-black dark:text-black">Aims to increase public investment in agriculture and allied sectors.</p>
                    <a href="#" className="inline-flex font-medium items-center text-red-600 hover:underline">
                        Read More
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>

            </div>
            <div className='flex justify-center items-center mb-10'> <button onClick={() => { reloadPage(); }} className="text-white font-semibold bg-green-600 rounded-lg py-3 flex items-center justify-center gap-2 px-5">Read More <span><IoIosArrowDown /></span> </button></div>

        </div>
    )
}

export default Page
