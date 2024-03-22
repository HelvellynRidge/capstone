// Resource: https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

const submitAPI = function(formData){
    let random = Math.random();
    if (random < 0.5) {
        return (true);
    }
    else {
        return (false);
    }
};

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  const fetchAPI = function (date) {
    let result = []; 
    let random = seededRandom(date.slice(-2));
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  export default fetchAPI;
  export {submitAPI};