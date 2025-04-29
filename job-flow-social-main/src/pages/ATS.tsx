
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ATS = () => {
  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-jobBlue-600 hover:text-jobBlue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Applicant Tracking System</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Streamline your hiring process with our powerful and easy-to-use applicant tracking system.
          </p>
        </div>
        
        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="demo">How It Works</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Centralized Candidate Management",
                  description: "Keep all candidate information, communications, and documents in one organized platform."
                },
                {
                  title: "Custom Hiring Workflows",
                  description: "Create customized hiring stages and workflows tailored to your company's recruitment process."
                },
                {
                  title: "Collaborative Hiring",
                  description: "Enable your entire hiring team to evaluate candidates, leave feedback, and make decisions together."
                },
                {
                  title: "Automated Screening",
                  description: "Use AI-powered tools to automatically screen and rank candidates based on your requirements."
                },
                {
                  title: "Interview Scheduling",
                  description: "Simplify interview scheduling with calendar integrations and automated reminders."
                },
                {
                  title: "Analytics & Reporting",
                  description: "Access detailed reports and insights to optimize your recruitment process and make data-driven decisions."
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="demo">
            <Card>
              <CardHeader>
                <CardTitle>See Our ATS in Action</CardTitle>
                <CardDescription>
                  Watch this short demo to see how our ATS can transform your hiring process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-jobNeutral-200 rounded-md flex items-center justify-center">
                  <Button>Watch Demo Video</Button>
                </div>
                
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                    <h3 className="font-medium mb-2">Post & Distribute Jobs</h3>
                    <p className="text-sm text-jobNeutral-600">Publish job listings to multiple job boards with a single click</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                    <h3 className="font-medium mb-2">Screen & Evaluate</h3>
                    <p className="text-sm text-jobNeutral-600">Automatically screen candidates and move them through your custom workflow</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                    <h3 className="font-medium mb-2">Hire & Onboard</h3>
                    <p className="text-sm text-jobNeutral-600">Make offers and streamline the onboarding process for new hires</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pricing">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  tier: "Starter",
                  price: "$99/mo",
                  description: "For small businesses with basic hiring needs",
                  features: [
                    "Up to 5 active jobs",
                    "Basic candidate tracking",
                    "Email templates",
                    "Standard reports"
                  ]
                },
                {
                  tier: "Professional",
                  price: "$249/mo",
                  description: "For growing companies with regular hiring",
                  features: [
                    "Up to 15 active jobs",
                    "Advanced candidate scoring",
                    "Custom workflows",
                    "Team collaboration tools",
                    "Advanced reporting",
                    "API access"
                  ],
                  popular: true
                },
                {
                  tier: "Enterprise",
                  price: "Contact us",
                  description: "For large organizations with complex hiring needs",
                  features: [
                    "Unlimited active jobs",
                    "AI-powered candidate matching",
                    "Advanced automation",
                    "Dedicated account manager",
                    "Custom integrations",
                    "Compliance features",
                    "Enterprise security"
                  ]
                }
              ].map((plan, index) => (
                <Card key={index} className={`${plan.popular ? 'border-jobBlue-500 shadow-lg relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-jobBlue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.tier}</CardTitle>
                    <div className="mt-2 text-3xl font-bold">{plan.price}</div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-6 ${plan.popular ? 'bg-jobBlue-500 hover:bg-jobBlue-600' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-jobBlue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your hiring process?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join thousands of companies that have streamlined their recruitment with our applicant tracking system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">Schedule Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATS;
