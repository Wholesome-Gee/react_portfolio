import { atom } from "recoil";

export interface IProject {
  id: string;
  title: string;
  description: string;
  skills: string[];
  options: string[];
  images: number[];
  domain: string;
  github: string;
}

export const projectsState = atom<IProject[]>({
  key: "projects",
  default: [
    {
      id: "voting",
      title: "투표 웹사이트 'VOTING'",
      description: "투표 등록, 조회 기능이 있는 웹사이트 만들기",
      skills: ["react", "styled-components", "ts", "recoil"],
      options: [
        "Recoil을 활용하여 컴포넌트 간 State를 효과적으로 관리",
        "LocalStorage를 이용한 로그인 세션 유지 및 관리",
        "typeScript를 활용하여 프로젝트 전반적 타입안정성과 유지보수성을 향상",
        "React Router DOM을 활용하여 클라이언트 사이드 라우팅(CSR)을 구현하고, 싱글 페이지 애플리케이션(SPA) 구조를 기반으로 개발",
        "react-hook-form 라이브러리를 통한 Form Data 유효성 검사 및 효율적 관리",
      ],
      images: [1, 2, 3, 4, 5, 6],
      domain: "https://wholesome-gee.github.io/study_react-voting",
      github: "https://github.com/Wholesome-Gee/study_react-voting",
    },
    {
      id: "voting",
      title: "투표 웹사이트 'VOTING'",
      description: "투표 등록, 조회 기능이 있는 웹사이트 만들기",
      skills: ["react", "styled-components", "ts", "recoil"],
      options: [
        "Recoil을 활용하여 컴포넌트 간 State를 효과적으로 관리",
        "LocalStorage를 이용한 로그인 세션 유지 및 관리",
        "typeScript를 활용하여 프로젝트 전반적 타입안정성과 유지보수성을 향상",
        "React Router DOM을 활용하여 클라이언트 사이드 라우팅(CSR)을 구현하고, 싱글 페이지 애플리케이션(SPA) 구조를 기반으로 개발",
        "react-hook-form 라이브러리를 통한 Form Data 유효성 검사 및 효율적 관리",
      ],
      images: [1, 2, 3, 4, 5, 6],
      domain: "https://wholesome-gee.github.io/study_react-voting",
      github: "https://github.com/Wholesome-Gee/study_react-voting",
    },
    {
      id: "voting",
      title: "투표 웹사이트 'VOTING'",
      description: "투표 등록, 조회 기능이 있는 웹사이트 만들기",
      skills: ["react", "styled-components", "ts", "recoil"],
      options: [
        "Recoil을 활용하여 컴포넌트 간 State를 효과적으로 관리",
        "LocalStorage를 이용한 로그인 세션 유지 및 관리",
        "typeScript를 활용하여 프로젝트 전반적 타입안정성과 유지보수성을 향상",
        "React Router DOM을 활용하여 클라이언트 사이드 라우팅(CSR)을 구현하고, 싱글 페이지 애플리케이션(SPA) 구조를 기반으로 개발",
        "react-hook-form 라이브러리를 통한 Form Data 유효성 검사 및 효율적 관리",
      ],
      images: [1, 2, 3, 4, 5, 6],
      domain: "https://wholesome-gee.github.io/study_react-voting",
      github: "https://github.com/Wholesome-Gee/study_react-voting",
    },
    {
      id: "voting",
      title: "투표 웹사이트 'VOTING'",
      description: "투표 등록, 조회 기능이 있는 웹사이트 만들기",
      skills: ["react", "styled-components", "ts", "recoil"],
      options: [
        "Recoil을 활용하여 컴포넌트 간 State를 효과적으로 관리",
        "LocalStorage를 이용한 로그인 세션 유지 및 관리",
        "typeScript를 활용하여 프로젝트 전반적 타입안정성과 유지보수성을 향상",
        "React Router DOM을 활용하여 클라이언트 사이드 라우팅(CSR)을 구현하고, 싱글 페이지 애플리케이션(SPA) 구조를 기반으로 개발",
        "react-hook-form 라이브러리를 통한 Form Data 유효성 검사 및 효율적 관리",
      ],
      images: [1, 2, 3, 4, 5, 6],
      domain: "https://wholesome-gee.github.io/study_react-voting",
      github: "https://github.com/Wholesome-Gee/study_react-voting",
    },
  ],
});
