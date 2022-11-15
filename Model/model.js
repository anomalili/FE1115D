class Model {
    #filmek = [];

    constructor() {
        console.log("model elérve");
    }

    adatTorol(adat) {
        console.log("torol", adat)
    }
    adatHozzaad(adat) {
        console.log("hozzaadom", adat)
    }
 

    

adatBe(vegpont, myCallBack) {
    fetch('filmek.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            this.#filmek = data.konyv;
            console.log(this.#filmek);
            console.log("helloka myCallBack függvény");
            myCallBack(this.#filmek);
        })
        .catch((error) => {
            console.error('nem jött össze a fetccs :( ):', error);
        });
}}
export default Model;