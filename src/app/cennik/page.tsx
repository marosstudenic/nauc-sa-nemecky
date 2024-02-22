import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TestLessonSection } from "@/components/TestLessonSection";

const Page = () => {
    return (
        <main className="container mx-auto">
            <CTASection />
            <PricingSection />
            <TestLessonSection />
            <ReviewsSection />
            <ContactForm />
        </main>

    )


}

export default Page;
