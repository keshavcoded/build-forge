import hero from "../assets/hero.jpg";
import preBuiltImage from "../assets/prebuilt.jpg";
import customPc from "../assets/custom-pc.jpg";
import gamingLaptop from "../assets/gaming-lap.png";
import workStation from "../assets/work-station.jpg";
import accessories from "../assets/accessories.jpg";

import build1 from "../assets/creatorx.png";
import build2 from "../assets/pixel-crafter.png";
import build3 from "../assets/codeforge-titan.png";
import build4 from "../assets/lanslayer.png";
import build5 from "../assets/crimson-vortex.png";
import build6 from "../assets/neo-nova.png";

import user1 from "../assets/alecks.jpg";
import user2 from "../assets/Boaster-FNC.jpg";
import user3 from "../assets/dev.jpg";
import user4 from "../assets/marcus.png";
import user5 from "../assets/mimi.png";
import user6 from "../assets/ava.png";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Best Builds",
    link: "#builds",
  },
  {
    name: "About US",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title1: "Built to Dominate.",
  title2: "Designed for You.",
  subtitle: "You dream it. We build it.",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Pre-Built Gaming PCs",
    description:
      "Our expertly curated gaming PCs are pre-assembled, tested, and optimized for top-tier performance — perfect for gamers who want powerful systems without the hassle of building. Just plug it in and start dominating your favorite games instantly.",
    image: preBuiltImage,
    alt: "Pre-Built Gaming PCs",
  },
  {
    title: "Custom Gaming PCs",
    description:
      "Tell us your performance goals, game preferences, and budget — we'll design and build a custom gaming PC that's tailored exactly to your style and needs. Every part is hand-picked to ensure maximum power and long-term reliability.",
    image: customPc,
    alt: "Custom Gaming PCs",
  },
  {
    title: "Gaming Laptops",
    description:
      "Take high-end gaming anywhere with our selection of gaming laptops. Featuring powerful GPUs, fast screens, and efficient cooling for serious performance in a compact build. Whether it's esports or AAA titles, you're always ready to play.",
    image: gamingLaptop,
    alt: "Gaming Laptops",
  },
  {
    title: "Workstation PCs",
    description:
      "Designed for creators, developers, and professionals, our workstation PCs deliver exceptional multitasking, rendering, and processing power — ideal for demanding software and production workflows. Built to handle heavy workloads with absolute stability and speed.",
    image: workStation,
    alt: "Workstation PCs",
  },
  {
    title: "PC Accessories & Peripherals",
    description:
      "Complete your gaming setup with high-quality accessories — monitors, mechanical keyboards, gaming mice, headsets, and more, all curated to enhance your gaming experience. We only stock gear we trust and use ourselves.",
    image: accessories,
    alt: "PC Accessories & Peripherals",
  },
];

export const BEST_BUILDS = [
  {
    id: 1,
    name: "Crimson Vortex",
    description:
      "A powerhouse built with a Ryzen 9 7900X, RTX 4080, 64GB DDR5, and a 2TB Gen4 SSD — optimized for ultra settings in 4K gaming and streaming. Built for: A Twitch streamer who plays FPS titles and needed high frame rates with no lag on dual monitors.",
    image: build1,
    link: "#",
  },
  {
    id: 2,
    name: "PixelCrafter Pro",
    description:
      "Equipped with an Intel i9-13900K, RTX 4070 Ti Super, 128GB RAM, and dual 4TB NVMe drives for blazing-fast creative workflows in Adobe Suite and Blender. Built for a freelance 3D artist and video editor looking for top-tier rendering performance and storage.",
    image: build2,
    link: "#",
  },
  {
    id: 3,
    name: "CodeForge Titan",
    description:
      "Featuring a Ryzen 7 7700X, integrated Wi-Fi, 32GB RAM, and ultra-quiet fans for a distraction-free environment — made for heavy compiling and multitasking. Built for a backend developer working with Docker, VMs, and large codebases who wanted both performance and silence.",
    image: build3,
    link: "#",
  },
  {
    id: 4,
    name: "The LAN Slayer",
    description:
      "A budget-friendly beast using an Intel i5-13400F, RTX 3060, 16GB DDR4, and RGB fans in a compact mATX case — sleek, cool, and portable. Built for a college gamer who wanted smooth 1080p performance for competitive multiplayer without breaking the bank.",
    image: build4,
    link: "#",
  },
  {
    id: 5,
    name: "CreatorCore X",
    description:
      "Loaded with Ryzen 9 5950X, RTX 3090, 64GB RAM, and 10TB hybrid storage for editing 6K footage, livestreaming, and batch exports with ease. Built for: A YouTube content creator running a photo and video studio needing zero lag and massive render power.  ",
    image: build5,
    link: "#",
  },
  {
    id: 6,
    name: "Neo Nova",
    description:
      "Built with future-proofing in mind: Intel i7-14700K, RTX 4080 Super, 32GB DDR5, liquid cooling, and a sleek white build with ambient lighting. Built for: A tech-savvy entrepreneur using it for VR design, occasional gaming, and daily productivity with multiple ultrawide displays.",
    image: build6,
    link: "#",
  },
];

export const ABOUT_US = {
  text: "At Build Forge, we believe that every PC should be as unique as the person using it. Whether you're a hardcore gamer, a creative professional, or a developer pushing the limits, your machine should be built with purpose not just parts. \nWe're not just PC builders, we're passionate tech enthusiasts, gamers, and creators ourselves. That's why we take pride in crafting custom systems that are powerful, reliable, and perfectly tuned to your needs. From high-end gaming rigs to studio-grade workstations, every build goes through careful planning, expert assembly, and stress-tested performance checks.\nTransparency, quality, and service drive everything we do. We guide you through the build process, help you choose the right components, and ensure your PC doesn't just meet expectations, it exceeds them.\nAt Build Forge, your vision is our blueprint. Let's forge something powerful, together.",
};

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with Build Forge. We take pride in every build and are dedicated to delivering high-performance, reliable, and personalized PCs that exceed expectations.",
  reviews: [
    {
      name: "Alexandre Sallé",
      title: "Coach, Paper Rex",
      review:
        "Build Forge delivered machines that perform under pressure. Our entire roster is powered by their builds — zero downtime, insane FPS, and pure reliability during competitive play.",
      image: user1,
    },
    {
      name: "Jake 'Boaster' Howlett",
      title: "Streamer & Pro Player",
      review:
        "Streaming and gaming simultaneously used to crash my setup. Now? Smooth as butter. Build Forge nailed every detail — no frame drops, just plug-and-play greatness.",
      image: user2,
    },
    {
      name: "Shrikeshav",
      title: "Full-Stack Developer",
      review:
        "My previous PC lagged with multiple containers. Build Forge crafted a dev rig that flies through builds, compiles fast, and stays cool. Couldn’t ask for a better dev partner.",
      image: user3,
    },
    {
      name: "Marcus Hurst",
      title: "College Student",
      review:
        "I needed a budget-friendly gaming PC for college breaks. Build Forge helped me pick the right parts and built it fast. Looks awesome, runs everything — totally worth it.",
      image: user4,
    },
    {
      name: "Mimi Wermcrantz",
      title: "VCT Organiser",
      review:
        "We needed silent, high-performance PCs for VALORANT Champions Tour Canada. Build Forge delivered on time with flawless cable management and top specs.",
      image: user5,
    },
    {
      name: "Ava Gray",
      title: "Freelance Designer",
      review:
        "Design, edit, export — repeat. My workstation from Build Forge handles huge files without slowing down. Beautiful build too. Clients are impressed just seeing it on my desk.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we'll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@buildforge.com",
  },
  address: {
    label: "Address",
    value: "India",
  },
};
