"use client";
import { navigation } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const MobileLink = ({ link, label, toggleMenu }: { link: string, label: string, toggleMenu: any }) => {
    const path = usePathname();

    const current = path === link;
    return (
        <Link href={link} onClick={() => toggleMenu()} className={`block py-2 pr-4 pl-3 text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-900 lg:p-0 ${current ? "bg-primary-700 rounded" : "border-b border-gray-100"}`} >{label}</Link>
    )
}

const DesktopLink = ({ link, label }: { link: string, label: string }) => {
    const path = usePathname();

    const current = path === link;
    return (
        <Link href={link} className={`text-white hover:text-gray-300 dark:text-white dark:hover:text-gray-300 `}>{label}</Link>
    )
}


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="bg-primary-950">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.svg" className="h-6 sm:h-9" alt="Rozprávaj plynule nemecky" width="50" height="80" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Plynule nemecky</span>
                    </Link>

                    <ul className="gap-4 hidden lg:flex">
                        <li>
                            <DesktopLink link={navigation.HOME} label="Kurz nemčiny" />
                        </li>
                        <li>
                            <DesktopLink link={navigation.CENNIK} label="Cenník" />
                        </li>
                        <li>
                            <DesktopLink link={navigation.DOHODNUT_PRVU_HODINU} label="Dohodnúť prvú hodinu" />
                        </li>
                        <li>
                            <DesktopLink link={navigation.PRE_KOHO_SU_KURZY} label="Pre koho sú kurzy určené" />
                        </li>
                    </ul>
                    <Link href={navigation.DOHODNUT_PRVU_HODINU} className="hidden lg:block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none dark:focus:ring-primary-800">Dohodnúť prvú hodinu</Link>

                    <div className="flex items-center lg:order-2 lg:hidden">
                        {/* <Link href={navigation.DOHODNUT_PRVU_HODINU} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none dark:focus:ring-primary-800">Dohodnúť prvú hodinu</Link> */}
                        <button onClick={() => toggleMenu()} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:bg-gray-100 focus:outline-none dark:text-gray-400 " aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`lg:hidden justify-between items-center w-full lg:w-auto lg:order-1 transition-[height] overflow-hidden ${isMenuOpen ? "h-auto" : "h-0"}`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <MobileLink link={navigation.HOME} label="Kurz nemčiny" toggleMenu={toggleMenu} />
                            </li>
                            <li>
                                <MobileLink link={navigation.CENNIK} label="Cenník" toggleMenu={toggleMenu} />
                            </li>
                            <li>
                                <MobileLink link={navigation.DOHODNUT_PRVU_HODINU} label="Dohodnúť prvú hodinu" toggleMenu={toggleMenu} />
                            </li>
                            <li>
                                <MobileLink link={navigation.PRE_KOHO_SU_KURZY} label="Pre koho sú kurzy určené" toggleMenu={toggleMenu} />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>)

}