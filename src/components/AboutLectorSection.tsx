import Image from "next/image";

export const AboutLectorSection = () => {
    return (
        <section className=" rounded-xl w-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Tvoja budúca lektorka</h2>
                    {/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p> */}
                </div>
                <div className="flex gap-8 mb-6 lg:mb-16 justify-center p-4">
                    <div className="items-center rounded-lg shadow sm:flex bg-gradient-to-r from-primary-950 to-blue-500 max-w-5xl p-4">
                        <a href="#" className="">
                            <Image className="w-full rounded-lg sm:rounded-lg object-cover" src="/images/monika.png" alt="Bonnie Avatar" width="200" height="200" />
                        </a>
                        <div className="p-5  max-w-lg">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Monika</a>
                            </h3>
                            {/* <span className="text-gray-500 dark:text-gray-400"></span> */}
                            <p className="mt-3 mb-4 font-light text-white">Volám sa Monika a takmer 10 rokov som žila v nemecky hovoriacej krajine, odkiaľ mám bohaté skúsenosti s používaním slovíčok a fráz, najmä z bežného života a každodenných situácií. </p>
                            <p className=" mb-4 font-light text-white ">Okrem toho mám dlhoročné skúsenosti s výučbou nemeckého jazyka, pri ktorej sa u mojich klientov osvedčilo, že počas hodiny sa oplatí venovať hlavne konverzácii a opakovaniu už nadobudnutých znalostí z danej oblasti. </p>
                            <p className=" mb-4 font-light text-white">Týmto spôsobom klienti dokážu tieto znalosti ihneď aplikovať v praxi.</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100083108838362" className="text-white hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}