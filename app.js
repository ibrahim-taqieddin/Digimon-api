function Digimon(name, level, img) {
  this.fullName = name;
  this.level = level;
  this.img = img;
}
const arr1 = [];
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      let newDigimon = new Digimon(data[i].name, data[i].level, data[i].img); /// same of API pronaounsiation
      arr1.push(newDigimon);
    }
    arr1.map(render);
    digimonArr.map(render);
    // render(data);
  });
