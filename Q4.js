function deepCopy(obj){
    if(obj===null || typeof obj !=='object'){
        return obj;
    }
}
const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  const copy = deepCopy(obj);
  console.log(copy);
  // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  