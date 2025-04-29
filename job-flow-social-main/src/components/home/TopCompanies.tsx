
import { Link } from "react-router-dom";

const companies = [
  {
    id: "1",
    name: "TechFlow Inc.",
    logo: "/placeholder.svg", 
    jobCount: 42,
    industry: "Technology",
  },
  {
    id: "2",
    name: "Innovate Solutions",
    logo: "/placeholder.svg",
    jobCount: 28,
    industry: "Software",
  },
  {
    id: "3",
    name: "DesignHub",
    logo: "/placeholder.svg",
    jobCount: 15,
    industry: "Design",
  },
  {
    id: "4",
    name: "Finance Pro",
    logo: "/placeholder.svg",
    jobCount: 23,
    industry: "Finance",
  },
  {
    id: "5",
    name: "Health Plus",
    logo: "/placeholder.svg",
    jobCount: 19,
    industry: "Healthcare",
  },
  {
    id: "6",
    name: "MarketEdge",
    logo: "/placeholder.svg",
    jobCount: 31,
    industry: "Marketing",
  },
];

export function TopCompanies() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-jobNeutral-900">Top Companies Hiring</h2>
          <Link 
            to="/companies" 
            className="text-jobBlue-600 hover:text-jobBlue-700 text-sm font-medium"
          >
            View all companies →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="flex items-center p-5 rounded-lg border border-jobNeutral-200 bg-white hover:border-jobBlue-300 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-jobNeutral-100 rounded-md flex items-center justify-center mr-4 overflow-hidden">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-jobNeutral-900 font-medium text-lg">{company.name}</h3>
                <p className="text-jobNeutral-600 text-sm mt-1">{company.industry}</p>
                <p className="text-jobNeutral-500 text-sm mt-2">{company.jobCount} open positions</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
