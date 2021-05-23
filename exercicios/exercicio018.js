// Converta a função no seguinte trecho de código em Arrow Function:
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
//     }

const promise = () => {
  return new Promise((resolve, reject) => resolve());
};

