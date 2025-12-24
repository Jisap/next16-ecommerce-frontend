

import Image from "next/image"
import insta1 from "@/public/assets/insta-1.webp"
import insta2 from "@/public/assets/insta-2.webp"
import insta3 from "@/public/assets/insta-3.webp"
import insta4 from "@/public/assets/insta-4.webp"
import insta5 from "@/public/assets/insta-5.webp"
import insta6 from "@/public/assets/insta-6.webp"
import instaFollow from "@/public/assets/insta-follow.webp"


const instaImage = [insta1, insta2, insta3, insta4, insta5, insta6]

const Follow = () => {
  return (
    <>
      <div className="follow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {instaImage.map((insta, idx) => (
            <div key={idx} className="follow-img">
              <Image
                src={insta}
                alt="insta-images"
              />
            </div>
          ))}
        </div>

        <div className="follow-text flex items-center gap-4 bg-white p-3 rounded-2xl">
          <Image
            src={instaFollow}
            alt="insta-follow"
            width={40}
            height={40}
            className="z-5"
          />

          <h2 className="GolosText font-semibold text-xl z-5">
            Follow @Fashique
          </h2>
        </div>
      </div>
    </>
  )
}

export default Follow