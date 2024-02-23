import Image from "next/image";
import { categories } from "./categories";
import { navigation } from "@/constants/navigation";
import Link from "next/link";

const Item = ({ id, title, description }: {
    title: string,
    description: string,
    id: string
}) => {
    return (
        <Link href={`${navigation.PRE_KOHO_SU_KURZY}/${id}`}>
            <article className="max-w-xs cursor-pointer shadow-md rounded-lg">
                <Image src={`/images/categories/${id}.jpg`} className="mb-5 rounded-lg" alt={title} width={400} height={400} />
                <div className="p-4">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 ">
                        {title}
                    </h2>
                    <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
                    <Link href={`${navigation.PRE_KOHO_SU_KURZY}/${id}`} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                        Viac informácií
                    </Link>
                </div>


            </article>
        </Link >
    )
}



export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 overflow-hidden gap-4 container px-4 mt-10 mx-auto">
            <h1 className="text-gray-800 font-extrabold text-2xl lg:text-4xl text-center">Pre koho sú určené online kurzy</h1>

            <aside aria-label="Related articles" className="py-8 lg:py-24 ">
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Item id={category.id} key={category.title} title={category.title} description={category.description} />
                        ))}
                    </div>
                </div>
            </aside>

        </main >
    );
}