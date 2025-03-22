import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import Image from "next/image";

export default function App() {
  const { data: session } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState({ name: "", level: "", category: "" });
  const [image, setImage] = useState(null);
  const [story, setStory] = useState("");

  if (!session) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image src="/logo.png" alt="Logo" width={128} height={128} className="mb-6" />
        </motion.div>
        <motion.h1 className="text-3xl font-semibold mb-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
          Transform Your Pictures into Magical Fairytales
        </motion.h1>
        <Button onClick={() => signIn("google")} className="bg-purple-600 hover:bg-purple-700 shadow-lg rounded-full px-6 py-3 text-lg">Get Started</Button>
      </div>
    );
  }

  if (!profile.name) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-6">
        <Card className="w-96 p-6 bg-white text-black shadow-2xl rounded-lg">
          <h2 className="text-xl font-bold mb-4">Set Up Your Profile</h2>
          <Input placeholder="Name" onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="mb-2" />
          <Select onValueChange={(value) => setProfile({ ...profile, level: value })} className="mb-2">
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
          </Select>
          <Select onValueChange={(value) => setProfile({ ...profile, category: value })} className="mb-2">
            <SelectItem value="Fantasy">Fantasy</SelectItem>
            <SelectItem value="Adventure">Adventure</SelectItem>
          </Select>
          <Button className="mt-4 bg-purple-600 w-full rounded-full shadow-md" onClick={() => router.push("/upload")}>Next</Button>
        </Card>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-700 text-white p-6">
        <Card className="w-96 p-6 bg-white text-black shadow-2xl rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Upload a Picture</h2>
          <label className="cursor-pointer flex flex-col items-center gap-2 border-2 border-dashed border-purple-600 p-6 rounded-lg hover:bg-purple-50">
            <Upload className="w-10 h-10 text-purple-600" />
            <span className="text-purple-600">Choose a file</span>
            <input type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-600 text-white p-6">
      <Card className="w-96 p-6 bg-white text-black shadow-2xl rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Fairytale Story</h2>
        <p className="text-lg italic">{story || "Once upon a time..."}</p>
        <Button className="mt-4 bg-purple-600 w-full rounded-full shadow-md" onClick={() => new SpeechSynthesisUtterance(story).speak()}>Read Aloud</Button>
      </Card>
    </div>
  );
}
