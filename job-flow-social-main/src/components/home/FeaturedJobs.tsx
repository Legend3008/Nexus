
import { JobCard } from "@/components/jobs/JobCard";

// Mock data for featured jobs
const featuredJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechFlow Inc.",
    companyLogo: "/placeholder.svg",
    location: "New York, NY",
    locationType: "Remote" as const,
    salaryRange: "$120K - $150K",
    postedAt: "Posted 2 days ago",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "Innovate Solutions",
    companyLogo: "/placeholder.svg",
    location: "San Francisco, CA",
    locationType: "Hybrid" as const,
    salaryRange: "$130K - $160K",
    postedAt: "Posted 3 days ago",
    tags: ["Node.js", "React", "MongoDB", "Express", "AWS"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignHub",
    companyLogo: "/placeholder.svg",
    location: "Austin, TX",
    locationType: "On-site" as const,
    salaryRange: "$90K - $120K",
    postedAt: "Posted 1 week ago",
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    isFeatured: true,
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-12 bg-jobNeutral-100">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-jobNeutral-900">Featured Jobs</h2>
          <a 
            href="/jobs" 
            className="text-jobBlue-600 hover:text-jobBlue-700 text-sm font-medium"
          >
            View all jobs →
          </a>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
