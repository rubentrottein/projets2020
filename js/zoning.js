var lorem="Phasellus fringilla, metus id feugiat consectetuer, lacus wisi ultrices tellus, quis lobortis nibh lorem quis tortor. Donec egestas ornare nulla. Mauris mi tellus, porta faucibus, dictum vel, nonummy in, est. Aliquam erat volutpat. In tellus magna, porttitor lacinia, molestie vitae, pellentesque eu, justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Sed orci nibh, scelerisque sit amet, suscipit sed, placerat vel, diam. Vestibulum nonummy vulputate orci. Donec et velit ac arcu interdum semper. Morbi pede orci, cursus ac, elementum non, vehicula ut, lacus. Cras volutpat. Nam vel wisi quis libero venenatis placerat. Aenean sed odio. Quisque posuere purus ac orci. Vivamus odio. Vivamus varius, nulla sit amet semper viverra, odio mauris consequat lacus, at vestibulum neque arcu eu tortor. Donec iaculis tincidunt tellus. Aliquam erat volutpat. Curabitur magna lorem, dignissim volutpat, viverra et, adipiscing nec, dolor. Praesent lacus mauris, dapibus vitae, sollicitudin sit amet, nonummy eget, ligula.";
class Game{
    constructor(name, description, date){
        this.name=name;
        this.description=description;
        this.date=date;
    }
}
let ps5 = new Game(
    "PlayStation 5",
    lorem,
    "Disponible le 19 novembre 2020"
    );
let demonsSouls = new Game(
    "Demon's Souls",
    lorem,
    "Disponible le 19 novembre 2020"
    );
let spiderman = new Game(
    "Spiderman Miles Morales",
    lorem,
    "Disponible le 19 novembre 2020"
    );
let ff16 = new Game(
    "Final Fantasy XVI", 
    lorem,
    "Disponible en 2021"
    );
let ratchetClank = new Game(
    "Ratchet & Clank", 
    lorem,
    "Disponible le fin 2020"
    );
let horizon2 = new Game(
    "Horizon Zero Dawn 2 : Forbidden West",
    lorem,
    "Disponible en 2021"
    );
console.log(horizon2.name);
let title=[
    ps5,
    demonsSouls,
    spiderman,
    ff16,
    ratchetClank,
    horizon2
];