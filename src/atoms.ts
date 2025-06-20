import { atom, selector } from "recoil";

export interface IMode {
  mode: string;
}

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
      id: "todolist",
      title: "오늘뭐하지? 'TODO LIST'",
      description: "할일 등록, 즐겨찾기, 완료, 삭제 기능이 있는 todo list",
      skills: ["tailwind", "react"],
      options: [
        "form으로부터 전달받은 data를 useState 훅을 통해 관리",
        "tailwindCSS를 활용한 css 작업",
        "배열의 여러가지 method를 활용해서 data를 정렬하여 항목 추가기능, 즐겨찾기기능, 삭제기능, 완료기능 등 구현",
      ],
      images: [1, 2, 3],
      domain: "https://wholesome-gee.github.io/react_todolist/",
      github: "https://github.com/Wholesome-Gee/react_todolist",
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
      id: "checklist",
      title: "여행 체크리스트 앱",
      description: "물품 추가, 삭제, 드래그&드롭을 구현한 여행 체크리스트",
      skills: ["react", "styled-components", "ts", "recoil"],
      options: [
        "Recoil을 활용하여 컴포넌트 간 State를 효과적으로 관리",
        "typeScript를 활용하여 프로젝트 전반적 타입안정성과 유지보수성을 향상",
        "'react-beautiful-dnd'라이브러리를 사용하여 물품 Drag&Drop 기능 구현",
      ],
      images: [1, 2, 3, 4],
      domain: "https://wholesome-gee.github.io/study_react-checklist",
      github: "https://github.com/Wholesome-Gee/study_react-checklist",
    },
  ],
});

export const mode = atom({
  key: "mode",
  default: "desktop",
});

export const modeSelector = selector({
  key: "modeSelector",
  get: ({ get }) => {
    const userDevice = get(mode);
    return userDevice;
  },
  set: ({ set }, value) => {
    set(mode, value);
  },
});
