import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";

const PostJob = () => {
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Job posted successfully! It will be reviewed by our team shortly.");
    }, 1500);
  };
  
  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-jobBlue-600 hover:text-jobBlue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-jobBlue-100 rounded-full">
              <Briefcase className="h-8 w-8 text-jobBlue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Post a New Job</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Reach thousands of qualified candidates. Our platform connects you with the right talent for your organization.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>
              Fill out the form below to create your job listing. Fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="job-title">Job Title *</Label>
                  <Input id="job-title" placeholder="e.g. Senior Software Engineer" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your company name" required />
                  </div>
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" placeholder="e.g. San Francisco, CA or Remote" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="job-type">Job Type *</Label>
                  <Select>
                    <SelectTrigger id="job-type">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="temporary">Temporary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salary-min">Salary Range (Min)</Label>
                    <Input id="salary-min" type="number" placeholder="Minimum salary" />
                  </div>
                  <div>
                    <Label htmlFor="salary-max">Salary Range (Max)</Label>
                    <Input id="salary-max" type="number" placeholder="Maximum salary" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the role, responsibilities, and requirements" 
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="benefits">Benefits and Perks</Label>
                  <Textarea 
                    id="benefits" 
                    placeholder="List any benefits, perks, or other incentives"
                    className="min-h-[100px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="application-url">Application URL</Label>
                  <Input 
                    id="application-url" 
                    type="url"
                    placeholder="https://your-company.com/careers/job-application" 
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
                  {submitting ? "Posting Job..." : "Post Job"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-8 bg-jobBlue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-jobBlue-800 mb-2">Why post a job with Nexus?</h3>
          <ul className="space-y-2 text-jobNeutral-700">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
              <span>Reach thousands of qualified candidates in your industry</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
              <span>Advanced matching algorithm to find the right talent</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
              <span>Branded company profile and job listings</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 text-green-500 mt-0.5">✓</div>
              <span>Integrated applicant tracking system</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
