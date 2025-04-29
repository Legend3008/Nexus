
import { Link } from "react-router-dom";
import { ArrowLeft, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SalaryGuide = () => {
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
              <DollarSign className="h-8 w-8 text-jobBlue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Salary Guide</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Research salaries by job title, industry, and location to ensure you're being paid fairly.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Salary Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Title</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g. San Francisco, CA"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full">Search</Button>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Popular Job Categories</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {[
            { title: "Technology", salary: "$75,000 - $150,000" },
            { title: "Healthcare", salary: "$60,000 - $120,000" },
            { title: "Finance", salary: "$65,000 - $135,000" },
            { title: "Marketing", salary: "$55,000 - $110,000" },
            { title: "Education", salary: "$45,000 - $85,000" },
            { title: "Engineering", salary: "$70,000 - $140,000" }
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jobNeutral-600 text-sm mb-2">Average Salary Range:</p>
                <p className="font-semibold text-jobBlue-600">{item.salary}</p>
                <Button variant="link" className="p-0 h-auto mt-2">See Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-jobBlue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-jobBlue-800 mb-2">Salary Negotiation Tips</h3>
          <p className="mb-4 text-jobNeutral-600">
            Knowing the market rate is just the first step. Learn how to effectively negotiate for a better compensation package.
          </p>
          <Button>Read Negotiation Guide</Button>
        </div>
      </div>
    </div>
  );
};

export default SalaryGuide;
