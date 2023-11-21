import React from 'react'
import {projects} from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import platform from '../assets/icons/platform.png'
import mobile from '../assets/icons/mobilejs.png'
import crowdfunder from '../assets/icons/crowdfunder.png'
import crypto from '../assets/icons/crypto.png'
import gigaChat from '../assets/icons/gigaChat.png'
import imernginary from '../assets/icons/imernginary.png'
import scheduler from '../assets/icons/scheduler.png'
import jungle from '../assets/icons/jungle.png'
import realestate from '../assets/icons/realestate.png'
import microblogger from '../assets/icons/microblogger.png'
import MikMok from '../assets/icons/MikMok.png'
import pokedex from '../assets/icons/pokedex.png'
import shirtme from '../assets/icons/shirtme.png'
import stripe from '../assets/icons/stripe.png'
import zoomer from '../assets/icons/zoomer.png'
import portfolio from '../assets/icons/portfolioV1.png'
import tweeter from '../assets/icons/tweeter.png'

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years but these are the ones I hold closest to my heart. I've learned a lot from these projects and I hope you enjoy them as much as I do! 
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
      <div className="flex justify-center  flex-col gap-10 py-10 lg:flex-row lg:flex-wrap-reverse">
          
          
          <div className="basis-1/3 flex-1 hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl py-1 flex justify-center">
              Plant Seller
            </h3>
            <a href="https://github.com/michaelruhl/jungle-ruby">
              <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={jungle}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 ">
              Browse a selection of plants and add them to your cart!
            </h4>
            <p className="text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> Ruby on Rails, PostgreSQL,
              Stripe
            </p>
          </div>
          <div className="basis-1/3 flex-1 hover:shadow-2xl hover:shadow-blue-500">
              <h3 className="text-3xl py-1 flex justify-center">
                Twitter clone
              </h3>
              <a href="https://github.com/michaelruhl/tweeter-SPA">
              <div className='flex flex-row justify-center cursor-pointer'>

<label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
<img alt="arrow" className='flex' src={arrow} />
</div>
                <img
                  alt="thumbnail"
                  src={tweeter}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
              <h4 className="p-4 text-lg text-blue-500 ">
                Twitter clone single page app powered by AJAX.
              </h4>
              <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
                <b className="pr-1">Tech Stack:</b> Express, jQuery, JavaScript,
                Node
              </p>
            </div>
          <div className="basis-1/3 flex-1 hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl py-1 flex justify-center">
              Interview Scheduler
            </h3>
            <a href="https://github.com/michaelruhl/interview_scheduler">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={scheduler}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500">
              React based project to create meetings for students to connect
              with mentors in real-time.
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Axios, Classnames,
              Normalize, Storybook, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1 hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl py-1 flex justify-center">
              JavaScript HTML CSS Game
            </h3>
            <a href="https://zoomergame.surge.sh/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={zoomer}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500">
              Flash browser game built with JavaScript. My high score is 105!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> JavaScript, HTML, CSS
            </p>
          </div>
          <div className="basis-1/3 flex-1 hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl py-1 flex justify-center">
              Next Pokedex
            </h3>
            <a href="https://next-pokedex-bice.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={pokedex}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Built with Next.js and deployed with Vercel. React based SPA for
              gathering Pokémon moves, types, abilities, stats, profiles,
              evolution tree, and strengths & weaknesses.
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Axios, Redux, HTML,
              Bootstrap, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              AI Assisted Real estate
            </h3>
            <a href="https://github.com/michaelruhl/locofy-ai-realestate">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={realestate}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Nextjs app partly generated by Locofy's Figma Plugin. Locofy
              uses AI to enable the transformation of Figma designs into code.
              Multiple coding languages and specifications are supported!
              Amazing.
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Axios, Redux, HTML,
              AntDesign, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Crypto Info Hub
            </h3>
            <a href="https://crypto-ez.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={crypto}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Crypto information gathering hub. Compare price, market cap,
              daily change, rank, 24h volume, all-time high (daily avg),
              relevant news articles and more for hundreds of crypto
              currencies.
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Axios, Redux, HTML,
              AntDesign, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Web3 Crowdfunder App
            </h3>
            <a href="https://crowdfundapp-puce.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={crowdfunder}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Crowdfunder app built with React and Thirdweb. Users can create
              a campaign, contribute Sepolia-ETH (Ethereum) to a campaign, and
              watch (test) funds earned from a campaign deposit directly into
              their crypto wallet. Built using the Sepolia Testnet!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Thirdweb, Tailwind,
              Vite, HTML, Node, Solidity
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Video Share App
            </h3>
            <a href="https://mikmok.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={MikMok}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Comprehensive Video Share Application, sign in with your google
              account, upload a video, comment, like, and search content
              posted by other users! Uploaded videos are playable with volume
              controls, and the best part is... EVERYONE IS VERIFIED!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> React, Axios, Sanity, HTML,
              Google-auth, Next, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Chat GPT App
            </h3>
            <a href="https://giga-chat.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={gigaChat}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Application for interacting with openAi's chatGPT (Generative
              Pre-trained Transformer) which is a chatbot launched in November
              of 2022. Need some coding tips? A coding practice problem?
              Someone (something?) to talk to? Ask away!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> JavaScript, Vite, OpenAI,
              HTML, CSS, Express, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl py-1 flex justify-center">
              Portfolio v.1
            </h3>
            <a href="https://michaelruhlportfolio.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={portfolio}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
            Here is the first online portfolio I created to showcase my projects, skills, and experience! Take a look and see how far I've come!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> Next, Tailwind,
              HTML, Typescript, Git, Node, Vercel
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Image Generation App
            </h3>
            <a href="https://imernginary.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={imernginary}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              DALL-E clone using openAi's API. Type in your name and either
              pick a random prompt or type in your own to generate an image
              100% made by AI! Click the share button to share the image with
              the community.
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> JavaScript, Vite, OpenAI,
              HTML, CSS, Express, MongoDB, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Shirt Builder With AI App
            </h3>
            <a href="https://shirtme.vercel.app">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={shirtme}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Using three.js to render a detailed 3D model complete with
              shadows and lighting along with openAi's DALL.E API, design your
              own shirt with shirtme! Upload a file for shirt design or logo
              design, pick a color or ask chatGPT to do it for you!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b>React, Express, JavaScript,
              Three.js, Vite, HTML, CSS, Git, Node
            </p>
          </div>
          
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Ecommerce Stripe App
            </h3>
            <a href="https://mikes-ecommerce-stripe.vercel.app">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={stripe}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Using Stripe's amazing API, add items to your cart and checkout
              with test credit card# 4242 4242 4242 4242 to see the magic
              happen!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b>React, Next, JavaScript,
              Stripe, Sanity, HTML, CSS, Git, Node
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Stripe Connect Platform
            </h3>
            <a href="https://github.com/michaelruhl/monetize-platform/tree/master/newsletter-platform">
            <div className='flex flex-row justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={platform}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              A monetized creator platform for Authors! Create a Newsletter capable of producing multiple issues, and charge your readers a monthly subscription fee! Of course, the platform takes a small cut of the profits ;) - All powered by Stripe Connect!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> Ruby, Rails, Devise,
              HTML, ERB, Tailwind, Stripe, Git, Node, Sidekiq, Redis
            </p>
          </div>
          <div className="basis-1/3 flex-1  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              Microblogger
            </h3>
            <a href="https://social-media-platform-sepia.vercel.app/">
            <div className='flex flex-row justify-center cursor-pointer'>

            <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={microblogger}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
            This is a full-stack social networking project powered by Next13 where users can seamlessly connect, share, and engage with their communities through an intuitive and feature-rich platform. Sign up with easily with Clerk, create a profile, and start posting!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> Next, Clerk, Tailwind,
              HTML, Typescript, Git, Node, Vercel, MongoDB
            </p>
          </div>
          <div className="basis-1/3 relative  hover:shadow-2xl hover:shadow-blue-500">
            <h3 className="text-3xl  py-1 flex justify-center">
              MobileJobSearcher
            </h3>
            <a href="https://github.com/michaelruhl/MobileJobSearcher/tree/master">
            <div className='flex flex-row p-2 justify-center cursor-pointer'>

              <label className='flex text-blue-500 cursor-pointer italic pr-2'>Click to see site or codebase</label>
              <img alt="arrow" className='flex' src={arrow} />
              </div>
              <img
                alt="thumbnail"
                src={mobile}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
              />
            </a>
            <h4 className="p-4 text-lg text-blue-500 flex justify-center">
              Using the JSearch API, MobileJobSearcher is an intuitive, modern
              looking React Native Mobile application. Search for Nearby and
              Popular jobs from the palm of your hand!
            </h4>
            <p className="text-gray-800 py-1 dark:text-blue-500 flex justify-center">
              <b className="pr-1">Tech Stack:</b> JavaScript, React Native,
              HTML, CSS, Expo, Git, Node
            </p>
          </div>           
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects