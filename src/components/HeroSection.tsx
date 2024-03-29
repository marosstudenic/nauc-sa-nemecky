import { navigation } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
    return (<section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 gap-2">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-900">Rozprávaj po nemecky plynule</h1>
                <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-gray-900"> Konverzačné kurzy cez Zoom</h2>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-700">Zlepši si svoju hovorenú nemčinu z pohodlia vášho domova. Interaktívne Zoom kurzy, ktoré ťa priblížia k plynulosti. Hodiny si organizuje podla seba a svojho volného času.</p>
                <div className="flex flex-col gap-2">
                    <Link href={navigation.DOHODNUT_PRVU_HODINU} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 w-full">
                        Dohodni si skúšobnú hodinu
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <Link href={navigation.CENNIK} className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-gray-900">
                        Prezri si ponuku kurzov
                    </Link>
                </div>

            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                <Image src="/images/hodiny-nemciny.jpg" alt="mockup" width="400" height="200" className="object-cover rounded-xl" />
            </div>
        </div>
    </section>
    )
};
