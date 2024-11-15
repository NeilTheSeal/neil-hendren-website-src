import AdviceImg from "/src/assets/newspaper.png";
import TernaryImg from "/src/assets/ternary.png";
import WebVulnerabilityImg from "/src/assets/web-vulnerability-img.png";

export default [
  {
    title: "Broken Access Control: The Web's Biggest Security Vulnerability",
    caption:
      "What is the most common way for a website to get hacked? Let's find out.",
    href: "/blog/worlds-number-one-web-vulnerability",
    img: WebVulnerabilityImg,
  },
  {
    title: "What Exactly is Ternary Computing?",
    caption:
      "It's not binary ... An exploration of ternary computing and its potential advantages.",
    href: "/blog/what-exactly-is-ternary-computing",
    img: TernaryImg,
  },
  {
    title: "The Modern-Day Advice Column",
    caption:
      "In a nostalgic throwback to the advice columns of yesteryear, I built an email advice bot using Ruby on Rails.",
    href: "/blog/modern-day-advice-column",
    img: AdviceImg,
  },
];
