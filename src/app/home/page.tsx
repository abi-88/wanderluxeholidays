import HeaderImageSlider from "@/components/common/HeaderImageSlider"
import AboutSection from "@/components/Sections/AboutSection"
import Explore from "@/components/Sections/ExploreSection"
import FormSection from "@/components/Sections/FormSection"
import Services from "@/components/Sections/Services"
import WhatsNew from "@/components/Sections/WhatsNew"
import WhyChooseUs from "@/components/Sections/WhyChooseUs"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between x-hidden">
            <HeaderImageSlider />
            <AboutSection />
            <WhatsNew />
            <WhyChooseUs />
            <Explore />
            <Services />
            <FormSection />
        </main>
    )
}