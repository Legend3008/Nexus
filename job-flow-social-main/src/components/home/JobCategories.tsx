
import { 
  BarChart2, Code, Database, Lightbulb, LineChart, Megaphone, 
  Paintbrush, Shield, ShoppingBag, Users 
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "tech",
    name: "Technology",
    count: 1423,
    icon: Code,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "design",
    name: "Design",
    count: 856,
    icon: Paintbrush,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "marketing",
    name: "Marketing",
    count: 967,
    icon: Megaphone,
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "finance",
    name: "Finance",
    count: 743,
    icon: LineChart,
    color: "bg-green-100 text-green-700",
  },
  {
    id: "data",
    name: "Data",
    count: 689,
    icon: Database,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "hr",
    name: "Human Resources",
    count: 452,
    icon: Users,
    color: "bg-red-100 text-red-700",
  },
  {
    id: "sales",
    name: "Sales",
    count: 785,
    icon: ShoppingBag,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "product",
    name: "Product",
    count: 632,
    icon: Lightbulb,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "analytics",
    name: "Analytics",
    count: 473,
    icon: BarChart2,
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "security",
    name: "Security",
    count: 398,
    icon: Shield,
    color: "bg-gray-100 text-gray-700",
  },
];

export function JobCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-jobNeutral-900">Browse by Category</h2>
          <p className="mt-4 text-jobNeutral-600 max-w-2xl mx-auto">
            Explore job opportunities across various industries and find your perfect role
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/jobs?category=${category.id}`}
              className="group flex flex-col items-center p-6 rounded-lg border border-jobNeutral-200 bg-white hover:border-jobBlue-300 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-jobNeutral-900 font-medium text-lg group-hover:text-jobBlue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-jobNeutral-500 text-sm mt-2">
                {category.count} jobs
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
