import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import WhyWeAreBetter from '@/components/WhyWeAreBetter';
import StudentExperience from '@/components/StudentExperience';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhyWeAreBetter />
      <StudentExperience />
      <Testimonials />
      <CTA />
    </>
  );
}
