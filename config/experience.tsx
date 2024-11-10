import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'Governor house',
    longName: 'Tuition Free Education Program on Latest Technologies',
    subDetail: 'Certified Cloud Applied Generative Ai Enginer',
    url: 'https://www.governorsindh.com/',
    position: 'Student',
    duration: 'Sep 2023 - Present',
    logo: {
      light: '/worked_at_logos/deloitte/Deloitte_logo_black.png',
      dark: '/worked_at_logos/deloitte/Deloittle_logo.png',
    },
    roles: [
      <>
       Contributed to the design and development of a comprehensive .NET payment integration project for a client
       That covered credit card payments and subscription management.
       Introduced Stripe as a new payment provider within the system architecture.
       Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Governor sindh house"
          href="https://www.governorsindh.com/"
          target="_blank"
          rel="noreferrer"
        >
          Governor initiative
        </Link>
      </>,
           <>
           I got 95% in Q1 due to the efforts of my teacher Sir hamza syed
           <Link
             aria-label="Q1 result"
             href="/kl_portfolio/public/certification/Screenshot 2024-11-10 013955.png"
             target="_blank"
             rel="noreferrer"
           >
             I dont know whats going to happen to me in Q2
           </Link>
         </>,
       ],
     },
     SCG: {
       name: 'Freecodecamp',
       longName: 'freecodecamp',
       subDetail: 'A group of devs on youtube that teach every type of computer skills',
       url: 'https://www.freecodecamp.org/',
       position: 'Student',
       duration: 'Feb 2022',
       logo: {
         light: '/worked_at_logos/scg/SCG_400x400.png',
         dark: '/worked_at_logos/scg/SCG.png',
       },
       roles: [
         <>
           The first course that I took on freecodecamp was on ts by hitesh 
           <Link
             aria-label="hitesh choudary"
             href="https://chaicode.com/"
             target="_blank"
             rel="noreferrer"
           >
             FreeCodeCamp has been instrumental in helping me develop my coding skills from the ground up
             Through its structured, project-based curriculum  I learned foundational programming languages like HTML, CSS, and JavaScript, as well as more advanced topics like responsive web design, data structures, algorithms, and front-end libraries. FreeCodeCamp’s hands-on approach, combined with its supportive community and wealth of coding challenges, has allowed me to practice coding regularly and build real-world projects that showcase my progress. This platform has not only equipped me with technical skills but also given me the confidence to tackle complex coding problems and continue advancing in software development.
           </Link>{' '}
           using NextJS and Typescript
         </>,
         <>
           Created multiple failed but helpful project which helped me to improve my programming 
           skills.
         </>,
         <>
           I am currently working on mystery message web application by the help of this course
           <Link
             variant="nextjs"
             href="https://www.freecodecamp.org/"
             target="_blank"
             rel="noreferrer"
           >
             the mystery message is on hold due my upcoming paper
           </Link>{' '}
           did I mention I am currently in class nine
         </>,
         <>
           The assignment that was given I based on my protype I wanted to
         </>,
         <>
           Make a website for my school so I could have class work in the exam
           but I lost motivation to do this but this has given me some motivation
           to do it my schools 
           <Link
             aria-label="Fazaia inter college"
             href="https://www.google.com/search?q=fazaia+inter+college+korangi+creek+karachi+contact+number&sca_esv=55ac1cf8945801b9&rlz=1C1CHBF_enPK1093PK1095&sxsrf=ADLYWIJTAWOyL2CthvZ5wNqxJegcdwnQ9Q%3A1731187010365&ei=QtEvZ5vpFc2K9u8PlKKLiQo&oq=fa&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmZhKgIIADIEECMYJzIKECMYgAQYJxiKBTIQEC4YgAQYxwEYJxiKBRivATIWEC4YgAQYsQMY0QMYQxiDARjHARiKBTIKEAAYgAQYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwFIqCZQ6QRYrxNwAXgBkAEBmAGIAqABvgWqAQMyLTO4AQHIAQD4AQGYAgOgAvADwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEC4YgAQYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAg0QLhiABBhDGNQCGIoFmAMAiAYBkAYKkgcFMS4wLjKgB_s3&sclient=gws-wiz-serp"
             target="_blank"
             rel="noreferrer"
           >
             FIC in short
           </Link>{' '}
           its an army school especificly an airforce school.
         </>,
       ],
     },
     Blotocol: {
       name: 'Code aur chai & Coding with harry',
       longName: 'two legends of corses ',
       subDetail: 'they provide corses in hindi and the person that run code aur has worked with freecodecamp on several occasions.',
       url: 'https://chaicode.com/',
       position: 'Student',
       duration: 'Feb 2024',
       logo: {
         light: '/worked_at_logos/ivp/blotocol_logo-dark.png',
         dark: '/worked_at_logos/ivp/blotocol-logo-white.png',
       },
       roles: [
         <>
           Teachers like them are the ones that motivate me to go forward and learn
         </>,
         <>
           In 2020 I got my trusty laptop and since then I wanted to learn about it for the longest of time
         </>,
         <>
           I dont know I decided to learn all this but I happy I only know the basics of the majority
           but I am only 16 
         </>,
         <>
          This the end for now atleast
         </>,
       ],
     },
   }
   
   export const ExperiencesList = [
     Experiences.Deloitte,
     Experiences.SCG,
     Experiences.Blotocol,
   ]
   