
import { Briefcase, Building, Users } from "lucide-react";

export function JobStats() {
  return (
    <section className="py-14 bg-white border-y border-jobNeutral-200">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-jobBlue-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-jobBlue-600" />
            </div>
            <h3 className="text-4xl font-bold text-jobNeutral-900">25,000+</h3>
            <p className="mt-2 text-jobNeutral-600">Job Opportunities</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-jobBlue-100 rounded-full flex items-center justify-center mb-4">
              <Building className="w-8 h-8 text-jobBlue-600" />
            </div>
            <h3 className="text-4xl font-bold text-jobNeutral-900">10,000+</h3>
            <p className="mt-2 text-jobNeutral-600">Companies</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-jobBlue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-jobBlue-600" />
            </div>
            <h3 className="text-4xl font-bold text-jobNeutral-900">1M+</h3>
            <p className="mt-2 text-jobNeutral-600">Professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
