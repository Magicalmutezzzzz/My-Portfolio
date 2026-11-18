import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  GitBranch,
  Globe,
  CameraIcon,
  Mail,
  Menu,
  Terminal,
  X,
  BriefcaseBusiness,
  Atom,
  FileCode2,
  Database,
  Server,
  Layers3,
  Sparkles,
  Braces,
  Sun,
  Moon
} from "lucide-react";
import { m as motion } from "framer-motion";
import kvImg from "./assets/kv-img-original.jpg";
import kvSketchImg from "./assets/kv-img-sketch.jpg";




const projects = [
  {
    number: "01",
    name: "Aqua Sonar Network Security System",
    category: "DEFENCE TECHNOLOGY",
    initials: "ASN",
    description:
      "A defence-oriented sonar network security concept focused on underwater monitoring and network-based threat detection. Secured second position in the IIT Bombay Eureka Idea Pitching Competition.",
    tags: ["Defence Technology", "Sonar Networks", "Innovation"],
    color: "cyan",
    link: "https://asnss.vercel.app",
    linkLabel: "View Project",
  },
  {
    number: "02",
    name: "Life Mirror for Alzheimer’s Patients",
    category: "AI & HEALTHCARE",
    initials: "LM",
    description:
      "An Alzheimer’s-focused voice-to-text diary concept designed to support personal memory documentation. The project was selected among the top 150 teams at Hackstasy Hackathon.",
    tags: ["AI", "Voice-to-Text", "Healthcare"],
    color: "purple",
    link: "https://github.com/Magicalmutezzzzz/Personal-Diary",
    linkLabel: "View GitHub Repository",
  },
  {
    number: "03",
    name: "Gamified Disaster Preparedness & Response System",
    category: "DISASTER PREPAREDNESS",
    initials: "LS",
    description:
      "A gamified disaster preparedness and response education platform designed around learning modules, video lessons, quizzes, progress tracking, and practical preparedness training.",
    tags: ["Flask", "Python", "MongoDB", "JWT"],
    color: "green",
    link: "https://gamified-disaster-preparedness-and.onrender.com",
    linkLabel: "View Project",
  },
  {
    number: "04",
    name: "E-Commerce Store for CSIR-NIScPR, New Delhi",
    category: "E-COMMERCE",
    initials: "CSIR",
    description:
      "An e-commerce store built for the Council of Scientific and Industrial Research – National Institute of Science Communication and Policy Research in New Delhi.",
    tags: ["E-Commerce", "CSIR-NIScPR", "Full Stack"],
    color: "orange",
    link: "https://csir-niscpr-book-seller-1.onrender.com",
    linkLabel: "View Project",
  },
  {
    number: "05",
    name: "ResQTech",
    category: "BLOCKCHAIN & VERIFICATION",
    initials: "RQ",
    description:
      "A blockchain and NFC-based verification system developed as a hackathon project for the Aviothic 2.0 event.",
    tags: ["Blockchain", "NFC", "Verification"],
    color: "cyan",
    link: "https://github.com/Magicalmutezzzzz/Aviothic-2.0_ResQTech",
    linkLabel: "View GitHub Repository",
  },
  {
    number: "06",
    name: "Personal Finance Dashboard",
    category: "FINTECH",
    initials: "PF",
    description:
      "A personal finance dashboard project for organizing financial information and tracking day-to-day money management.",
    tags: ["Finance", "Dashboard", "Web Development"],
    color: "purple",
    link: "https://github.com/Magicalmutezzzzz/Personal-Finance-Dashboard",
    linkLabel: "View GitHub Repository",
  },
];

const skills = [
  { number: "01", name: "React", category: "FRONTEND" },
  { number: "02", name: "TypeScript", category: "LANGUAGE" },
  { number: "03", name: "JavaScript", category: "LANGUAGE" },
  { number: "04", name: "HTML & CSS", category: "WEB DEVELOPMENT" },
  { number: "05", name: "Python", category: "PROGRAMMING" },
  { number: "06", name: "Flask", category: "BACKEND" },
  { number: "07", name: "MongoDB", category: "DATABASE" },
  { number: "08", name: "Git & GitHub", category: "VERSION CONTROL" },
  { number: "09", name: "Tailwind CSS", category: "STYLING" },
  { number: "10", name: "OpenAI API", category: "AI INTEGRATION" },
  { number: "11", name: "JWT", category: "AUTHENTICATION" },
  { number: "12", name: "C++", category: "PROGRAMMING" },
];
const skillIcons = [
  Atom,
  FileCode2,
  Braces,
  Globe,
  Terminal,
  Server,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  Code2,
  Cpu,
];

const profileSections = [
  {
    title: "Work Experience",
    items: [
      { label: "INTERNSHIP", title: "Full-Stack Software Developer — CSIR-NIScPR", description: "Completed an internship at the Council of Scientific and Industrial Research – National Institute of Science Communication and Policy Research.", link: "https://lnkd.in/p/dcbpjk5y" },
      { label: "FREELANCE · AUG 2025–PRESENT", title: "Freelance Software Engineer — Prathamesh Enterprises", description: "Working as a freelance software engineer at Prathamesh Enterprises.", link: "https://prtu.in" },
      { label: "STUDENT COORDINATOR", title: "English Club — Technical Debate", description: "Hosted a technical debate event representing the English Club, Mic Masters — Battle of Witzz.", link: "#" },
      { label: "CAMPUS AMBASSADOR", title: "ISEA, Campus Crew & VPNSECCON", description: "Worked as a campus ambassador with ISEA, Campus Crew, VPNSECCON Cyber Security, and others.", link: "https://www.linkedin.com/in/karamveer340" },
      { label: "CONTRIBUTOR · ECSOC 2026", title: "Elite Coders Summer of Code", description: "Contributor in the Elite Coders Summer of Code (ECSoC) 2026 cohort.", link: "https://lnkd.in/p/djNijBgH" },
    ],
    link: "#",
  },
  {
    title: "Achievements & Leadership",
    items: [
      { label: "ISRO IIRS", title: "92% Course Grade", description: "Completed an ISRO Indian Institute of Remote Sensing course with a 92% grade.", link: "https://lnkd.in/p/dADyTVSU" },
      { label: "NASA · OPEN SCIENCE", title: "Open Science & Open Science 101", description: "Completed NASA Open Science and Open Science 101 training, earning two badges.", link: "https://www.credly.com/badges/f4e6d7e3-c7f5-43cd-a562-07b7c54f33ba/public_url" },
      { label: "GOOGLE GENAI EXCHANGE", title: "Diamond Tier · Google Certified", description: "Top-ranked in the program, achieving Diamond Tier and Google certification, with six badges.", link: "https://www.credly.com/users/karamveer-singh.c400fca8" },
      { label: "MICROSOFT LEARN", title: "10 Badges · 2 Trophies", description: "Earned ten badges and two trophies through Microsoft Learn.", link: "https://learn.microsoft.com/api/achievements/share/en-in/Karamveersingh-6197/2JE3RNYV?sharingId=F3519159A599CA39" },
      { label: "1ST RANK", title: "Technical Quiz Competition", description: "Placed first in a technical quiz competition.", link: "#" },
      { label: "2ND RANK", title: "E-Cell IIT Bombay Eureka Idea Pitching", description: "Placed second in the idea pitching competition at E-Cell IIT Bombay Eureka.", link: "https://lnkd.in/p/dm5mhCm4" },
      { label: "FOUNDER & COORDINATOR", title: "English Club — Kanpur Institute of Technology", description: "Founded and coordinate the English Club at Kanpur Institute of Technology, 2024–present.", link: "#" },
      { label: "EVENT HEAD & COORDINATOR", title: "Mic Masters — Battle of Witzz", description: "Led event planning and coordination for Mic Masters — Battle of Witzz.", link: "#" },
      { label: "TOP 5", title: "Savvy Indians Technical Quiz", description: "Placed among the top five in the Savvy Indians technical quiz.", link: "#" },
      { label: "NPTEL SWAYAM", title: "Python Programming · 78/100", description: "Completed the Python Programming course through the NPTEL SWAYAM portal, scoring 78 out of 100.", link: "#" },
      { label: "GOOGLE GENAI EXCHANGE", title: "Google GenAI Exchange Program", description: "Google GenAI Exchange Program achievement.", link: "https://lnkd.in/p/dHW9h2kY" },
      { label: "EXCELLENCE AWARD", title: "First-Year Excellence Award — Kanpur Institute of Technology", description: "Received a first-year excellence award at Kanpur Institute of Technology.", link: "https://lnkd.in/p/dfGybrVh" },
      { label: "EXCELLENCE AWARD", title: "Second-Year Excellence Award — Kanpur Institute of Technology", description: "Received a second-year excellence award  at Kanpur Institute of Technology.", link: "#" },
      { label: "BEST SOFTWARE ENGINEER · 2026", title: "Excellence Award — PRTU Association", description: "Named Best Software Engineer of the Year 2026 by the PRTU Association.", link: "https://lnkd.in/p/dfcKtQyS" },
    ],
    link: "https://lnkd.in/p/djNijBgH",
  },
  {
    title: "Hackathons & Competitions",
    items: [
      { label: "TOP 30", title: "HackGenesis — HackIndia", description: "Placed among the top 30 at HackGenesis by HackIndia, hosted by Christ (Deemed to be University).", link: "#" },
      { label: "TOP 50", title: "InnoHacks —by MLH", description: "Placed among the top 50 at InnoHacks by MLH, hosted by KIET University, NCR Delhi.", link: "https://lnkd.in/p/duHJUnJT" },
      { label: "1ST RUNNER-UP", title: "The Ultimate Idea Pitching Competition", description: "Earned first runner-up at the E-Cell IIT Bombay idea pitching competition.", link: "https://lnkd.in/p/dm5mhCm4" },
      { label: "TOP 50", title: "Policy Hackathon — IIT Kanpur", description: "Placed among the top 50 at the IIT Kanpur Policy Hackathon.", link: "https://lnkd.in/p/daXGZJQW" },
      { label: "TOP 150", title: "Hackstacy — SRM IST Delhi-NCR", description: "Selected among the top 150 teams at Hackstacy, SRM IST Delhi-NCR.", link: "https://lnkd.in/p/dy-_znwr" },
      { label: "TOP 65", title: "NexHack 1.0 — IITM Janakpuri", description: "Placed among the top 65 at NexHack 1.0 in IITM Janakpuri, New Delhi.", link: "https://lnkd.in/p/duukHYAN" },
      { label: "TOP 100", title: "Aviothic 2.0 — Kanpur Institute of Technology", description: "Placed among the top 100 at Aviothic 2.0, hosted by Kanpur Institute of Technology.", link: "https://lnkd.in/p/d8F3NbzN" },
      { label: "ONLINE", title: "WeHack", description: "Participated in the WeHack online hackathon.", link: "https://lnkd.in/p/dX_s93-e" },
      { label: "TOP 15 · 2026", title: "HackIndia AI & CyberTech Hackathon", description: "Placed among the top 15 teams at the HackIndia AI & CyberTech Hackathon 2026, held at Kanpur Institute of Technology.", link: "https://lnkd.in/p/d69HXe8P" },
    ],
  },
  {
    title: "Workshops & Events",
    items: [
      { label: "CYBER SECURITY", title: "FOSS United Workshop — CSJMU", description: "Attended the FOSS United cyber security workshop at CSJMU.", link: "https://lnkd.in/p/d7aZ9Bne" },
      { label: "IIT KANPUR", title: "Samanway Event", description: "Participated in the Samanway event at IIT Kanpur.", link: "https://lnkd.in/p/d4YkiHiC" },
      { label: "CAMPUS EVENT", title: "Srijan Induction Program", description: "Participated in the Srijan induction program.", link: "#" },
      { label: "DATA ANALYTICS", title: "Jobaaj Learning Workshop", description: "Attended the Jobaaj Learning data analytics workshop.", link: "https://lnkd.in/p/dsun9SR5" },
      { label: "CYBER SECURITY", title: "HP Introduction to Cyber Security", description: "Completed HP's introduction to cyber security workshop.", link: "https://lnkd.in/p/d7tFxHZR" },
      { label: "CYBER HYGIENE", title: "ISEA Cyber Hygiene Workshop", description: "Attended an ISEA cyber hygiene workshop.", link: "https://lnkd.in/p/d8eKu-uD" },
      { label: "MEMBER · 2024–PRESENT", title: "ISEA Government Member", description: "Member of ISEA since 2024.", link: "#" },
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    description: "Let's connect professionally.",
    handle: "Connect with me",
    icon: BriefcaseBusiness,
    href: "https://linkedin.com/in/karamveer340",
    number: "01",
  },
  {
    name: "GitHub",
    description: "Explore my code and projects.",
    handle: "View repositories",
    icon: GitBranch,
    href: "https://github.com/magicalmutezzzzz",
    number: "02",
  },
  {
    name: "Instagram",
    description: "A little more beyond the code.",
    handle: "Follow along",
    icon: CameraIcon,
    href: "https://instagram.com/Magical.mutezzzzz",
    number: "03",
  },
  {
    name: "Email",
    description: "Have an idea? Send me a message.",
    handle: "241317@kit.ac.in",
    icon: Mail,
    href: "mailto:241317@kit.ac.in",
    number: "04",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-dash">—</span>
      <span>{children}</span>
    </div>
  );
}

function ProjectCarousel({
  children,
  projectCount,
}: {
  children: ReactNode;
  projectCount: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const carouselMetricsRef = useRef({
    cardOffsets: [] as number[],
    maxScroll: 0,
  });
  const scrollFrameRef = useRef<number | null>(null);

  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [projectIndex, setProjectIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measureCarousel = () => {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>(".project-card")
      );
      const firstOffset = cards[0]?.offsetLeft ?? 0;

      carouselMetricsRef.current = {
        cardOffsets: cards.map((card) => card.offsetLeft - firstOffset),
        maxScroll: Math.max(0, track.scrollWidth - track.clientWidth),
      };
    };

    measureCarousel();
    const resizeObserver = new ResizeObserver(measureCarousel);
    resizeObserver.observe(track);
    track.querySelectorAll(".project-card").forEach((card) => {
      resizeObserver.observe(card);
    });
    window.addEventListener("resize", measureCarousel, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureCarousel);
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [projectCount]);

  const scrollToProject = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const { cardOffsets } = carouselMetricsRef.current;
    if (!cardOffsets.length) return;

    const nextIndex = Math.max(
      0,
      Math.min(index, cardOffsets.length - 1)
    );

    track.scrollTo({
      left: cardOffsets[nextIndex],
      behavior: "smooth",
    });

    setProjectIndex(nextIndex);
  };

  const handleScroll = () => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const track = trackRef.current;
      const { cardOffsets, maxScroll } = carouselMetricsRef.current;
      if (!track || !cardOffsets.length) return;

      const scrollLeft = track.scrollLeft;
      const nextProgress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const nextIndex = cardOffsets.reduce((closest, offset, index) =>
        Math.abs(offset - scrollLeft) < Math.abs(cardOffsets[closest] - scrollLeft)
          ? index
          : closest,
      0);

      setScrollProgress((current) =>
        Math.abs(current - nextProgress) < .002 ? current : nextProgress
      );
      setProjectIndex((current) => current === nextIndex ? current : nextIndex);
    });
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType !== "mouse") return;
    if (event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("a, button")) return;

    const track = trackRef.current;
    if (!track) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const track = trackRef.current;

    if (!track || !dragRef.current.active) return;

    const distance =
      event.clientX - dragRef.current.startX;

    if (Math.abs(distance) > 5) {
      dragRef.current.moved = true;
    }

    if (dragRef.current.moved) {
      track.scrollLeft =
        dragRef.current.scrollLeft - distance;
    }
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const track = trackRef.current;

    if (!track) return;

    dragRef.current.active = false;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    if (dragRef.current.moved) {
      window.setTimeout(() => {
        dragRef.current.moved = false;
      }, 80);
    }
  };

  return (
    <div className="project-carousel">

      {/* SECTION HEADER */}

      <div className="section-topline">
        <div className="section-label">
          <span>01</span>
          <span className="label-dash">—</span>
          <span>SELECTED PROJECTS</span>
        </div>

        <div className="slider-controls">
          <button
            onClick={() => scrollToProject(projectIndex - 1)}
            disabled={projectIndex === 0}
            aria-label="Previous project"
          >
            <ArrowLeft size={19} />
          </button>

          <button
            onClick={() => scrollToProject(projectIndex + 1)}
            disabled={projectIndex >= projectCount - 1}
            aria-label="Next project"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      {/* HEADING */}

      <div className="section-heading-row">
        <h2 className="section-heading">
          Major
          <br />
          <span>Projects.</span>
        </h2>

        <div className="project-heading-info">
          <p>
            Ideas in progress. Problems being solved.
          </p>

          <span>
            EXPLORE THE DIGITAL LAB <ArrowDownRight size={15} />
          </span>
        </div>
      </div>

      {/* 3D CAROUSEL */}

      <div className="project-carousel-stage">

        <div
          ref={trackRef}
          className="projects-track"
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClickCapture={(event) => {
            if (dragRef.current.moved) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              scrollToProject(projectIndex + 1);
            }

            if (event.key === "ArrowLeft") {
              scrollToProject(projectIndex - 1);
            }
          }}
          tabIndex={0}
          role="region"
          aria-label={`Project showcase, ${projectCount} projects. Scroll horizontally or use the previous and next buttons.`}
        >
          {children}
        </div>

        {/* SCROLL PROGRESS */}

        <div className="project-progress">
          <div className="project-progress-track">
            <motion.div
              className="project-progress-fill"
              animate={{
                width: `${scrollProgress * 100}%`,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />
          </div>

          <span>
            {String(projectIndex + 1).padStart(2, "0")}
            <span> / </span>
            {String(projectCount).padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* FOOTER */}

      <div className="project-bottom-note">
        <span>
          <ArrowLeft size={13} />
          DRAG / SWIPE TO EXPLORE
          <ArrowRight size={13} />
        </span>

        <span>EVERY IDEA STARTS SOMEWHERE.</span>
      </div>

    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <>
          <Sun size={17} />
          <span>LIGHT MODE</span>
        </>
      ) : (
        <>
          <Moon size={17} />
          <span>DARK MODE</span>
        </>
      )}
    </button>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portraitSketch, setPortraitSketch] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenuOpen(false);
  };

  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollTo("home");
          }}
          aria-label="Karamveer Singh home"
        >
          KS<span>.</span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("journey")}>Experience</button>
          <button onClick={() => scrollTo("about")}>About</button>

          <button
            className="mobile-contact-link"
            onClick={() => scrollTo("contact")}
          >
            Let's connect <ArrowUpRight size={16} />
          </button>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />

          <button
            className="nav-contact"
            onClick={() => scrollTo("contact")}
          >
            LET'S TALK <ArrowUpRight size={16} />
          </button>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero section-shell" id="home">
        <div className="hero-content">
          <motion.div
            className="status-pill"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </motion.div>

          <motion.p
            className="eyebrow hero-eyebrow"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DEVELOPER · AI · TECHNOLOGY
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            KARAMVEER
            <br />
            <span>SINGH.</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Building the future,
            <br />
            <span>one idea at a time.</span>
          </motion.h2>

          <p className="hero-description">
            I explore the intersection of software, artificial intelligence,
            and creative technology to build digital experiences that matter.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={() => scrollTo("work")}
            >
              EXPLORE PROJECTS <ArrowDown size={17} />
            </button>

            <a
              className="button button-secondary"
              href="https://github.com/magicalmutezzzzz"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} /> GITHUB
            </a>
          </div>

          <div className="hero-footnote">
            <span>
              <Cpu size={15} /> CREATIVE ENGINEERING
            </span>
            <span>
              <Terminal size={15} /> CONSTANTLY BUILDING
            </span>
          </div>
        </div>


          {/* Animated AI Technology Core */}
          {/* INTERACTIVE 3D NEURAL ENVIRONMENT */}

          <motion.div
            className="hero-3d-shell"
            initial={false}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Ambient background */}
            <div className="hero-3d-ambient" />

            {/* Main 3D environment */}
            <div className="hero-3d-scene">

              <div className="hero-3d-grid" />

              {/* Orbital rings */}
              <div className="hero-3d-orbit orbit-a" />
              <div className="hero-3d-orbit orbit-b" />
              <div className="hero-3d-orbit orbit-c" />

              {/* Top information */}
              <div className="hero-3d-header">
                <div>
                  <span className="hero-3d-index">KS / 001</span>
                  <p>NEURAL TECHNOLOGY ENGINE</p>
                </div>

                <span className="hero-3d-live">
                  <i /> LIVE
                </span>
              </div>

              {/* Floating 3D software terminal. */}
              <div className="hero-3d-model" aria-hidden="true">
                <div className="terminal-scene">
                  <div className="terminal-circuit-plane">
                    <span className="terminal-trace trace-a" />
                    <span className="terminal-trace trace-b" />
                    <span className="terminal-trace trace-c" />
                  </div>
                  <div className="software-terminal">
                    <div className="terminal-depth" />
                    <div className="terminal-face">
                      <div className="terminal-topbar">
                        <div className="terminal-lights"><i /><i /><i /></div>
                        <span>workspace / app.tsx</span>
                        <span className="terminal-live-tag">LIVE</span>
                      </div>
                      <div className="terminal-editor">
                        <div className="terminal-line"><span>01</span><code><b>import</b> {'{ useState }'} <b>from</b> <em>'react'</em>;</code></div>
                        <div className="terminal-line"><span>02</span><code><b>const</b> <strong>build</strong> = <b>async</b> () =&gt; {'{'}</code></div>
                        <div className="terminal-line"><span>03</span><code>&nbsp;&nbsp;<b>const</b> signal = <b>await</b> connect();</code></div>
                        <div className="terminal-line"><span>04</span><code>&nbsp;&nbsp;<b>return</b> signal.<strong>render</strong>();</code></div>
                        <div className="terminal-line"><span>05</span><code>{'}'}</code></div>
                        <div className="terminal-line"><span>06</span><code><b>export default</b> build;<i className="terminal-cursor" /></code></div>
                      </div>
                      <div className="terminal-statusbar">
                        <span><i /> BUILD SUCCESSFUL</span>
                        <span>TSX&nbsp; / &nbsp;UTF-8</span>
                      </div>
                    </div>
                  </div>
                  <div className="terminal-float-tag tag-compile"><i /> COMPILE / READY</div>
                  <div className="terminal-float-tag tag-latency">12ms <small>RESPONSE</small></div>
                </div>
              </div>

              {/* Floating technology panels */}
              <div className="hero-3d-panel panel-code">
                <Code2 size={19} />
                <span>CODE</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="hero-3d-panel panel-ai">
                <Cpu size={19} />
                <span>AI ENGINE</span>
                <small>INTELLIGENCE</small>
              </div>

              <div className="hero-3d-panel panel-network">
                <Globe size={19} />
                <span>NETWORK</span>
                <small>CONNECTED</small>
              </div>

              {/* Floating particles */}
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={index}
                  className="hero-3d-particle"
                  style={{
                    left: `${(index * 41 + 7) % 95}%`,
                    top: `${(index * 53 + 9) % 90}%`,
                    "--particle-duration": `${3 + (index % 4)}s`,
                    "--particle-delay": `${(index % 6) * 0.5}s`,
                  } as CSSProperties}
                />
              ))}

              {/* Bottom system information */}
              <div className="hero-3d-footer">
                <span>CREATIVE ENGINEERING</span>
                <span className="hero-3d-system">
                  <i /> SYSTEM ONLINE
                </span>
              </div>

            </div>

            {/* External decorative information */}
            <div className="hero-3d-caption">
              <span>INTERACTIVE 3D ENVIRONMENT</span>
              <span>ROTATION / ACTIVE</span>
            </div>

          </motion.div>

   
 
 
 
        <div className="hero-bottom-line">
          <span>PORTFOLIO / 2026</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-label="Explore innovate build create">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>
              EXPLORE <b>✳</b> INNOVATE <b>✳</b> BUILD WHAT'S NEXT <b>✳</b>{" "}
              CODE <b>✳</b> CREATE <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
     <section className="projects-section section-shell" id="work">
  <ProjectCarousel projectCount={projects.length}>
    {projects.map((project) => (
      <motion.article
        className="project-card"
        key={project.number}
      >
        <div className="project-meta">
          <span>
            {project.number} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <span>{project.category}</span>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-art art-${project.color}`}
          aria-label={`Explore ${project.name}`}
        >
          <div className="art-grid" />
          <div className="art-orbit" />

          <span className="art-initials">
            {project.initials}
          </span>

          <span className="art-signature">
            K.S. / DIGITAL LAB
          </span>

          <span className="art-arrow">
            <ArrowUpRight size={22} />
          </span>
        </a>

        <div className="project-title-row">
          <h3>{project.name}</h3>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-open"
            aria-label={`Open ${project.name}`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.article>
    ))}
  </ProjectCarousel>
</section>

      {/* SKILLS */}
            {/* 3D TECHNOLOGY UNIVERSE */}
      <section className="skills-3d-section" id="skills">

        <div className="skills-3d-shell">

          <motion.div
            className="skills-3d-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel number="02">
              TECHNOLOGY UNIVERSE
            </SectionLabel>

            <h2>
              TECHNICAL
              <span> DIMENSION.</span>
            </h2>

            <p>
              A growing ecosystem of technologies, tools and
              creative systems used to transform ambitious
              ideas into working experiences.
            </p>
          </motion.div>

          <div className="skills-3d-stage">

            {/* BACKGROUND ORBITAL RINGS */}
            <div className="skills-orbit skills-orbit-one" />
            <div className="skills-orbit skills-orbit-two" />
            <div className="skills-orbit skills-orbit-three" />

            {/* CENTRAL 3D CORE */}
            <motion.div
              className="skills-center-core"
              animate={{
                y: [0, -12, 0],
                rotateY: [0, 8, 0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="skills-core-inner">

                <div className="skills-core-icon">
                  <Cpu size={52} strokeWidth={1.2} />
                </div>

                <span>TECH STACK</span>

                <small>
                  CREATIVE ENGINEERING
                </small>

              </div>
            </motion.div>

            {/* FLOATING PARTICLES */}
            <div className="skills-particle particle-one" />
            <div className="skills-particle particle-two" />
            <div className="skills-particle particle-three" />
            <div className="skills-particle particle-four" />
            <div className="skills-particle particle-five" />

            {/* TECHNOLOGY CARDS */}
            <div className="skills-3d-grid">

              {skills.map((skill, index) => {
                const Icon = skillIcons[index];

                return (
                  <motion.article
                    className="skill-3d-card"
                    key={skill.number}
                    initial={{
                      opacity: 0,
                      y: 70,
                      rotateX: -20,
                      scale: 0.85,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: (index % 4) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -12,
                      rotateX: 8,
                      rotateY: -8,
                      scale: 1.04,
                      transition: { duration: 0.25 },
                    }}
                  >

                    <div className="skill-card-reflection" />

                    <div className="skill-3d-top">
                      <span>
                        NODE / {skill.number}
                      </span>

                      <ArrowUpRight size={19} />
                    </div>

                    <div className="skill-3d-icon">
                      <Icon size={36} strokeWidth={1.5} />
                    </div>

                    <div className="skill-3d-info">
                      <h3>{skill.name}</h3>
                      <span>{skill.category}</span>
                    </div>

                    <div className="skill-card-bottom">
                      <span>TECHNOLOGY NODE</span>
                      <span className="skill-node-indicator" />
                    </div>

                  </motion.article>
                );
              })}

            </div>
          </div>

          <div className="skills-3d-footer">
            <span>12 TECHNOLOGY NODES</span>
            <span>● SYSTEM OPERATIONAL</span>
            <span>BUILT TO CREATE / BUILT TO INNOVATE</span>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section section-shell" id="journey">
        <SectionLabel number="03">EXPERIENCE & MILESTONES</SectionLabel>

        <h2 className="section-heading journey-heading">
          <span>Experience & Achievements</span>
        </h2>

        <p className="section-intro journey-intro">
          Work, leadership, competition, and learning milestones from my journey
          in software, science, and technology.
        </p>

        {profileSections.map((group) => (
          <div className="journey-group" key={group.title}>
            <div className="journey-group-heading">
              <h3 className="journey-group-title">{group.title}</h3>
              {group.link && (
                <a
                  className="journey-group-link"
                  href={group.link}
                  target={group.link === "#" ? undefined : "_blank"}
                  rel={group.link === "#" ? undefined : "noreferrer"}
                  aria-label={`Open ${group.title} source`}
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
            <div className="journey-list" aria-label={group.title}>
              {group.items.map((item, index) => (
                <motion.article
                  className="journey-item"
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -7, z: 10, rotateX: 2, rotateY: index % 2 === 0 ? -1 : 1 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="journey-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="journey-content">
                    <span className="journey-label">{item.label}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <a
                    className="journey-mark"
                    href={item.link}
                    target={item.link === "#" ? undefined : "_blank"}
                    rel={item.link === "#" ? undefined : "noreferrer"}
                    aria-label={`Open source for ${item.title}`}
                  >
                    <span className="journey-mark-core" />
                    <ArrowUpRight className="journey-arrow" size={18} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <div>
            <SectionLabel number="04">BEHIND THE CODE</SectionLabel>

            <h2 className="section-heading about-heading">
              CURIOUS BY
              <br />
              <span>DEFAULT.</span>
            </h2>
          </div>

          <button
            className={`about-portrait${portraitSketch ? " is-sketch" : ""}`}
            type="button"
            aria-label="Toggle portrait sketch effect"
            aria-pressed={portraitSketch}
            onClick={() => setPortraitSketch((showSketch) => !showSketch)}
          >
            <img
              src={kvImg}
              alt="Portrait of Karamveer Singh"
              loading="lazy"
              decoding="async"
              className="about-portrait-original"
            />
            <img
              src={kvSketchImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="about-portrait-sketch"
            />
          </button>

          <div className="about-copy">
            <p>
              I'm Karamveer Singh. I enjoy exploring how software, AI, and
              creative thinking can come together to solve real problems.
            </p>

            <p>
              My approach is simple: stay curious, keep experimenting, and
              turn what I learn into something useful.
            </p>

            <button
              className="text-link"
              onClick={() => scrollTo("contact")}
            >
              CONNECT WITH ME <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-shell" id="contact">
        <SectionLabel number="05">OPEN A CHANNEL</SectionLabel>

        <div className="contact-heading-row">
          <div className="contact-copy">
            <h2 className="contact-heading">
              HAVE AN IDEA?
              <br />
              <span>LET’S BUILD IT.</span>
            </h2>
            <p className="contact-intro">
              Have a project, an opportunity, or an interesting problem?
              I’d love to turn it into something real with you.
            </p>
          </div>

          <div className="contact-code-scene" aria-hidden="true">
            <span className="contact-orbit contact-orbit-one" />
            <span className="contact-orbit contact-orbit-two" />
            <span className="contact-float contact-float-one">BUILD / 01</span>
            <span className="contact-float contact-float-two">IDEA → REALITY</span>
            <div className="contact-code-panel">
            <div className="contact-code-topline">
              <span><i /> <i /> <i /></span>
              <span>IDEA.tsx</span>
              <span>LIVE</span>
            </div>
            <div className="contact-code-lines">
              <span><b>01</b> <em>const</em> idea = <strong>yours</strong>;</span>
              <span><b>02</b> <em>const</em> build = <strong>together</strong>;</span>
              <span><b>03</b> </span>
              <span><b>04</b> <em>await</em> idea.<strong>let’sTalk</strong>();</span>
            </div>
            <span className="contact-code-cursor" />
            <div className="contact-code-foot"><span>READY WHEN YOU ARE</span><span>⌘ ↵</span></div>
            </div>
          </div>
        </div>

        <div className="social-grid">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                className="social-card"
                key={social.name}
                href={social.href}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={social.name === "Email" ? undefined : "noreferrer"}
                whileHover={{ y: -8, rotateX: 3, rotateY: -2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="social-card-top">
                  <span>{social.number} / CONNECT</span>
                  <ArrowUpRight size={22} className="social-arrow" />
                </div>

                <div className="social-icon-wrap">
                  <Icon size={36} strokeWidth={1.5} />
                </div>

                <h3>{social.name}</h3>
                <p>{social.description}</p>

                <div className="social-card-bottom">
                  <span>{social.handle}</span>
                  <ArrowDownRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="contact-footer-note">
          <span>
            <span className="status-dot" /> AVAILABLE FOR INTERESTING IDEAS
          </span>
          <span>GOOD THINGS START WITH A CONVERSATION.</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-shell">
        <a
          href="#home"
          className="brand"
          onClick={(event) => {
            event.preventDefault();
            scrollTo("home");
          }}
        >
          KS<span>.</span>
        </a>

        <p>DESIGNED & BUILT WITH CURIOSITY.</p>

        <div className="footer-links">
          <a
            href="https://github.com/magicalmutezzzzz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={20} />
          </a>
          <a
            href="https://linkedin.com/in/karamveer340"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Globe size={20} />
          </a>
          <a href="mailto:241317@kit.ac.in" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <span className="copyright">© 2026 KS</span>
      </footer>
    </main>
  );
}

export default App;
