import PageHeader from "@/app/components/PageHeader"
import BlogData from "@/data/BlogsData.json"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"



const BlodDetails = () => {

  const params = useParams();
  const id = params?.id;

  const blog = BlogData.find((blog) => blog.id === Number(id));
  if (!blog) {
    return (
      <div className="py-20 text-center text-3xl font-bold">
        Blog Not Found
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title="Blog Details"
        currentPage="Blog Details"
        parentPage="Blog"
        parentLink="/UI-Components/Blog"
      />
    </>
  )
}

export default BlodDetails