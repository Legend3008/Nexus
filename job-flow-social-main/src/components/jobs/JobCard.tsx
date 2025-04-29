
import { Link } from "react-router-dom";
import { BookmarkIcon, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  salaryRange?: string;
  postedAt: string;
  tags: string[];
  isFeatured?: boolean;
  className?: string;
}

export function JobCard({
  id,
  title,
  company,
  companyLogo = "/placeholder.svg",
  location,
  locationType,
  salaryRange,
  postedAt,
  tags,
  isFeatured = false,
  className,
}: JobCardProps) {
  const locationTypeColors = {
    "Remote": "bg-green-100 text-green-800",
    "Hybrid": "bg-blue-100 text-blue-800",
    "On-site": "bg-purple-100 text-purple-800",
  };

  return (
    <div 
      className={cn(
        "job-card p-5 relative",
        isFeatured && "border-l-4 border-l-jobBlue-500",
        className
      )}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <span className="inline-block bg-jobBlue-500 text-white text-xs font-semibold px-2 py-1 rounded-bl-md">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-jobNeutral-200 rounded-md overflow-hidden flex items-center justify-center">
          {companyLogo ? (
            <img 
              src={companyLogo} 
              alt={`${company} logo`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-jobNeutral-500 font-bold text-lg">
              {company.charAt(0)}
            </span>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <Link 
            to={`/jobs/${id}`}
            className="inline-block hover:text-jobBlue-600 transition-colors"
          >
            <h3 className="text-lg font-semibold text-jobNeutral-900 line-clamp-1">{title}</h3>
          </Link>
          
          <p className="text-sm font-medium text-jobNeutral-700 mt-1">{company}</p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
            <div className="flex items-center text-jobNeutral-600 text-sm">
              <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
              <span>{location}</span>
            </div>
            
            <div className={cn("badge text-xs", locationTypeColors[locationType])}>
              {locationType}
            </div>
            
            {salaryRange && (
              <div className="text-jobNeutral-600 text-sm">
                {salaryRange}
              </div>
            )}
            
            <div className="flex items-center text-jobNeutral-500 text-xs">
              <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>{postedAt}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.slice(0, 4).map((tag, index) => (
              <span 
                key={index} 
                className="badge badge-secondary"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="text-xs text-jobNeutral-500">+{tags.length - 4} more</span>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 ml-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-jobNeutral-500 hover:text-jobBlue-600"
            aria-label="Save job"
          >
            <BookmarkIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-jobNeutral-200">
        <div className="text-sm text-jobNeutral-600">
          Be an early applicant
        </div>
        <Link to={`/jobs/${id}/apply`}>
          <Button size="sm">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
}
