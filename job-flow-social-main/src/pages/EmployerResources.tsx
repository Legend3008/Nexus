
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EmployerResources = () => {
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
              <FileText className="h-8 w-8 text-jobBlue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Employer Resources</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Tools, guides, and resources to help you optimize your recruitment process and build a stronger team.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hiring Guides</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Writing Effective Job Descriptions",
                description: "Learn how to create compelling job listings that attract qualified candidates."
              },
              {
                title: "Interview Techniques",
                description: "Discover modern interview methods to better evaluate candidate potential."
              },
              {
                title: "Remote Hiring Strategy",
                description: "Best practices for recruiting and onboarding remote employees."
              },
              {
                title: "Building Diverse Teams",
                description: "Strategies to improve diversity and inclusion in your recruitment process."
              }
            ].map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{guide.description}</CardDescription>
                  <Button variant="outline" size="sm">Read Guide</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recruiting Tools</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Ready-to-use templates for common job positions across various industries. Customize them to fit your company's needs.</p>
                <div className="flex flex-wrap gap-3">
                  {["Technology", "Sales", "Marketing", "Customer Service", "Finance", "HR"].map((category, i) => (
                    <Button key={i} variant="outline" size="sm">{category} Templates</Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Candidate Assessment Checklists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Standardize your evaluation process with our comprehensive assessment checklists for different roles and seniority levels.</p>
                <Button variant="outline">Download Checklists</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-jobBlue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-jobBlue-800 mb-2">Need personalized guidance?</h3>
          <p className="mb-4 text-jobNeutral-600">
            Our recruitment specialists can provide custom advice for your specific hiring challenges.
          </p>
          <Button>Schedule a Consultation</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployerResources;
