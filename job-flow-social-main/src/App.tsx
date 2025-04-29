
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";
import Network from "./pages/Network";
import Messages from "./pages/Messages";
import VideoResume from "./pages/VideoResume";
import ResumeMaker from "./pages/ResumeMaker";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PlaceholderPage from "./pages/PlaceholderPage";
import PostJob from "./pages/PostJob";
import CareerAdvice from "./pages/CareerAdvice";
import SalaryGuide from "./pages/SalaryGuide";
import Pricing from "./pages/Pricing";
import EmployerResources from "./pages/EmployerResources";
import TalentSearch from "./pages/TalentSearch";
import ATS from "./pages/ATS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/network" element={<Network />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/video-resume" element={<VideoResume />} />
            <Route path="/resume-maker" element={<ResumeMaker />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Employer pages */}
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/employer-resources" element={<EmployerResources />} />
            <Route path="/talent-search" element={<TalentSearch />} />
            <Route path="/ats" element={<ATS />} />
            
            {/* Career resources */}
            <Route path="/career-advice" element={<CareerAdvice />} />
            <Route path="/salary-guide" element={<SalaryGuide />} />
            
            {/* Company pages */}
            <Route path="/about" element={<PlaceholderPage />} />
            <Route path="/contact" element={<PlaceholderPage />} />
            <Route path="/blog" element={<PlaceholderPage />} />
            <Route path="/press" element={<PlaceholderPage />} />
            <Route path="/careers" element={<PlaceholderPage />} />
            
            {/* Footer page routes */}
            <Route path="/privacy" element={<PlaceholderPage />} />
            <Route path="/terms" element={<PlaceholderPage />} />
            <Route path="/cookies" element={<PlaceholderPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
