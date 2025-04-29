
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$199",
      description: "Essential hiring tools for small businesses",
      features: [
        "1 job posting at a time",
        "Standard job listing for 30 days",
        "Email support",
        "Basic candidate matching",
        "Mobile-optimized job listings"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      description: "Advanced features for growing teams",
      features: [
        "3 concurrent job postings",
        "Featured job listings for 45 days",
        "Priority email & phone support",
        "Advanced candidate matching",
        "Company profile customization",
        "Basic applicant tracking",
        "Resume search (100/month)"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Customized solutions for large organizations",
      features: [
        "Unlimited job postings",
        "Premium featured listings for 60 days",
        "Dedicated account manager",
        "Premium candidate matching",
        "Advanced analytics & reporting",
        "Full ATS integration",
        "Unlimited resume search",
        "Branded career pages",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="container py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-jobBlue-600 hover:text-jobBlue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Employer Pricing Plans</h1>
          <p className="text-jobNeutral-600 max-w-2xl mx-auto">
            Choose the perfect plan to find and hire the best talent for your organization.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-jobBlue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-jobBlue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.name !== "Enterprise" && <span className="text-sm text-jobNeutral-500">/month</span>}
                </div>
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
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-jobBlue-500 hover:bg-jobBlue-600' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-jobBlue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team can build a tailored plan for your specific hiring needs. Get in touch to discuss how we can help you find the perfect candidates.
          </p>
          <Button size="lg">Contact Our Sales Team</Button>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. Changes will be applied at the beginning of your next billing cycle."
              },
              {
                q: "Is there a contract or commitment?",
                a: "Our plans are month-to-month with no long-term commitment required. Enterprise plans may have custom terms."
              },
              {
                q: "Do unused job postings roll over?",
                a: "Job posting credits expire at the end of your billing cycle and do not roll over to the next month."
              },
              {
                q: "Can I get a refund if I'm not satisfied?",
                a: "We offer a 14-day money-back guarantee if you're not completely satisfied with our service."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-jobNeutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
