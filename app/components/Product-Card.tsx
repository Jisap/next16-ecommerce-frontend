import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  off: string;
  cate?: string;
}

interface ProductCardProps {
  product: Product;
  addToWishlist: (product: Product) => void;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToWishlist, addToCart }: ProductCardProps) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="h-full w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
          />

          {/* Off Tag */}
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-4 py-1 GolosText">
            {product.off}
          </span>

          {/* Icons */}
          <div className="absolute right-5 top-5 z-10 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToWishlist(product);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white overflow-hidden z-10
              after:content-[''] after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-linear-to-l after:from-white/45 after:to-transparent after:-z-10 hover:after:left-full after:transition-all after:duration-700"
            >
              <i className="bi bi-balloon-heart"></i>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white overflow-hidden z-10
              after:content-[''] after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-linear-to-l after:from-white/45 after:to-transparent after:-z-10 hover:after:left-full after:transition-all after:duration-700"
            >
              <i className="bi bi-cart3"></i>
            </button>
          </div>
        </div>

        {/* Button Wrapper */}
        <div className="mt-4 block p-0 lg:absolute lg:bottom-0 lg:right-auto lg:z-20 lg:mt-0 lg:flex lg:translate-y-1/2 lg:justify-start lg:p-0 lg:left-6 min-[1628px]:left-4.5">
          <Link href={`/UI-Components/Shop/${product.id}`}>
            <button className="relative overflow-hidden z-50 cursor-pointer rounded-2xl border-[3px] border-white bg-black px-6 py-2.5 text-sm text-white GolosText lg:rounded-full lg:py-3 lg:text-base xl:text-lg 2xl:text-xl w-full lg:w-auto
            after:content-[''] after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-linear-to-l after:from-white/60 after:to-transparent after:-z-10 hover:after:left-full after:transition-all after:duration-700"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>

      <Link href={`/UI-Components/Shop/${product.id}`}>
        <div className="mt-5 md:mt-10 z-10 relative">
          <div className="flex justify-between">
            <h2 className="pr-5 text-xl font-medium Lufga max-[575px]:text-[2rem]">
              {product.title}
            </h2>

            <h3 className="text-2xl font-semibold GolosText max-[575px]:text-[2rem]">
              {product.price}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
