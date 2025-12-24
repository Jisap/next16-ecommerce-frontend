
import Banner from "./Banner/page"
import Category from "./Category/page"
import Companies from "./Companies/page"
import Hero from "./Hero/page"
import PopularProducts from "./PopularProducts/page"
import Trending from "./Trending/page"
import Blogs from "./Blogs/page"





const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      <Banner />
      <PopularProducts />
      <Companies />
      <Blogs />
    </>
  )
}

export default Index