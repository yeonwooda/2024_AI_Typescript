type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";

const d2: {
  id: string;
  level: number;
  job: jobType;
} = {
  id: "지존법사령이",
  level: 155,
  job: "도적",
};

type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type Side = "감자튀김" | "치즈스틱" | "콘슬로우" | "해쉬브라운";
type Drinks =
  | "제로 콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로 스프라이트";

type setMenu = {
  main: Hamburger;
  side: Side;
  drinks: Drinks;
};

const myMacdonaled: setMenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로 스프라이트",
};

// type subway = 빵, 메인, 치즈, 야채, 소스1, 소스2
type bread = "화이트" | "하티" | "파마산오레가노" | "허니오트";
type main = "새우" | "머쉬룸" | "에그" | "스테이크" | "바비큐" | "아보카도";
type cheese = "아메리칸 치즈" | "슈레드 치즈" | "모차렐라 치즈";
type vegetable =
  | "양상추"
  | "토마토"
  | "오이"
  | "피망"
  | "양파"
  | "피클"
  | "올리브";
type sauce =
  | "렌치드레싱"
  | "마요네즈"
  | "스위트 어니언"
  | "허니 머스타드"
  | "핫 칠리"
  | "사우전 아일랜드";

type subway = {
  bread: bread;
  main: main;
  cheese: cheese;
  vegetable: vegetable[];
  sauce: sauce[];
};

const shrimp: subway = {
  bread: "파마산오레가노",
  cheese: "모차렐라 치즈",
  main: "새우",
  vegetable: ["양상추", "양파", "오이", "토마토"],
  sauce: ["렌치드레싱", "허니 머스타드"],
};
