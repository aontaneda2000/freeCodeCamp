newArray = [];

for (var i = 0; i < 10; i++) {
  newArray.push(i);
}
console.log(newArray);
console.log(i);

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
