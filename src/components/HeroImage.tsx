import logo from "../../public/portfolio.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
        </>
    )
}
export default HeroImage