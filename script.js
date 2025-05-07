const human_pics = ["https://s7d1.scene7.com/is/image/mcdonalds/COM_1PUB_DownloadIncentive_FreeBigMac"];
const devine_pics = ["https://cup-us.imgix.net/covers/9780231172110.jpg?w=350"];

const Perception = {
    HUMAN: "human",
    DEVINE: "devine"
};

class RealityWindow {

    constructor(human_pic, devine_pic) {
        this.theme = THEMES.HUMAN;
        this.perceptionView = Perception.HUMAN;
    }

    toggleSunglasses() {
        if (perceptionView === THEMES.HUMAN) {
            this.theme = THEMES.DEVINE;
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            this.theme = THEMES.HUMAN;
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }
}
let onButtonClick = () => {
    RealityWindow.toggleSunglasses();
    /*sunglasses = !sunglasses;
    v = deception1_img
    if (sunglasses) {
        v = truth1_img;
    }
    debugger;
    document.getElementById('sunglasses').src = v*/
}
