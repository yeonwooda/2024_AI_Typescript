// |(union / 합집합) : or
const b: string | number = "1";

// 배열이면서 name:st, age:문자또는 숫자타입인 오브젝트 나타내기
const b1: {
  name: string;
  age: string | number;
}[] = [
  { name: "김효주", age: "22" },
  { name: "오연우", age: 20 },
];

// &(intersection / 교차점) : and
// const b2: string & number => never 타입
const b2: { name: string } & { age: number } = {
  age: 21,
  name: "재민이",
};

const b3: any = { name: "뭐든지" };

const b4: (x: string) => string = (x) => `${x}맛 아이스크림`;
const b5: (x: number) => number = (x) => x ** 2;
