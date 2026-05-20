import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="w-full h-150  bg-cover   bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroImage/discoverIdea.jpg')" }}
        >
          {/* Hero content goes here */}
          <div className="bg-black/40 h-full ">
            <div className="container mx-auto px-24  flex items-center justify-center md:justify-start  h-full ">
            <div className="text-center md:text-start  text-white">
              <h1 className="text-4xl font-bold mb-4">
                Discover Innovative Startup Ideas
              </h1>
              <p className="mb-6 max-w-2xl mx-auto">
                Browse groundbreaking ideas from entrepreneurs and creators
                around the world. Find inspiration, explore trends, and uncover
                the next big opportunity.
              </p>
              <Link href={"/ideas"}>
                <Button className="bg-orange-500 rounded ">
                  Explore Ideas
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="w-full h-150  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroImage/share.jpg')" }}
        >
          {/* Hero content goes here */}
          <div className="bg-black/40 h-full ">
            <div className="container mx-auto  px-24  flex items-center justify-center md:justify-start  h-full ">
            <div className="text-center md:text-start  text-white">
              <h1 className="text-4xl font-bold mb-4">
                Share Your Startup Vision
              </h1>
              <p className="mb-6 max-w-2xl mx-auto">
                Have a brilliant concept? Publish your idea, showcase your
                creativity, and connect with a community eager to support and
                discuss your innovation.
              </p>
              <Link href={"/ideas"}>
                <Button className="bg-orange-500 rounded ">
                  Explore Ideas
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="w-screen border  h-150  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/heroImage/validate.jpg')" }}
        >
          {/* Hero content goes here */} 
          <div className="bg-black/40 h-full">
            <div className="container mx-auto  px-24  flex items-center justify-center md:justify-start h-full ">
            <div className="text-center md:text-start  text-white">
              <h1 className="text-4xl font-bold mb-4">
                Get Feedback and Validate Your Idea
              </h1>
              <p className="mb-6 max-w-2xl mx-auto">
                Receive comments, suggestions, and discussions from innovators
                and experts to refine your concept and turn it into a stronger
                business opportunity.
              </p>
              <Link href={"/ideas"}>
                <Button className="bg-orange-500 rounded ">
                  Explore Ideas
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
