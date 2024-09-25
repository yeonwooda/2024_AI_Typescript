const a = "아메리카노";
const a1 = "라떼";

// 타입 어노테이션
const a2: string = "1"; //a2는 스트링만 넣을 수 있다
const a3: boolean = !!"";
const a4: number[] = [1, 2, 3, 4, 5]; // num만 들어가는 배열이다
const a5: {
  name: string;
  isAlive: boolean;
  price: number;
}[] = [
  { name: "엄준식", isAlive: true, price: 2000 },
  { name: "김준식", isAlive: false, price: 2500 },
];

// age, isMan, nation []

const a6: {
  age: number;
  isMan: boolean;
  nation: string;
}[] = [
  { age: 20, isMan: true, nation: "한국" },
  { age: 25, isMan: false, nation: "일본" },
  { age: 29, isMan: false, nation: "한국" },
];
