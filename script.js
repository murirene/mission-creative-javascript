const deception1_img = "https://s7d1.scene7.com/is/image/mcdonalds/COM_1PUB_DownloadIncentive_FreeBigMac";
const truth1_img = "https://cup-us.imgix.net/covers/9780231172110.jpg?w=350";
let sunglasses = false;

const onButtonClick = () => {
    sunglasses = !sunglasses;
    v = deception1_img
    if (sunglasses) {
        v = truth1_img;
    }
    debugger;
    document.getElementById('sunglasses').src = v;
}
