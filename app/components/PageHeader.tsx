import Link from "next/link";

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

const PageHeader = ({ title, currentPage }: PageHeaderProps) => {
  return (
    <div
      className="relative z-1 flex h-[400px] w-full items-center justify-center bg-cover bg-no-repeat text-center bg-position-[60%] sm:bg-center lg:bg-[initial]"
      style={{
        backgroundImage: "url('/assets/page-banner.jpg')",
      }}
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black/40" />
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <h2 className="GolosText text-8xl font-semibold text-white">{title}</h2>

        <div className="mt-5 flex items-center text-2xl text-white">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <i className="ri-arrow-right-wide-line px-2 pt-2"></i>
          <span className="">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
