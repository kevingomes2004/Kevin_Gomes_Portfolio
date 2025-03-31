import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, ExternalLink, Github, Instagram, Layers, Linkedin, Mail, Braces, Server } from "lucide-react"
import { title } from "process"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Kevin Gomes</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
            <Button asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
            </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <Badge className="px-3 py-1 text-sm" variant="secondary">
              Available for Internships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Kevin</span>
              <br />
              UI/UX Designer and Software Engineer
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              I build exceptional digital experiences with modern technologies. Currently seeking my first internship
              opportunity.
            </p>
            <div className="flex gap-4 pt-4">
                <Button size="lg" asChild>
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                <a href="/Kevin_Gomes CV.pdf" download>
                  Download CV
                </a>
                </Button>
            </div>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/Profile_pic.png?height=320&width=320" alt="John Doe" fill className="object-cover" priority />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate developer with a strong foundation in both frontend and backend technologies. My
                  journey in tech started with a curiosity about how websites work, which led me to dive deep into web
                  development.
                </p>
                <p>
                  I recently doing my degree in Computer Science, where I gained a solid understanding of
                  programming fundamentals, algorithms, and software design principles. During my studies, I worked on
                  various projects that helped me apply theoretical knowledge to practical solutions.
                </p>
                <p>
                  I'm particularly interested in creating intuitive user interfaces and efficient backend systems. I
                  enjoy the challenge of solving complex problems and continuously learning new technologies to improve
                  my skills.
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <Card className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Clean Code</h3>
                <p className="text-sm text-muted-foreground">I write clean, maintainable, and efficient code</p>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Braces className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Problem Solving & Algorithms</h3>
                <p className="text-sm text-muted-foreground">I craft optimized solutions with data structures and algorithms</p>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Frontend Dev</h3>
                <p className="text-sm text-muted-foreground">I build responsive and interactive web applications</p>
              </Card>
              <Card className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Backend Dev</h3>
                <p className="text-sm text-muted-foreground">I develop robust server-side applications</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "HTML & CSS", level: 90 },
              { name: "JavaScript", level: 85 },
              { name: "TypeScript", level: 80 },
              { name: "React", level: 85 },
              { name: "Cloud Functions", level: 50 },
              { name: "SpringBoot", level: 70 },
              { name: "Node.js", level: 60 },
              { name: "Express", level: 60 },
              { name: "MongoDB", level: 60 },
              { name: "SQL", level: 80 },
              { name: "Laravel", level: 50 },
              { name: "Angular", level: 70 },
            ].map((skill, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
                <p className="text-right text-sm text-muted-foreground mt-1">{skill.level}%</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Finance Tracker with GUI",
                description:
                  "Developed a comprehensive Personal Finance Tracker app in Python with a Tkinter GUI, JSON data storage, and OOP principles. Enables CRUD operations.",
                tags: ["Python", "Tkinter GUI", "JSON data storage", "OOP"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Advanced Real-Time Ticket Management System",
                description:
                  "Developed a real-time ticket management system that enabling vendors to add tickets and customers to purchase them dynamically. Implemented WebSockets for live ticket updates, allowing real-time interaction. ",
                tags: ["Angular", "Spring Boot", "MongoDB"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Real Estate Property Marketplace",
                description:
                  "Developed a responsive real estate website allowing users to browse and purchase homes, apartments, and properties. Integrated Google Maps API for real-time property location viewing.",
                tags: ["React", "JavaScript", "Bootstrap"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Survival App for Adventurers - Group Project",
                description:
                  "Worked as a Frontend Developer and UI/UX Designer for a React Native mobile application aimed at hikers, campers, bikers, and wildlife photographers. Designed and developed an intuitive and user-friendly interface using React Native and Figma.",
                tags: ["React Native", "Figma", "Postman", "Clerk"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "AI-Powered Short Video Generator ",
                description:
                  "Developed a full-stack web application enabling users to generate short AI-powered videos. Designed a modern, responsive UI",
                tags: ["Next.js", "React", "Tailwind CSS", "AI", "Clerk", "Neon"],
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Marketing Website for Trail Guard Application ",
                description:
                  "Developed a marketing website for the Trail Guard application utilizing Next.js and Tailwind CSS.",
                tags: ["Next.js", "Tailwind CSS" ],
                image: "/placeholder.svg?height=200&width=400",
              },

            ].map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                {/* <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div> */}
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {/* <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
            {[
              {
                title: "Bachelor of Science in Computer Science",
                organization: "University of Westminster, UK",
                period: "2024 - 2027",
                description:
                  "Currently enrolled in a second-year of a BSc in Computer Science degree program. ",
              },
              {
                title: "Foundation in IIT - Merit Awards",
                organization: "Informatics Institute of Technology",
                period: "2023 - 2024",
                description: "Completed a foundation program in software engineering with merit awards.",
              },
              {
                title: "Learning node,js Linkedin Course",
                organization: "Linkedin Learning",
                period: "2024 - 2024",
                description:
                  "",
              },
              {
                title: "The Complete 2024 Web Development Bootcamp",
                organization: "Udemy",
                period: "2024 - 2024",
                description:
                  "",
              },
              {
                title: "CS50’s Introduction to Computer Science, Harvard University ",
                organization: "Harvard University",
                period: "2024 - present",
                description:
                  "",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex items-start group md:flex-row-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-background z-10 shadow-md md:mx-auto">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <Card className="flex-1 ml-6 md:ml-0 md:mr-6 p-4 md:max-w-md">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-muted-foreground">{item.organization}</span>
                      <Badge variant="outline">{item.period}</Badge>
                    </div>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <p className="text-muted-foreground">
                      I'm currently looking for internship opportunities. Feel free to reach out if you have any
                      questions or would like to discuss potential collaborations.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">kevingomesmathra@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">LinkedIn</p>
                          <p className="font-medium">https://www.linkedin.com/in/kevin-gomes4/</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">GitHub</p>
                          <p className="font-medium">https://github.com/kevingomes2004</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Instagram className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Instagram</p>
                          <p className="font-medium">kevin.gomes.fz</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Send Me a Message</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="font-bold text-xl mb-1">Kevin.dev</div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kevin Gomes. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/kevingomes2004"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kevin-gomes4/"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/kevin.gomes.fz/"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="kevingomesmathra@gmail.com"
              className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

