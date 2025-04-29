
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Users, Search } from "lucide-react";

const Network = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-jobBlue-800">My Network</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search connections..."
              className="pl-9 w-[250px]"
            />
          </div>
        </div>

        <Tabs defaultValue="connections" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="invitations">Invitations</TabsTrigger>
            <TabsTrigger value="suggestions">People You May Know</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connections">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-jobBlue-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-jobBlue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">John Smith {index}</CardTitle>
                        <CardDescription>Senior Software Engineer at Tech Co</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Connected since January 2023</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Message</Button>
                    <Button size="sm">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="invitations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2].map((index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-jobBlue-100 flex items-center justify-center">
                        <UserPlus className="h-6 w-6 text-jobBlue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Jane Doe {index}</CardTitle>
                        <CardDescription>Product Manager at Design Inc</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Wants to connect with you</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Ignore</Button>
                    <Button size="sm">Accept</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggestions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-jobBlue-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-jobBlue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Alex Johnson {index}</CardTitle>
                        <CardDescription>UX Designer at Creative Agency</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">5 mutual connections</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Connect</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Network;
