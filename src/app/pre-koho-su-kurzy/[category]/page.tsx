import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import { categories, getCategoryById } from "../categories";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

type CategoryProps = {
    params: {
        category: string;
    }
}

export async function generateStaticParams() {
    return [categories.map((category) => ({ params: { category: category.id } }))];
}

export async function generateMetadata(
    { params }: CategoryProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.category

    // fetch data
    const item = getCategoryById(id);

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL ?? "https://www.nemecky-jazyk-online.sk/"),
        title: item?.title ?? "Plynule nemecky",
        openGraph: {
            images: [`/images/categories/${id}.jpg`, ...previousImages],
        },
    }
}

export default function Page({ params }: CategoryProps) {
    const category = params.category;
    const item = getCategoryById(category);
    if (!item) {
        return <div>404</div>
    }

    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased text-gray-800 container mx-auto">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue flex flex-col gap-2 ">
                        <header className="mb-4 lg:mb-6 not-format">
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{item.title}</h1>
                        </header>
                        {/* <figure className="mx-auto p-0">                    <Image src={`/images/categories/${item.id}.jpg`} className="mb-5 rounded-lg w-full" alt={item.title} width={400} height={400} />
                        </figure> */}
                        <p className="lead">{item.description}</p>

                        <div className="my-10">
                            <h2 className="font-bold text-lg">Ako prebiehajú kurzy ? </h2>
                            <p>
                                Svojich klientov učím online prostredníctvom aplikácie Zoom a na každej hodine sa snažím vytvárať príjemnú atmosféru, v ktorej sa klienti cítia pohodlne a zároveň sa veľa naučia. Verím, že vám dokážem pomôcť dosiahnuť plynulú komunikáciu v cudzom jazyku už po niekoľkých hodinách. Pridajte sa medzi nás čo najskôr a začnite svoju cestu k jazykovému úspechu!
                            </p>
                        </div>
                    </article>
                </div>
                <div className="max-w-2xl mx-auto my-20">
                    <ReviewsSection />
                </div>


                <ContactForm />
            </main>
        </>
    )
}




