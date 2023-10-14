import { busPragueVienna } from "./classes/busPragueVienna";

const busBoardVP = new busPragueVienna('Vienna-Prague', ['Vídeň', 'Břeclav', 'Brno', 'Jihlava', 'Praha'], 58, 23, 0)
const busBoardPV = new busPragueVienna('Prague-VIenna', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 34, 25, 3)

console.log(busBoardVP);

console.log(busBoardVP.current());
console.log(busBoardPV.current());
console.log(busBoardVP.next());
console.log(busBoardPV.next());
console.log(busBoardVP.current());
console.log(busBoardPV.current());
console.log(busBoardVP.board(12));
console.log(busBoardPV.board(12));
console.log(busBoardVP.deboard(30));
console.log(busBoardPV.deboard(30));
