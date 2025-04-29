
import { Hero } from "@/components/home/Hero";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { JobCategories } from "@/components/home/JobCategories";
import { JobStats } from "@/components/home/JobStats";
import { TopCompanies } from "@/components/home/TopCompanies";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <JobStats />
      <FeaturedJobs />
      <JobCategories />
      <TopCompanies />
      <CallToAction />
    </div>
  );
};

export default Index;
