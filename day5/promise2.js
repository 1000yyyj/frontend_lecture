const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

p1.then((result) => {
  alert(result);
  return result + 1;
});

p1.then((result) => {
  alert(result);
  return result + 1;
});
p1.then((result) => {
  alert(result);
  return result + 1;
});
p1.then((result) => {
  alert(result);
  return result + 1;
});
