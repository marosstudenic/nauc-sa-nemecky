"use client";
import { sendForm } from "@/app/actions/sendForm"
import { useState, useOptimistic } from "react";


export const ContactForm = () => {

    const [sended, setSended] = useState(false);
    const [sending, setSending] = useState(false);


    const [optimisticSended, setOptimisticSended] = useOptimistic(
        sended,
        (state, newMessage) => true,
    );

    const handleFormSubmit = async (formData: FormData) => {
        try {
            setSending(true);
            setOptimisticSended(true);
            await sendForm(formData);
            setSended(true);
            console.log("Form submitted successfully");
            setSending(false);
        } catch (error) {

        }
    }


    return (
        <section className="bg-white">
            {optimisticSended &&
                <div className="my-20 bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Vaša správa bola úspešne odoslaná</p>
                    <p>Ďakujem za kontaktovanie. Čoskoro sa Vám ozvem</p>
                </div>
                ||
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Napíšte mi a začnite plynule hovoriť po nemecky</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Po kontakte dohodneme prvú hodinu, kde nastavíme plán výučby a časový harmonogram a komunikáciu</p>
                    <form className="space-y-8" action={handleFormSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Váš email</label>
                            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Váše telefónne číslo</label>
                            <input type="tel" id="phone" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">O ktorý balíček hodín by ste mali záujem ? </label>
                            <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Chcem vyskúšať skúšobnú hodinu, lebo za nu nič nedám a zistím, či mi sedí prístup vyučovania" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Vaša aktuálna skúsenosť s nemčinou + otázky</label>
                            <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-950 sm:w-fit ">{!sending ? "Odoslať správu" : "Odosielam..."}</button>
                    </form>
                </div>
            }

        </section>

    )
}