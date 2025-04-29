import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Camera, Upload, Play, Pause, Circle, XCircle } from "lucide-react";

const VideoResume = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const videoPreviewRef = useRef<HTMLVideoElement>(null);
  const uploadedVideoRef = useRef<HTMLVideoElement>(null);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoPreviewRef.current) {
        videoPreviewRef.current.srcObject = stream;
        videoPreviewRef.current.play();
      }
      
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideo(videoURL);
        setRecordedChunks(chunks);
        
        if (videoPreviewRef.current) {
          videoPreviewRef.current.srcObject = null;
          videoPreviewRef.current.src = videoURL;
          videoPreviewRef.current.load();
        }
        
        // Stop all tracks from the stream
        if (videoPreviewRef.current?.srcObject instanceof MediaStream) {
          const tracks = (videoPreviewRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach(track => track.stop());
        }
      };
      
      setMediaRecorder(recorder);
      recorder.start();
      setRecording(true);
      
      // Automatically stop recording after 2 minutes
      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop();
          setRecording(false);
        }
      }, 120000);
      
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Could not access camera. Please check permissions.");
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setRecording(false);
    }
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.match('video.*')) {
      toast.error("Please select a video file");
      return;
    }
    
    // Check file size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      toast.error("File size exceeds 100MB limit");
      return;
    }
    
    const videoURL = URL.createObjectURL(file);
    setUploadedVideo(videoURL);
    
    if (uploadedVideoRef.current) {
      uploadedVideoRef.current.src = videoURL;
      uploadedVideoRef.current.load();
    }
    
    toast.success(`File "${file.name}" uploaded successfully!`);
  };
  
  const triggerFileInput = () => {
    // Find the file input and programmatically click it
    const fileInput = document.getElementById('video-upload');
    if (fileInput) {
      fileInput.click();
    }
  };
  
  const togglePlayPause = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const saveVideo = (source: 'recorded' | 'uploaded') => {
    setUploading(true);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setUploading(false);
            setUploadProgress(0);
            toast.success("Video resume saved successfully!");
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    
    // In a real app, you would upload to a backend service here
    // For example:
    /*
    const formData = new FormData();
    if (source === 'recorded' && recordedChunks.length > 0) {
      const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
      formData.append('video', videoBlob, 'video-resume.webm');
    } else if (source === 'uploaded' && uploadedVideo) {
      // For uploaded files, you might need to fetch the file again
      // Or store the file reference when it's uploaded
    }
    
    fetch('/api/video-resume', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      setUploading(false);
      setUploadProgress(0);
      toast.success("Video resume saved successfully!");
    })
    .catch(error => {
      setUploading(false);
      toast.error("Failed to save video resume");
    });
    */
  };
  
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-jobBlue-800 mb-2">Video Resume</h1>
        <p className="text-muted-foreground mb-6">Create a short video introduction to showcase your personality and skills to potential employers</p>
        
        <Tabs defaultValue="record" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="record" className="flex items-center gap-2">
              <Camera className="h-4 w-4" /> Record New Video
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" /> Upload Existing Video
            </TabsTrigger>
          </TabsList>
          
          {/* Record Tab */}
          <TabsContent value="record">
            <Card>
              <CardHeader>
                <CardTitle>Record Your Video Resume</CardTitle>
                <CardDescription>
                  Create a 30-120 second introduction. Speak clearly, maintain eye contact with the camera, and highlight your key strengths.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <video 
                      ref={videoPreviewRef} 
                      className="w-full h-full object-cover"
                      playsInline
                      muted={recording}
                      controls={!recording && recordedVideo !== null}
                    />
                  </div>
                  
                  {!recordedVideo ? (
                    <div className="flex gap-4">
                      {!recording ? (
                        <Button 
                          onClick={startRecording} 
                          className="flex gap-2 items-center"
                        >
                          <Circle className="h-4 w-4" /> Start Recording
                        </Button>
                      ) : (
                        <Button 
                          onClick={stopRecording} 
                          variant="destructive"
                          className="flex gap-2 items-center"
                        >
                          <XCircle className="h-4 w-4" /> Stop Recording
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setRecordedVideo(null);
                          setRecordedChunks([]);
                        }}
                      >
                        Discard & Re-record
                      </Button>
                      <Button 
                        onClick={() => togglePlayPause(videoPreviewRef)}
                        variant="outline"
                        className="flex gap-2 items-center"
                      >
                        {isPlaying ? (
                          <><Pause className="h-4 w-4" /> Pause</>
                        ) : (
                          <><Play className="h-4 w-4" /> Play</>
                        )}
                      </Button>
                      <Button 
                        onClick={() => saveVideo('recorded')}
                        disabled={uploading}
                      >
                        Save Video
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Upload Tab */}
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Video Resume</CardTitle>
                <CardDescription>
                  Upload a short video introduction (max 2 minutes). Supported formats: MP4, WebM, MOV. Maximum file size: 100MB.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  {!uploadedVideo ? (
                    <div 
                      className="border-2 border-dashed border-border rounded-lg p-8 w-full text-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={triggerFileInput}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <h3 className="font-medium">Drag and drop your video file</h3>
                        <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
                        <Label htmlFor="video-upload" className="cursor-pointer">
                          <Input 
                            id="video-upload" 
                            type="file" 
                            accept="video/*" 
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <Button variant="outline" type="button">Select Video File</Button>
                        </Label>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <video 
                          ref={uploadedVideoRef}
                          className="w-full h-full object-cover"
                          playsInline
                          controls
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setUploadedVideo(null)}
                        >
                          Cancel & Re-upload
                        </Button>
                        <Button 
                          onClick={() => saveVideo('uploaded')}
                          disabled={uploading}
                        >
                          Save Video
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {uploading && (
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Uploading video...</p>
              <p className="text-sm text-muted-foreground">{uploadProgress}%</p>
            </div>
            <Progress value={uploadProgress} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoResume;
