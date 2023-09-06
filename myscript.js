let messages = ["I'm having so much fun!", "I'm sad kitty!", "I'm so happy with a new friend!!"]
//let kitty_img = ["images/cat play.gif", "images/bad.gif", "images/friend.gif"]
let kitty_img_dl = ["images/cat play.gif", "images/bad.gif", "images/friend.gif"]

var LoadedImgs = preLoadImg(kitty_img_dl);

function preLoadImg(arg){
    let img = []
    for (var i = 0; i < arg.length; i++) {
        img.push(new Image().src = arg[i])
        console.log(arg[i]);
    }
    return img;
}


function set(arg){
    document.getElementById('myImage').src = LoadedImgs[arg];
    document.getElementById('message').innerHTML= messages[arg];

}

