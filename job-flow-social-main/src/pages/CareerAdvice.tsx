
import { Link } from "react-router-dom";
import { ArrowLeft, Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerAdvice = () => {
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
              <Book className="h-8 w-8 text-jobBlue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Career Advice</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Resources, tips, and guidance to help you advance your career and find your dream job.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Resume Tips</CardTitle>
              <CardDescription>Learn how to create a standout resume</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Your resume is your first impression. Learn how to craft a resume that gets noticed by hiring managers and ATS systems.</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Interview Preparation</CardTitle>
              <CardDescription>Ace your next job interview</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">From common questions to body language, our interview guides help you present your best self to potential employers.</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Career Paths</CardTitle>
              <CardDescription>Explore different career trajectories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Understand various career paths and how to navigate transitions between industries or roles.</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Networking Strategies</CardTitle>
              <CardDescription>Build meaningful professional connections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn effective strategies for networking that can lead to new opportunities and career advancement.</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-jobBlue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-jobBlue-800 mb-4">Subscribe to Career Tips</h3>
          <p className="mb-6 text-jobNeutral-600">Get weekly career advice, industry insights, and job search tips directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
