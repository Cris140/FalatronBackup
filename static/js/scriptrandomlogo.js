window.onload = choosePic;
var image = new Array ();
image[0] = "0.png";
image[1] = "1.png";
image[2] = "2.png";
image[3] = "3.png";
image[4] = "4.png";
image[5] = "5.png";
image[6] = "6.png";
image[7] = "7.png";
image[8] = "8.png";
var size = image.length
var x = Math.floor(size*Math.random())

function choosePic() {
     var randomNum = Math.floor(Math.random() * size);
     document.getElementById("jsrandom").src = image[x];
}
