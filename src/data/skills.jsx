import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiJqueryLogo,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiReact
} from "react-icons/di";
import {
  SiExpress,
  SiFlutter,
  SiLaravel,
  SiPuppeteer,
  SiRedux,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandNodejs,
  TbBrandReactNative,
  TbBrandRedux
} from "react-icons/tb";
export const skills = [
  {
    name: "HTML5",
    skill: 90,
    level: 'expert',
    icon: (
      <div style={{ color: "tomato", fontSize: "4rem" }}>
        <DiHtml5 />
      </div>
    ),
  },

  {
    name: "CSS",
    skill: 80,
    level: 'expert',
    icon: (
      <div style={{ color: "skyblue", fontSize: "4rem" }}>
        <DiCss3 />
      </div>
    ),
  },
  {
    name: "jAVASCRIPT",
    skill: 80,
    level: 'expert',
    icon: (
      <div style={{ color: "#F0DB4F", fontSize: "4rem" }}>
        <DiJavascript />
      </div>
    ),
  },
  {
    name: "JQuery",
    skill: 70,
    level: 'intermediate',
    icon: (
      <div style={{ color: " #0769ad", fontSize: "4rem" }}>
        <DiJqueryLogo />
      </div>
    ),
  },
  {
    name: "PHP",
    skill: 70,
    level: 'intermediate',
    icon: (
      <div style={{ color: " #474a8a", fontSize: "4rem" }}>
        <DiPhp />
      </div>
    ),
  },
  {
    name: "MySQL",
    skill: 80,
    level: 'expert',
    icon: (
      <div style={{ color: " #00758f", fontSize: "4rem" }}>
        <DiMysql />
      </div>
    ),
  },
  {
    name: "REACT",
    skill: 90,
    level: 'expert',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <DiReact />
      </div>
    ),
  },
  {
    name: "LARAVEL",
    skill: 80,
    level: 'expert',
    icon: (
      <div style={{ color: "tomato", fontSize: "4rem" }}>
        <SiLaravel />
      </div>
    ),
  },
  {
    name: "REDUX",
    skill: 90,
    level: 'expert',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <TbBrandRedux />
      </div>
    ),
  },
  {
    name: "REDUX_TOOLKIT",
    skill: 90,
    level: 'expert',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <SiRedux />
      </div>
    ),
  },
  {
    name: "REACT_NATIVE",
    skill: 70,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <TbBrandReactNative />
      </div>
    ),
  },
  {
    name: "PUPPETEER",
    skill: 70,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#08042f", fontSize: "4rem" }}>
        <SiPuppeteer />
      </div>
    ),
  },
  {
    name: "TAILWIND",
    skill: 90,
    level: 'expert',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <SiTailwindcss />
      </div>
    ),
  },
  {
    name: "FLUTTER",
    skill: 60,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#61dbfb", fontSize: "4rem" }}>
        <SiFlutter />
      </div>
    ),
  },
  {
    name: "SELENIUM",
    skill: 60,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#00FF7F", fontSize: "4rem" }}>
        <SiSelenium />
      </div>
    ),
  },
  {
    name: "nodejs",
    skill: 60,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#2E8B57", fontSize: "4rem" }}>
        <TbBrandNodejs />
      </div>
    ),
  },
  {
    name: "expressjs",
    skill: 60,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#68A063", fontSize: "4rem" }}>
        <SiExpress />
      </div>
    ),
  },
  {
    name: "Mongodb",
    skill: 60,
    level: 'intermediate',
    icon: (
      <div style={{ color: "#4db33d", fontSize: "4rem" }}>
        <DiMongodb />
      </div>
    ),
  },
];
