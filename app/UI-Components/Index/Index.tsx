import Banner from "./Banner/page"
import Category from "./Category/page"
import Hero from "./Hero/page"
import PopularProducts from "./PopularProducts/page"
import Trending from "./Trending/page"




const Index = () => {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      <Banner />
      <PopularProducts />
    </>
  )
}

export default Index