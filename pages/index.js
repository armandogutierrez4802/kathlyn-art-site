import Head from 'next/head';
import Link from 'next/link';
// import {} from 'next/font/google';
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"

import Carousel from '../components/Carousel';
import { carouselImages } from "@/public/images";

export default function Home() {

  const handleClick = () => {
    return 0;
  }

  return (
    <>
      <Head>
        <title>Kathlyn Gutierrez | Home</title>
        <meta name="description" content="Welcome to the home page for Kathlyn Gutierrez's Art Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-intro">
        <h1>
          Hello! Welcome to my website
        </h1>
        <p>
          alskdj alskdf alsdkjf ajad jadlfk jak ljasdlf jaskd jasdk l;a jfksa jsal jksald jkal ja lkjd
        </p>
      </div>

      <div className="flex-center-row">
        <div className="img-carousel">
          {/* <Carousel /> */}
          {carouselImages.map((img) =>
            <Carousel image={img} />)}
        </div>
      </div>


      <div className="flex-center-row">
        <button className="request-btn" onClick={handleClick}>
          <Link href="/request">Request Quote</Link>
        </button>
      </div>




    </>
  )
}
