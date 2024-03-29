export const SocialProofSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 ">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">350+</dt>
                        <dd className="font-light text-gray-500 ">odučených hodín</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">20+</dt>
                        <dd className="font-light text-gray-500 ">aktívnych študentov</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4+</dt>
                        <dd className="font-light text-gray-500 ">rokov skúseností</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}