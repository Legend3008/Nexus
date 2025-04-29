
import { useState } from "react";
import { JobCard, JobCardProps } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, Filter, MapPin, Search, Sliders } from "lucide-react";

// Mock job data
const mockJobs: JobCardProps[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechFlow Inc.",
    companyLogo: "/placeholder.svg",
    location: "New York, NY",
    locationType: "Remote",
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
    locationType: "Hybrid",
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
    locationType: "On-site",
    salaryRange: "$90K - $120K",
    postedAt: "Posted 1 week ago",
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    isFeatured: false,
  },
  {
    id: "4",
    title: "Product Manager",
    company: "ProductForge",
    companyLogo: "/placeholder.svg",
    location: "Chicago, IL",
    locationType: "Hybrid",
    salaryRange: "$110K - $140K",
    postedAt: "Posted 5 days ago",
    tags: ["Agile", "Scrum", "Product Strategy", "User Stories", "Roadmapping"],
    isFeatured: false,
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataIntel",
    companyLogo: "/placeholder.svg",
    location: "Boston, MA",
    locationType: "Remote",
    salaryRange: "$115K - $145K",
    postedAt: "Posted 1 week ago",
    tags: ["Python", "R", "TensorFlow", "Machine Learning", "SQL"],
    isFeatured: false,
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudScale",
    companyLogo: "/placeholder.svg",
    location: "Seattle, WA",
    locationType: "Remote",
    salaryRange: "$125K - $155K",
    postedAt: "Posted 4 days ago",
    tags: ["Kubernetes", "Docker", "AWS", "CI/CD", "Terraform"],
    isFeatured: false,
  },
  {
    id: "7",
    title: "Marketing Specialist",
    company: "GrowthHub",
    companyLogo: "/placeholder.svg",
    location: "Los Angeles, CA",
    locationType: "On-site",
    salaryRange: "$80K - $100K",
    postedAt: "Posted 2 weeks ago",
    tags: ["Digital Marketing", "SEO", "Content Strategy", "Social Media", "Analytics"],
    isFeatured: false,
  },
  {
    id: "8",
    title: "Backend Developer",
    company: "ServerPro",
    companyLogo: "/placeholder.svg",
    location: "Denver, CO",
    locationType: "Hybrid",
    salaryRange: "$110K - $140K",
    postedAt: "Posted 3 days ago",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST API"],
    isFeatured: false,
  },
];

const Jobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [jobs] = useState<JobCardProps[]>(mockJobs);
  
  return (
    <div className="bg-jobNeutral-100 min-h-screen pt-8 pb-16">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-jobNeutral-900">Browse Jobs</h1>
          <p className="mt-2 text-jobNeutral-600">Find your next career opportunity</p>
        </div>
        
        {/* Search bar and filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jobNeutral-500" />
              <input
                type="text"
                placeholder="Job title, skills, or keywords"
                className="w-full h-12 pl-10 pr-4 py-3 border border-jobNeutral-300 rounded-lg focus:ring-2 focus:ring-jobBlue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jobNeutral-500" />
              <input
                type="text"
                placeholder="Location or remote"
                className="w-full h-12 pl-10 pr-4 py-3 border border-jobNeutral-300 rounded-lg focus:ring-2 focus:ring-jobBlue-500 focus:border-transparent"
              />
            </div>
            
            <Button className="h-12 px-8 lg:flex-shrink-0">
              <Search className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <Button
              variant="outline"
              className="text-jobNeutral-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            <span className="text-sm text-jobNeutral-600">
              Showing {jobs.length} jobs
            </span>
          </div>
          
          {isFilterOpen && (
            <div className="mt-4 grid md:grid-cols-4 gap-4 pt-4 border-t border-jobNeutral-200">
              <div>
                <h3 className="font-medium text-jobNeutral-900 mb-3">Job Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Full-time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Part-time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Contract</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Freelance</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-jobNeutral-900 mb-3">Experience Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Entry Level</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Mid Level</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Senior Level</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Director</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-jobNeutral-900 mb-3">Location Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Remote</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">Hybrid</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">On-site</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-jobNeutral-900 mb-3">Salary Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">$0 - $50K</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">$50K - $100K</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">$100K - $150K</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded mr-2" />
                    <span className="text-sm">$150K+</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Sort options */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-jobNeutral-500" />
            <span className="font-medium text-jobNeutral-800">All Jobs</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-jobNeutral-600">Sort by:</span>
            <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-jobNeutral-800 focus:outline-none focus:ring-2 focus:ring-jobBlue-500">
              <option value="relevance">Relevance</option>
              <option value="recent">Most Recent</option>
              <option value="salary-high">Salary (High to Low)</option>
              <option value="salary-low">Salary (Low to High)</option>
            </select>
            
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Sliders className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <nav className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="w-9 h-9 p-0" disabled>
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0 bg-jobBlue-50 text-jobBlue-600 border-jobBlue-200">1</Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">2</Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">3</Button>
            <span className="px-2 text-jobNeutral-500">...</span>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">10</Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0">
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
