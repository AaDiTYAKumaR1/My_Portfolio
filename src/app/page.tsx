"use client";
import Image from "next/image";
import IconCloud from "@/components/ui/icon-cloud";
import HomeIcon from "@/components/HomeIcon";
import RetroGrid from "@/components/ui/retro-grid";
import { useTheme } from "next-themes";
import { BoxReveal } from "@/components/ui/box-reveal";
import Particles from "@/components/ui/particles";
import Link from "next/link";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { RectangleEllipsis } from "lucide-react";
import Blog from "@/components/Blog";
import ContactForm from "@/components/Myform";
import Footer from "@/components/Footer";
export default function Home() {
  const { theme, setTheme } = useTheme();

  const slugs = [
    "typescript",
    "javascript",
    // "dart",
    "java",
    "react",
    // "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    // "cypress",
    "docker",
    "git",
    // "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  // console.log(theme)
  return (
    <main>
      {theme == "dark" ? (
        <Particles className={"absolute inset-0 -z-10"} />
      ) : (
        <RetroGrid className={"absolute inset-0 -z-10"} />
      )}
      <section id="home" className="container px-4 py-10  mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <BoxReveal boxColor={"#121212"} duration={0.5}>
            <h1 className="text-3xl lg:text-6xl leading-snug font-bold  text-gray-800 dark:text-gray-200 md:text-4xl">
              Hey I'am{" "}
              <span className="text-primary font-extrabold">Aditya</span>
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"#121212"} duration={0.5}>
            <h2 className="text-xl lg:text-6xl leading-snug font-bold  text-gray-800 dark:text-gray-200 md:text-2xl">
              I'am Full Stack Web Developer
            </h2>
          </BoxReveal>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            <br className="hidden lg:block" />
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full  mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/my_photo-1.jpg"
            width={500}
            height={300}
            alt="my-photo"
          />
          
        </div>
      </section>
      {/* <div>
            <GoogleGeminiEffect pathLengths={[1,2,3,5,7]}
            title="Build with Aceternity UI"
            description="Aceternity UI is a modern UI toolkit for web makers based on the popular Tailwind CSS framework."
            cta="Get Started"
            ctaLink="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/argon-dashboard?ref=aceternity-ui"
            />
          </div> */}
      <section className="lg:py-12     mt-10" id="projects">
        <div className="container lg:px-4 mx-auto ">
          <h2 className="text-4xl font-extrabold text-center pt-8 text-gray-800  dark:text-gray-200">
            Projects
          </h2>
          <div className="grid grid-cols-1 lg:gap-8 mt-8 px-4  lg:grid-cols-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/social-banner.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/Muzik.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
      <section className="lg:py-12    mt-10" id="about">
        <div className="container lg:px-4 mx-auto">
          <h2 className="text-4xl font-extrabold text-center pt-8   text-white  ">
            About
          </h2>
          <div className=" px-4 py-10   lg:space-x-8 lg:flex lg:flex-row">
            <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
              <HomeIcon />
            </div>
            <div className="w-full grid grid-cols-8  lg:grid-cols-12 gap-12 lg:gap-12 mt-4 lg:mt-0 lg:w-1/2">
            
            <div className="col-span-4   bg-accent-700 flex flex-col items-center w-32 h-28 rounded-xl ">
            <Image src="https://www.priyanshusaini.co/img/react.png" width={112} alt={"react"} height={24}  />
            <h1>React</h1>
            </div>
            <div className="col-span-4  bg-gray-200 flex flex-col items-center w-32 h-28 rounded-xl ">
            <Image src="https://www.priyanshusaini.co/img/nodejs.png" width={112} alt={"react"} height={24}  />
            <h1>Node.js</h1>
            </div>
            <div className="col-span-4 bg-gray-200 flex flex-col items-center w-32 h-28 rounded-xl ">
            <Image src="/mongo.png" width={128} alt={"react"} height={24}  />
            <h1>MongoDB</h1>
            </div>
            <div className="col-span-4 bg-gray-200 flex flex-col items-center w-32 h-28 rounded-xl ">
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width={128} alt={"react"} height={24}  />
            <h1>Git</h1>
            </div>
            <div className="col-span-4 bg-gray-200 flex flex-col items-center w-32 h-28 rounded-xl ">
            <Image src="https://www.priyanshusaini.co/img/typescript.png" width={112} alt={"react"} height={24}  />
            <h1>TypeScript</h1>
            </div>
            <div className="col-span-4 bg-gray-200 flex flex-col items-center justify-center w-32 h-28 rounded-xl ">
            <Image src="https://www.priyanshusaini.co/img/next-js.svg" width={112} alt={"react"} height={112}  />
            {/* <h1>Next.js</h1> */}
            </div>
            <div className="col-span-4 flex items-center flex-col bg-black justify-center  w-32 h-28 rounded-xl ">
            <Image src="https://www.priyanshusaini.co/img/react-native.png" width={112} alt={"react"} height={24}  />
            <h1>React Native</h1>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center w-32 h-28 rounded-xl ">
            <Image src="/gitweb.png" width={112} alt={"react"} height={24}  />
            <h1>Git</h1>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen flex items-center justify-center  ">
        <ContactForm/>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  );
}
