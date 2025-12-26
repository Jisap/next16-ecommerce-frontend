import Link from "next/link";

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

const PageHeader = ({ title, currentPage }: PageHeaderProps) => {
  return (
    <div className="page-section flex justify-center items-center text-center">
      <div className="z-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-8xl GolosText font-semibold">{title}</h2>

        <div className="flex mt-5 text-2xl items-center text-white">
          <Link href="/" className="hover:text-primary">Home</Link>
          <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
          <span className="">{currentPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
