
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, Send, Paperclip } from "lucide-react";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState<number | null>(1);
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-jobBlue-800 mb-6">Messages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contacts sidebar */}
        <div className="lg:col-span-4 xl:col-span-3">
          <Card className="h-[calc(80vh-130px)]">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-9" />
              </div>
              
              <div className="space-y-1 overflow-y-auto h-[calc(80vh-200px)]">
                {[1, 2, 3, 4, 5].map((contactId) => (
                  <div 
                    key={contactId}
                    className={`flex items-start gap-3 p-3 rounded-md cursor-pointer hover:bg-accent transition-colors ${selectedContact === contactId ? 'bg-accent' : ''}`}
                    onClick={() => setSelectedContact(contactId)}
                  >
                    <div className="h-10 w-10 rounded-full bg-jobBlue-100 flex items-center justify-center text-jobBlue-600 font-medium">
                      {contactId === 1 ? 'JD' : contactId === 2 ? 'TS' : contactId === 3 ? 'EW' : contactId === 4 ? 'MR' : 'AL'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className="font-medium truncate">
                          {contactId === 1 ? 'John Doe' : contactId === 2 ? 'Taylor Smith' : contactId === 3 ? 'Emma Wilson' : contactId === 4 ? 'Mike Richards' : 'Alex Lee'}
                        </p>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {contactId === 1 ? '2m' : contactId === 2 ? '1h' : contactId === 3 ? '3h' : contactId === 4 ? '1d' : '3d'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {contactId === 1 ? 'Thanks for your application!' : contactId === 2 ? 'When can we schedule an interview?' : contactId === 3 ? 'I saw your profile and wanted to connect' : contactId === 4 ? 'Great talking with you yesterday' : 'Do you have time to meet next week?'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        
        {/* Chat area */}
        <div className="lg:col-span-8 xl:col-span-9">
          <Card className="h-[calc(80vh-130px)] flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat header */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-jobBlue-100 flex items-center justify-center text-jobBlue-600 font-medium">
                      JD
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Senior Recruiter at Tech Co</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      Hello! I'm interested in the Senior Developer position at your company.
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      Hi there! Thanks for your interest. Your resume looks impressive. Do you have time for a quick chat about the role?
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      Absolutely! I'm available tomorrow afternoon or Friday morning. What works best for you?
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      Great! Let's schedule for tomorrow at 2 PM your time. I'll send you a calendar invite with the meeting details.
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-jobBlue-100 text-jobBlue-800 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      Perfect, thanks! Looking forward to discussing the opportunity.
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      Thanks for your application! I've reviewed your resume and am impressed with your background. Is there anything specific you'd like to know about the role before our call?
                    </div>
                  </div>
                </div>
                
                {/* Chat input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-center p-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a contact from the list to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
