
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const TalentSearch = () => {
  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-jobBlue-600 hover:text-jobBlue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-jobBlue-100 rounded-full">
              <Users className="h-8 w-8 text-jobBlue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Talent Search</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Search our database of qualified professionals to find the perfect candidate for your open positions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Search Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" placeholder="Skills, job titles, etc." />
                </div>
                
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, state, or remote" />
                </div>
                
                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select>
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (6-9 years)</SelectItem>
                      <SelectItem value="executive">Executive (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="education">Education</Label>
                  <Select>
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associate">Associate's Degree</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD or Doctorate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Temporary", "Internship"].map((type, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`job-type-${i}`} />
                        <label
                          htmlFor={`job-type-${i}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full">Search Candidates</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Featured Candidates</h2>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="border-l-4 border-l-jobBlue-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Senior Software Engineer</h3>
                        <p className="text-jobNeutral-600 text-sm">San Francisco, CA • 6 years experience</p>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">View Profile</Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-1">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "TypeScript", "AWS", "GraphQL"].map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-jobBlue-100 text-jobBlue-700 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-jobNeutral-600">
                        Full-stack developer with expertise in building scalable web applications and microservices.
                        Strong background in cloud architecture and database design.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button>Load More Candidates</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-jobBlue-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Access our Premium Talent Database</h2>
            <p className="mb-6">
              Get unlimited access to our entire database of pre-screened candidates with our Premium plan.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
              {[
                "Over 1 million qualified professionals",
                "Advanced search filters",
                "Direct candidate contact"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-left">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="mt-6" size="lg">Upgrade to Premium</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;
