import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-jobBlue-600 to-jobBlue-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to take the next step in your career?
          </h2>
          
          <p className="mt-4 text-xl text-jobNeutral-200">
            Join thousands of professionals who have found their dream jobs through Nexus
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="min-w-[150px] h-12 bg-white text-jobBlue-700 hover:bg-jobNeutral-100">
                Create Account
              </Button>
            </Link>
            
            <Link to="/jobs">
              <Button className="min-w-[150px] h-12 bg-transparent hover:bg-jobBlue-700 border border-white">
                Browse Jobs
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-jobNeutral-300">
            Already have an account? <Link to="/login" className="text-white underline">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
