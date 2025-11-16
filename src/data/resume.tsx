import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Emilian Buza",
  initials: "EB",
  url: "https://emilianbuza.de",
  location: "Deutschland",
  locationLink: "https://www.google.com/maps/place/deutschland",
  description:
    "Software-Ingenieur und Entwickler. Ich liebe es, Dinge zu bauen und Menschen zu helfen.",
  summary:
    "Leidenschaftlicher Softwareentwickler mit Erfahrung in modernen Web-Technologien. Ich habe ein [Studium in Informatik](/#education) absolviert und arbeite an innovativen Projekten, die echten Mehrwert schaffen.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Startseite" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kontakt@emilianbuza.de",
    tel: "+49123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/emilianbuza",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/emilianbuza",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/emilianbuza",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@emilianbuza",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "E-Mail senden",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech Startup GmbH",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Senior Software-Entwickler",
      logoUrl: "/company1.png",
      start: "Januar 2023",
      end: "Heute",
      description:
        "Entwicklung und Wartung von skalierbaren Web-Anwendungen mit React, TypeScript und Node.js. Implementierung von Microservices-Architekturen und CI/CD-Pipelines. Leitung von Code-Reviews und Mentoring von Junior-Entwicklern.",
    },
    {
      company: "Digital Solutions AG",
      badges: [],
      href: "https://example.com",
      location: "Deutschland",
      title: "Full-Stack Entwickler",
      logoUrl: "/company2.png",
      start: "März 2021",
      end: "Dezember 2022",
      description:
        "Entwicklung von kundenspezifischen Web-Anwendungen mit modernen JavaScript-Frameworks. Optimierung der Datenbank-Performance und Implementierung von RESTful APIs. Enge Zusammenarbeit mit dem Design-Team zur Umsetzung von UI/UX-Konzepten.",
    },
    {
      company: "Software-Entwicklung Schmidt",
      href: "https://example.com",
      badges: [],
      location: "Deutschland",
      title: "Junior Entwickler",
      logoUrl: "/company3.png",
      start: "Juni 2019",
      end: "Februar 2021",
      description:
        "Mitarbeit an verschiedenen Web-Projekten und Erlernung moderner Entwicklungspraktiken. Entwicklung von responsiven Benutzeroberflächen und Integration von Backend-Services. Teilnahme an Scrum-Meetings und agiler Softwareentwicklung.",
    },
  ],
  education: [
    {
      school: "Technische Universität",
      href: "https://example.de",
      degree: "Master of Science in Informatik",
      logoUrl: "/uni.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Universität",
      href: "https://example.de",
      degree: "Bachelor of Science in Informatik",
      logoUrl: "/uni.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "Gymnasium",
      href: "https://example.de",
      degree: "Abitur",
      logoUrl: "/school.png",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Portfolio-Website",
      href: "https://emilianbuza.de",
      dates: "Januar 2024 - Heute",
      active: true,
      description:
        "Entwicklung einer modernen Portfolio-Website mit Next.js und TypeScript. Die Website präsentiert meine Projekte und Fähigkeiten in einem ansprechenden Design mit Dark-Mode-Unterstützung.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://emilianbuza.de",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Quelle",
          href: "https://github.com/emilianbuza/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task-Management App",
      href: "https://example.com",
      dates: "März 2023 - August 2023",
      active: true,
      description:
        "Eine vollständige Task-Management-Anwendung mit Echtzeit-Kollaboration. Benutzer können Aufgaben erstellen, zuweisen und den Fortschritt in Echtzeit verfolgen.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "Express",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Quelle",
          href: "https://github.com/emilianbuza/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "E-Commerce Platform",
      href: "https://example.com",
      dates: "September 2022 - Februar 2023",
      active: false,
      description:
        "Entwicklung einer modernen E-Commerce-Plattform mit Warenkorbfunktion, Zahlungsintegration und Produktverwaltung. Implementierung eines Admin-Dashboards für die Verwaltung von Produkten und Bestellungen.",
      technologies: [
        "Next.js",
        "Typescript",
        "Stripe",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Quelle",
          href: "https://github.com/emilianbuza/ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Code & Create Berlin",
      dates: "15. - 17. November 2023",
      location: "Berlin, Deutschland",
      description:
        "Entwicklung einer KI-gestützten Anwendung zur automatischen Erkennung und Klassifizierung von Nachhaltigkeitsprojekten. Das Projekt gewann den zweiten Platz in der Kategorie 'Soziale Innovation'.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/emilianbuza/sustainability-ai",
        },
      ],
    },
    {
      title: "Smart City Hackathon München",
      dates: "8. - 10. September 2023",
      location: "München, Deutschland",
      description:
        "Entwicklung einer mobilen App zur Optimierung von Verkehrsflüssen in Echtzeit unter Verwendung von Open Data der Stadt München. Die Lösung nutzte Machine Learning zur Vorhersage von Verkehrsstaus.",
      image: "",
      links: [],
    },
    {
      title: "FinTech Innovation Challenge",
      dates: "3. - 4. Juni 2023",
      location: "Frankfurt, Deutschland",
      description:
        "Entwicklung eines Blockchain-basierten Systems für sichere und transparente Mikrotransaktionen. Das Team erreichte den dritten Platz.",
      image: "",
      win: "3. Platz",
      links: [
        {
          title: "Präsentation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ],
} as const;
