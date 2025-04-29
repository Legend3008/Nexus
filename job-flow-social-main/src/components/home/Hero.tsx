
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-jobBlue-800 to-jobBlue-900 text-white">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-jobBlue-500 blur-3xl" />
        <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] rounded-full bg-jobBlue-300 blur-3xl" />
        <div className="absolute -bottom-[10%] right-[20%] w-[35%] h-[35%] rounded-full bg-jobBlue-400 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Discover Your Next Career Opportunity
          </h1>
          
          <p className="mt-6 text-xl text-jobNeutral-200">
            Connect with top companies and find the perfect job that matches your skills and aspirations.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-jobNeutral-500" />
                <input
                  type="text"
                  placeholder="Job title, skills, or company"
                  className="h-12 w-full rounded-lg border-0 pl-10 pr-4 py-3 text-jobNeutral-900 bg-white focus:ring-2 focus:ring-jobBlue-500 focus:outline-none"
                />
              </div>
              
              <Button className="h-12 px-6 bg-jobBlue-500 hover:bg-jobBlue-600 text-white font-medium">
                Find Jobs
              </Button>
            </div>
            
            <div className="mt-4 flex items-center justify-center flex-wrap gap-2 text-sm">
              <span className="text-jobNeutral-300">Popular searches:</span>
              {["Remote", "Software Engineer", "Marketing", "Design", "Full-time"].map((term) => (
                <a
                  key={term}
                  href={`/jobs?q=${term}`}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  {term}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
