//challenge: 1
let res = (a,b) => {
    if(a>b)
    {
       console.log("a is greater");
    }
    else{
        console.log("b is greater");
    }
} 
res(5,10);

//challenge: 2
const words = ["George","Alice","Alex","John","Infanta","Xavior","lourdhAntony"];
const findscaryWord = words.filter(name => {
    return name.length>10;
});
console.log(findscaryWord);

//challenge: 3
const price = [200,120,100,108,135,162,25,170,80,110];
let netprice=0;
function add(){
    for (let i=0;i<price.length;i++)
    {
       netprice = price[i]+netprice;
    }
    console.log("Sum:",netprice);
}
add();

//challenge: 3.1
const mixedArrays = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (mixedArray) => {
  let totalArray = 0;
  for (i = 0; i < mixedArray.length; i++) {
    if (typeof (mixedArray[i]) == 'string' || typeof (mixedArray[i]) == 'boolean') {
      if (typeof (mixedArray[i]) == 'string') { 
        totalArray += mixedArray[i].length;
      }
      else {
        let temp;
        temp = Number(mixedArray[i]);
        totalArray += temp;
      }
    }
    else {
      totalArray += mixedArray[i];
    }
  }
  return totalArray;
}
console.log(avg(mixedArrays));

//chalenge: 4

let midpoint = avg(mixedArrays)/mixedArrays.length;
console.log("midpoint",midpoint);

//chalenge: 4.1

var array = [10, 20, 30, 40, 50, 60];
let levels = array.reduce((acc,cur)=>{
    return acc+cur;
});
let avgmidpoint = levels/array.length;
console.log("Levels:", avgmidpoint);

//chalenge: 4.2

const items = ["bread","jam","milk","egg","flour","oil", "rice","coffe powder","sugar","salt",];
  var overall_len = 0;
  var total = 0;
  var averageWordLength = (items) => {
    for (i = 0; i < items.length; i++) {
      let k = items[i].length;
      overall_len += k;
    }
    total = overall_len / items.length;
    return total;
  };
console.log(averageWordLength(items));

//challenge: 4.3

const mixedArray = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (mixedArray) => {
let totalArray = 0;
for (i = 0; i < mixedArray.length; i++) {
if (typeof (mixedArray[i]) == 'string' || typeof (mixedArray[i]) == 'boolean') {
  if (typeof (mixedArray[i]) == 'string') {  
    totalArray += mixedArray[i].length;
  }
  else {
    let temp;
    temp = Number(mixedArray[i]);
    totalArray += temp;
  }
}
else {
  totalArray += mixedArray[i];
}
}
return totalArray;
}
console.log(avg(mixedArray) / mixedArray.length);

//challenge: 5

var arr = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffe powder', 'sugar', 'salt', 'egg', 'flour'];
var unique = arr.filter((x, i) => arr.indexOf(x) === i);
console.log(unique);         

//challenge: 6

const alpha = ['door', 'window', 'ceiling', 'roof', 'plinth', 'tiles', 'ceiling', 'flooring'];
var isPresent = alpha.filter(words => words == 'roof');
checkval = () => {
  if (isPresent.length) {
    return true;
  }                           
  else {
    return false;
  }
}
console.log(checkval());

//challenge: 7

const words1 = ['machine', 'matter', 'subset', 'troubling', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'];
occurence = (words1) => {
  let len = 0;
  words.forEach((word) => {
    if (word == 'matter') {
      len += 1; 
    }
  });
  return len;
}
console.log(occurence(words));

//challenge: 8

const multiplyFourNumbers = (a, b, c, d) => {
  return a * b * c * d;
}
const maximumProduct = (arr) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((j - 3) >= 0) {
        let product1 = multiplyFourNumbers(arr[i][j], arr[i][j - 1], arr[i][j - 2], arr[i][j - 3]);
        if (product1 > maxProduct) {
          maxProduct = product1;
        }
      }
      if ((i - 3) >= 0) {  
        let product2 = multiplyFourNumbers(arr[i][j], arr[i - 1][j], arr[i - 2][j], arr[i - 3][j]);
        if (product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}
const matrix = [[1, 2, 3, 4, 5],
[1, 25, 3, 4, 5],
[1, 20, 3, 4, 5],
[1, 20, 3, 4, 5],
[1, 4, 3, 4, 5]
];
console.log(maximumProduct(matrix));

//challenge: 8.1

const maximunProductOfDiagonal = (arr) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((j - 3) >= 0 && (i - 3) >= 0) {
        let product1 = multiplyFourNumbers(arr[i][j], arr[i - 1][j - 1], arr[i - 2][j - 2], arr[i - 3][j - 3]);
        if (product1 > maxProduct) {
          maxProduct = product1; 
        }
      }
      if ((i - 3) >= 0 && (j - 1) <= 0) {
        let product2 = multiplyFourNumbers(arr[i][j], arr[i - 1][j + 1], arr[i - 2][j + 2], arr[i - 3][j + 3]);
        if (product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}
console.log(maximunProductOfDiagonal(matrix));