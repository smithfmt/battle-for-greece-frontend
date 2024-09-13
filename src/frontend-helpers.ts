import axios from "axios";
import { ColorType, SquareType } from "./frontend-types"

import Strength from "./images/Card/Strength.png";
import Agility from "./images/Card/Agility.png";
import Intellect from "./images/Card/Intellect.png";
import Divine from "./images/Card/Divine.png";
import Monster from "./images/Card/Monster.png";

export function rando(arr:any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text:string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

export function shuffle(array:any[]) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const protectPage = async () => {
  let expired = false;
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/profile`);
    return { authed: true, uid: res.data.user.uid, expired };
  } catch (e:any) {
    console.log(e.response.data.msg)
    if (e.response.data.msg==="Token Expired") expired = true;
    return { authed: false, uid: "none", expired };
  };
};

export const range = (lowEnd:number, highEnd:number) => {
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
  };
  return list;
};

export const colors: {[key: string]: string} = {
  red : "255, 0, 0",
  green : "0, 128, 0",
  blue : "0, 0, 255",
  white : "214, 214, 214",
  gold : "216, 164, 31",
  black : "10, 10, 10",
  inactive : "",
};

export const colorConvert = (value:ColorType) => {
  switch (value) {
      case "red":
          return "Strength";
      case "blue":
          return "Intellect";
      case "green":
          return "Agility";
      case "gold":
          return "Divine";
      default:
          return "Monster";
  };
};

export const connectImages = {
    Strength, Agility, Intellect, Divine, Monster,
};

export const loop = (times:number, callback:Function) => {
  for (let i = 0; i < times; i++) {
      callback(i);
  };
};

export const generateMatrixes = (arr:number[], n:number, unique?:boolean) => {
  if (arr.length===1&&n===1) return [0];
  const cartesian_product = (xs:number[], ys:any) => {
    var result = [];
    for(var i = 0; i < xs.length; i++) {
      for (var j = 0; j < ys.length; j++) {
        // transform [ [1, 2], 3 ] => [ 1, 2, 3 ] and append it to result []
        result.push([].concat.apply([], [ xs[i], ys[j] ]));
      }
    }
    return result;
  };
  const cartesian_power = (xs:number[], n:number) => {
    var result:any = xs;
    for(var i = 1; i < n; i++) {
      result = cartesian_product(result, xs)
    };
    return result;
  };
  let result = cartesian_power(arr, n);
  if (n===1) {
    result = result.map((val:number) => {return [val]});
  };
  if (unique) {
    const uniqueResult = result.filter((value:number[]) => {
      if (typeof(value)!=="object") return false;
      let unique = true;
      value.forEach(item => {
        if (value.filter(i => {return i===item}).length>1) return unique = false;
      });
      return unique;
    });
    console.log(uniqueResult);
    return uniqueResult;
  };
  return result;
};

export const capitalise = (string:string) => {
  let res = string.split("")
  res[0] = res[0].toUpperCase();
  return res.join("");
};

export const generateBoard = (squares:SquareType[], battle?:boolean) => {
  let gridSize:SquareType[] = [squares.reduce((prev, curr) => {
    if (!prev||!curr) {
      return [0,0];
    };
    let res:SquareType = prev;
    if (curr[0]>prev[0]) {
      res[0]=curr[0]
    };
    if (curr[1]>prev[1]) {
      res[1]=curr[1];
    };
    return res;
  }, [0,0]), squares.reduce((prev, curr) => {
    if (!prev||!curr) {
      return [0,0];
    };
    let res = prev;
    if (curr[0]<prev[0]) {
      res[0]=curr[0]
    };
    if (curr[1]<prev[1]) {
      res[1]=curr[1];
    };
    return res;
  }, [0,0])];
  if (!gridSize[0]) gridSize=[[0,0],[0,0]];
  if (!battle) {
    gridSize[0] = gridSize[0].map(val => {return val+1});
    gridSize[1] = gridSize[1].map(val => {return val-1});
  };
  const [maxX, maxY] = gridSize[0];
  const [minX, minY] = gridSize[1];
  const xAxis = range(minX, maxX);
  const yAxis = range(minY, maxY).reverse();
  return {xAxis, yAxis};
};