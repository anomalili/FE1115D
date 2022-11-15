import View from "../View/view.js";
import Model from "../Model/model.js";

class Controller {
  constructor() {
    console.log("a controller üdvözletét küldi");
    const torolGomb = $("#torol");
    const hozzaadGomb = $("#hozzaad");
    const model = new Model();
    const view = new View();

    torolGomb.on("click", () => {
      konyvmodel.adatBe("./filmek.js", this.torolTomb);
      console.log("publikus");
    });
    hozzaadGomb.on("click", () => {
      kosarModel.adatBe("", this.ViewTomb);
    });

    $(window).on("torol", (event) => {
      console.log("kontrollerben meghívódott a törlés", event.detail);
      konyvmodel.adatTorol(event.detail);
    });
    $(window).on("hozzaad", (event) => {
      console.log("kontrollerben meghívódott a módosítás", event.detail);
      konyvmodel.adatModosit(event.detail);
    });
  }

  torolTomb(tomb) {
    console.log("publikus", tomb);
    let szuloElem = $("main");
    new View(tomb, szuloElem);
    console.log("toroltömb");
  
  }
  
  ViewTomb(tomb) {
    console.log("View tomb megjelenik a contollerből!", tomb);
    let szuloElem = $("main");
    new View(tomb, szuloElem);
    console.log("vjútömb");
  }
}

export default Controller;
