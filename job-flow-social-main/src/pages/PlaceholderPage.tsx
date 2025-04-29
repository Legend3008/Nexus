
import { useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlaceholderPage = () => {
  const params = useParams();
  const location = useLocation();
  
  // Extract the page name from the path
  const pathSegments = location.pathname.split('/');
  const pageName = pathSegments[pathSegments.length - 1];
  
  // Format the page name for display (convert kebab-case to Title Case)
  const formatPageName = (name: string) => {
    return name.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const displayName = formatPageName(pageName);
  
  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-jobBlue-600 hover:text-jobBlue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-jobBlue-800">{displayName}</CardTitle>
          <CardDescription>
            This page is under construction and will be available soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            We're currently working on bringing you the best content and features for this section.
            Check back soon to see updates or subscribe to our newsletter to be notified when new features are released.
          </p>
          
          <div className="flex gap-4">
            <Link to="/jobs">
              <Button>Browse Jobs</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
