export const PricingSection = () => {
    return (
        <section className="bg-gradient-to-r from-primary-950 to-blue-500 rounded-xl">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Cenník</h2>
                    <p className="mb-5 font-light text-white sm:text-xl ">Toto sú naše odporúčané balíky hodín pre dosiahnutie plynulejšej nemčiny</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Mini</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Zlepšite si Vašu hovorenú nemčinu už v priebehu prvého mesiaca s našim najmenším balíkom hodín.</p>
                        <div className="flex justify-center items-baseline my-8 flex-col">
                            <span className="mr-2 text-5xl font-extrabold">120 €</span>
                            <span className="text-gray-500 dark:text-gray-400">8 hodín</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaný Plán Učenia</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>1 na 1 Konverzačné Hodiny</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaná Spätná Väzba</span>
                            </li>

                        </ul>
                        <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Dohodnúť prvú hodinu</a>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-white-100 border-4 shadow ">
                        <h3 className="mb-4 text-2xl font-semibold">Plus</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">Ak to myslíte s nemčinou vážne a chcete napredovať, tak naši študenti radi berú tento počet hodín.</p>
                        <div className="flex justify-center items-baseline my-8 flex-col">
                            <span className="mr-2 text-5xl font-extrabold">225 €</span>
                            <span className="text-gray-500 ">15 hodín ( + 2 hod grátis )</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaný Plán Učenia</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>1 na 1 Konverzačné Hodiny</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaná Spätná Väzba</span>
                            </li>

                        </ul>
                        <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Dohodnúť prvú hodinu</a>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Plánujete žiť v nemecky hovoriacej krajine, pôsobiť v nemeckej firme alebo sa pripravujete na certifikát z Nemčiny&nbsp;?  </p>
                        <div className="flex justify-center items-baseline my-8 flex-col">
                            <span className="mr-2 text-5xl font-extrabold">450 €</span>
                            <span className="text-gray-500 dark:text-gray-400">30 hodín ( + 5 hod grátis )</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaný Plán Učenia</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>1 na 1 Konverzačné Hodiny</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaná Spätná Väzba</span>
                            </li>

                        </ul>
                        <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Dohdnúť prvú hodinu</a>
                    </div>

                    <div></div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Jednohodinovka</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Nehovorili ste dlho po nemecky a chcete si oprášiť Vašu nemčinu ? <br />Alebo sa chcete pripraviť na ústnu skúšku z nemčiny ? <br /> Pre Vás tu máme jednohodinovku. </p>
                        <div className="flex justify-center items-baseline my-8 flex-col">
                            <span className="mr-2 text-5xl font-extrabold">18 €</span>
                            <span className="text-gray-500 dark:text-gray-400">1 hodina</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaný Plán Učenia</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>1 na 1 Konverzačné Hodiny</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individualizovaná Spätná Väzba</span>
                            </li>

                        </ul>
                        <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Dohodnúť prvú hodinu</a>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}