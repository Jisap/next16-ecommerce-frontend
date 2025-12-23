import Banner from "./Banner/page"
import Category from "./Category/page"
import Companies from "./Companies/page"
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
      <Companies />
    </>
  )
}

export default Index