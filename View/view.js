class View {
  #elem;
  
  constructor(elem, szuloElem) {
    this.#elem = elem;
    // console.log("KonyvView");
    szuloElem = document.getElementById("main");
    console.log("elérem a viewt");
   szuloElem.append(`div class = "elem">
        <div class = "azon">${elem.azon}</div>
        <div class = "cim">${elem.cim}</div>
        <div class = "ev">${elem.ev}</div>
        <div class = "db">${elem.db}</div>
        </div>
        <td><button class="torol">Törlés</button></td>
        <td><button class="hozzaad">"Hozzáad"</button></td></tr>`);
    this.tablaElem = szuloElem.children("table:last-child");
    this.tbodyElem = this.tablaElem.children("tbody");

    this.recordElem = szuloElem.children(`tr:last-child`);
    this.viewElem = this.recordElem
      .children("td:nth-child(5)")
      .children("button");

    this.viewElem.on("click", () => {
      console.log("view js 47. sor");
      this.kattintasTrigger("torol");
    });
  }

  kattintasTrigger(kattintasEsemeny) {
    console.log(kattintasEsemeny);
    const esemeny = new CustomEvent(kattintasEsemeny, { detail: this.#elem.ID });
    window.dispatchEvent(esemeny);
  }
}

export default View;
