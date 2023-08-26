import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


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

        < p >
          alskdj alskdf alsdkjf ajad jadlfk jak ljasdlf jaskd jasdk l;a jfksa jsal jksald jkal ja lkjd
        </p>
      </div >

      <div className="relative-parent">
        <button className="prev fa-icon-btn">
          <FontAwesomeIcon icon={faAngleLeft} style={{ fontSize: 30 }} />
        </button>
        <button className="next fa-icon-btn">
          <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 30 }} />
        </button>

        <div className="flex-center-row">
          <div className="img-carousel">
            {carouselImages.map((img) =>
              <Carousel image={img} />)}
          </div>
        </div>
      </div>

      <div className="flex-center-row">
        <button className="request-btn" onClick={handleClick}>
          <Link href="/request">Request Quote</Link>
        </button>
      </div>


      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>
      <h1>a</h1>

    </>
  )
}