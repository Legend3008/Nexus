
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { Check, Download, FileText, Plus, Trash2 } from "lucide-react";

interface FormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    headline: string;
    summary: string;
  };
  education: Array<{
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    url: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

const initialFormData: FormData = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    location: "",
    headline: "",
    summary: ""
  },
  education: [
    {
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  ],
  experience: [
    {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: ""
    }
  ],
  skills: [""],
  projects: [
    {
      title: "",
      description: "",
      url: ""
    }
  ],
  certifications: [
    {
      name: "",
      issuer: "",
      date: ""
    }
  ]
};

const ResumeMaker = () => {
  const [activeStep, setActiveStep] = useState("personal");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [generating, setGenerating] = useState(false);
  
  const updatePersonalInfo = (field: keyof typeof formData.personalInfo, value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value
      }
    });
  };
  
  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          description: ""
        }
      ]
    });
  };
  
  const updateEducation = (index: number, field: keyof typeof formData.education[0], value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      education: newEducation
    });
  };
  
  const removeEducation = (index: number) => {
    if (formData.education.length === 1) return;
    
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      education: newEducation
    });
  };
  
  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: ""
        }
      ]
    });
  };
  
  const updateExperience = (index: number, field: keyof typeof formData.experience[0], value: any) => {
    const newExperience = [...formData.experience];
    newExperience[index] = {
      ...newExperience[index],
      [field]: field === 'current' ? value === 'true' : value
    };
    
    setFormData({
      ...formData,
      experience: newExperience
    });
  };
  
  const removeExperience = (index: number) => {
    if (formData.experience.length === 1) return;
    
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      experience: newExperience
    });
  };
  
  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ""]
    });
  };
  
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    
    setFormData({
      ...formData,
      skills: newSkills
    });
  };
  
  const removeSkill = (index: number) => {
    if (formData.skills.length === 1) return;
    
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: newSkills
    });
  };
  
  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          title: "",
          description: "",
          url: ""
        }
      ]
    });
  };
  
  const updateProject = (index: number, field: keyof typeof formData.projects[0], value: string) => {
    const newProjects = [...formData.projects];
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      projects: newProjects
    });
  };
  
  const removeProject = (index: number) => {
    if (formData.projects.length === 1) return;
    
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      projects: newProjects
    });
  };
  
  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        {
          name: "",
          issuer: "",
          date: ""
        }
      ]
    });
  };
  
  const updateCertification = (index: number, field: keyof typeof formData.certifications[0], value: string) => {
    const newCertifications = [...formData.certifications];
    newCertifications[index] = {
      ...newCertifications[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      certifications: newCertifications
    });
  };
  
  const removeCertification = (index: number) => {
    if (formData.certifications.length === 1) return;
    
    const newCertifications = formData.certifications.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      certifications: newCertifications
    });
  };
  
  const handleGenerateResume = () => {
    setGenerating(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      setGenerating(false);
      toast.success("Resume generated successfully!");
      
      // In a real app, you would send the data to a backend endpoint
      // that would generate a PDF and return a download link
      /*
      fetch('/api/generate-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template: selectedTemplate,
          data: formData
        }),
      })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${formData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        toast.error("Failed to generate resume");
      })
      .finally(() => {
        setGenerating(false);
      });
      */
    }, 2000);
  };
  
  const goToNextStep = () => {
    switch (activeStep) {
      case "personal":
        setActiveStep("education");
        break;
      case "education":
        setActiveStep("experience");
        break;
      case "experience":
        setActiveStep("skills");
        break;
      case "skills":
        setActiveStep("projects");
        break;
      case "projects":
        setActiveStep("certifications");
        break;
      case "certifications":
        setActiveStep("template");
        break;
      default:
        break;
    }
  };
  
  const goToPreviousStep = () => {
    switch (activeStep) {
      case "education":
        setActiveStep("personal");
        break;
      case "experience":
        setActiveStep("education");
        break;
      case "skills":
        setActiveStep("experience");
        break;
      case "projects":
        setActiveStep("skills");
        break;
      case "certifications":
        setActiveStep("projects");
        break;
      case "template":
        setActiveStep("certifications");
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Resume Builder</h1>
        <p className="text-muted-foreground mb-6">Create a professional resume in minutes</p>
        
        <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
          <TabsList className="grid grid-cols-7 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certifications">Certificates</TabsTrigger>
            <TabsTrigger value="template">Template</TabsTrigger>
          </TabsList>
          
          {/* Personal Info */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Add your personal details so employers can contact you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={formData.personalInfo.name}
                      onChange={(e) => updatePersonalInfo("name", e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo("email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      value={formData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={formData.personalInfo.location}
                      onChange={(e) => updatePersonalInfo("location", e.target.value)}
                      placeholder="New York, NY"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="headline">Professional Headline</Label>
                  <Input 
                    id="headline" 
                    value={formData.personalInfo.headline}
                    onChange={(e) => updatePersonalInfo("headline", e.target.value)}
                    placeholder="Senior Software Engineer with 5+ years of experience"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea 
                    id="summary" 
                    value={formData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                    placeholder="A brief summary of your professional background, skills, and career goals"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-end">
              <Button onClick={goToNextStep}>
                Continue to Education
              </Button>
            </div>
          </TabsContent>
          
          {/* Education */}
          <TabsContent value="education">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>
                    Add your educational background
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addEducation}>
                  <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.education.map((edu, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Education #{index + 1}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeEducation(index)}
                        disabled={formData.education.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`school-${index}`}>School/Institution</Label>
                        <Input 
                          id={`school-${index}`} 
                          value={edu.school}
                          onChange={(e) => updateEducation(index, "school", e.target.value)}
                          placeholder="University of California, Berkeley"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${index}`}>Degree</Label>
                        <Input 
                          id={`degree-${index}`} 
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, "degree", e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`field-${index}`}>Field of Study</Label>
                        <Input 
                          id={`field-${index}`} 
                          value={edu.field}
                          onChange={(e) => updateEducation(index, "field", e.target.value)}
                          placeholder="Computer Science"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`edu-start-${index}`}>Start Date</Label>
                          <Input 
                            id={`edu-start-${index}`} 
                            type="month"
                            value={edu.startDate}
                            onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`edu-end-${index}`}>End Date</Label>
                          <Input 
                            id={`edu-end-${index}`} 
                            type="month"
                            value={edu.endDate}
                            onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <Label htmlFor={`edu-desc-${index}`}>Description</Label>
                      <Textarea 
                        id={`edu-desc-${index}`} 
                        value={edu.description}
                        onChange={(e) => updateEducation(index, "description", e.target.value)}
                        placeholder="Relevant coursework, honors, achievements, etc."
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Personal
              </Button>
              <Button onClick={goToNextStep}>
                Continue to Experience
              </Button>
            </div>
          </TabsContent>
          
          {/* Experience */}
          <TabsContent value="experience">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>
                    Add your work history, starting with the most recent position
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addExperience}>
                  <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.experience.map((exp, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Experience #{index + 1}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeExperience(index)}
                        disabled={formData.experience.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`company-${index}`}>Company</Label>
                        <Input 
                          id={`company-${index}`} 
                          value={exp.company}
                          onChange={(e) => updateExperience(index, "company", e.target.value)}
                          placeholder="Google, Inc."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`position-${index}`}>Position</Label>
                        <Input 
                          id={`position-${index}`} 
                          value={exp.position}
                          onChange={(e) => updateExperience(index, "position", e.target.value)}
                          placeholder="Senior Software Engineer"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`exp-location-${index}`}>Location</Label>
                        <Input 
                          id={`exp-location-${index}`} 
                          value={exp.location}
                          onChange={(e) => updateExperience(index, "location", e.target.value)}
                          placeholder="Mountain View, CA"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Employment Type</Label>
                        <RadioGroup 
                          value={exp.current ? "true" : "false"}
                          onValueChange={(value) => updateExperience(index, "current", value)}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="false" id={`past-${index}`} />
                            <Label htmlFor={`past-${index}`}>Past</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="true" id={`current-${index}`} />
                            <Label htmlFor={`current-${index}`}>Current</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor={`exp-start-${index}`}>Start Date</Label>
                        <Input 
                          id={`exp-start-${index}`} 
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`exp-end-${index}`}>End Date</Label>
                        <Input 
                          id={`exp-end-${index}`} 
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                          disabled={exp.current}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <Label htmlFor={`exp-desc-${index}`}>Description</Label>
                      <Textarea 
                        id={`exp-desc-${index}`} 
                        value={exp.description}
                        onChange={(e) => updateExperience(index, "description", e.target.value)}
                        placeholder="Describe your responsibilities, achievements, and the technologies you worked with"
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Education
              </Button>
              <Button onClick={goToNextStep}>
                Continue to Skills
              </Button>
            </div>
          </TabsContent>
          
          {/* Skills */}
          <TabsContent value="skills">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>
                    Add your technical and professional skills
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addSkill}>
                  <Plus className="mr-2 h-4 w-4" /> Add Skill
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <Input 
                        value={skill}
                        onChange={(e) => updateSkill(index, e.target.value)}
                        placeholder="e.g., JavaScript, Project Management, Photoshop"
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeSkill(index)}
                        disabled={formData.skills.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Experience
              </Button>
              <Button onClick={goToNextStep}>
                Continue to Projects
              </Button>
            </div>
          </TabsContent>
          
          {/* Projects */}
          <TabsContent value="projects">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    Add projects that demonstrate your skills and experience
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addProject}>
                  <Plus className="mr-2 h-4 w-4" /> Add Project
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.projects.map((project, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Project #{index + 1}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeProject(index)}
                        disabled={formData.projects.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`project-title-${index}`}>Project Title</Label>
                        <Input 
                          id={`project-title-${index}`} 
                          value={project.title}
                          onChange={(e) => updateProject(index, "title", e.target.value)}
                          placeholder="E-commerce Website"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`project-url-${index}`}>Project URL</Label>
                        <Input 
                          id={`project-url-${index}`} 
                          value={project.url}
                          onChange={(e) => updateProject(index, "url", e.target.value)}
                          placeholder="https://github.com/yourusername/project"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`project-desc-${index}`}>Description</Label>
                        <Textarea 
                          id={`project-desc-${index}`} 
                          value={project.description}
                          onChange={(e) => updateProject(index, "description", e.target.value)}
                          placeholder="Describe the project, your role, technologies used, and outcomes achieved"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Skills
              </Button>
              <Button onClick={goToNextStep}>
                Continue to Certifications
              </Button>
            </div>
          </TabsContent>
          
          {/* Certifications */}
          <TabsContent value="certifications">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>
                    Add professional certifications and licenses
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={addCertification}>
                  <Plus className="mr-2 h-4 w-4" /> Add Certification
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.certifications.map((cert, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Certification #{index + 1}</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeCertification(index)}
                        disabled={formData.certifications.length === 1}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`cert-name-${index}`}>Certification Name</Label>
                        <Input 
                          id={`cert-name-${index}`} 
                          value={cert.name}
                          onChange={(e) => updateCertification(index, "name", e.target.value)}
                          placeholder="AWS Certified Solutions Architect"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`cert-issuer-${index}`}>Issuing Organization</Label>
                        <Input 
                          id={`cert-issuer-${index}`} 
                          value={cert.issuer}
                          onChange={(e) => updateCertification(index, "issuer", e.target.value)}
                          placeholder="Amazon Web Services"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`cert-date-${index}`}>Date Earned</Label>
                        <Input 
                          id={`cert-date-${index}`} 
                          type="month"
                          value={cert.date}
                          onChange={(e) => updateCertification(index, "date", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Projects
              </Button>
              <Button onClick={goToNextStep}>
                Continue to Template Selection
              </Button>
            </div>
          </TabsContent>
          
          {/* Template Selection */}
          <TabsContent value="template">
            <Card>
              <CardHeader>
                <CardTitle>Resume Template</CardTitle>
                <CardDescription>
                  Choose a template for your resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedTemplate === 'modern' ? 'ring-2 ring-jobBlue-600' : 'hover:bg-accent'}`}
                    onClick={() => setSelectedTemplate('modern')}
                  >
                    <div className="aspect-[8.5/11] bg-jobBlue-100 rounded-md mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 bg-jobBlue-600"></div>
                        <div className="flex-1 bg-white p-4">
                          <div className="w-1/3 h-2 bg-jobBlue-200 rounded mb-2"></div>
                          <div className="w-2/3 h-2 bg-jobBlue-200 rounded mb-6"></div>
                          <div className="space-y-2">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="w-full h-1.5 bg-gray-100 rounded"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {selectedTemplate === 'modern' && (
                        <div className="absolute top-2 right-2 bg-jobBlue-600 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <p className="font-medium text-center">Modern</p>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedTemplate === 'classic' ? 'ring-2 ring-jobBlue-600' : 'hover:bg-accent'}`}
                    onClick={() => setSelectedTemplate('classic')}
                  >
                    <div className="aspect-[8.5/11] bg-gray-50 rounded-md mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col">
                        <div className="h-20 bg-white p-4 border-b">
                          <div className="w-1/2 h-3 bg-gray-200 rounded mb-2"></div>
                          <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex-1 bg-white p-4">
                          <div className="w-1/4 h-2 bg-gray-200 rounded mb-3"></div>
                          <div className="space-y-2">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="w-full h-1.5 bg-gray-100 rounded"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {selectedTemplate === 'classic' && (
                        <div className="absolute top-2 right-2 bg-jobBlue-600 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <p className="font-medium text-center">Classic</p>
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedTemplate === 'creative' ? 'ring-2 ring-jobBlue-600' : 'hover:bg-accent'}`}
                    onClick={() => setSelectedTemplate('creative')}
                  >
                    <div className="aspect-[8.5/11] bg-gray-50 rounded-md mb-3 relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-3">
                        <div className="col-span-1 bg-jobBlue-800 p-4">
                          <div className="w-full h-20 bg-white/10 rounded-full mb-4 mx-auto"></div>
                          <div className="space-y-2 mt-6">
                            {[1,2,3].map(i => (
                              <div key={i} className="w-full h-1.5 bg-white/20 rounded"></div>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-2 bg-white p-4">
                          <div className="w-2/3 h-3 bg-gray-200 rounded mb-6"></div>
                          <div className="space-y-2">
                            {[1,2,3,4].map(i => (
                              <div key={i} className="w-full h-1.5 bg-gray-100 rounded"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {selectedTemplate === 'creative' && (
                        <div className="absolute top-2 right-2 bg-jobBlue-600 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <p className="font-medium text-center">Creative</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={goToPreviousStep}>
                Back to Certifications
              </Button>
              <Button 
                onClick={handleGenerateResume}
                disabled={generating}
                className="gap-2"
              >
                {generating ? "Generating..." : (
                  <>
                    <FileText className="h-4 w-4" /> Generate Resume
                  </>
                )}
              </Button>
            </div>
            
            {generating && (
              <div className="mt-4 text-center">
                <p className="text-muted-foreground mb-1">Generating your PDF resume...</p>
                <p className="text-xs text-muted-foreground">This may take a few seconds</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResumeMaker;
