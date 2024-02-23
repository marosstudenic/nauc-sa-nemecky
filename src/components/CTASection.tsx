import { navigation } from "@/constants/navigation"
import Link from "next/link"

export const CTASection = () => {
    return (
        <section className="bg-white my-8">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 ">Ste pripravení hovoriť plynule po nemecky ? </h2>
                    <p className="mb-6 font-light text-gray-500  md:text-lg">Dohodnite si prvú hodinu a podla nej sa rozhodnite kolko hodínový balík si zoberiete.</p>
                    <Link href={navigation.DOHODNUT_PRVU_HODINU} className="text-white bg-primary-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Dohodnúť prvú hodinu</Link>
                </div>
            </div>
        </section>
    )
}