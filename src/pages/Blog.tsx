import { Navbar } from "../components/Navbar"

export const Blog = () => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex justify-center py-25 bg-violet-50">
          content
        </div>
      </div>
    </div>
  )
}