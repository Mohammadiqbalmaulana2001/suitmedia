'use client'
import Navbar from "./navbar";
import HomeDashboard from "./home";
import banner from "@/app/assets/images/banner.jpg"
import IdeasPage from "./ideas";

export default function Home() {
  const imageUrl = "https://source.unsplash.com/1920x1080"
  return (
    <div>
      <Navbar />
      <HomeDashboard imageUrl={imageUrl} />
      <div>
      <IdeasPage />
      </div>
    </div>
  )
}
