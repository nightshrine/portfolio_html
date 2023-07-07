let isScroll = false;
let myVideo = document.querySelector("#myVideo");
myVideo.style.opacity = 1;

window.onload = function () {
    setTimeout(moveToWorks, 3000); // 3秒後にmoveToDiv関数を実行
};

window.addEventListener("scroll", () => {
    isScroll = true;
    let scrollHeight = document.documentElement.scrollTop;
    let videoOpacity = Math.max(1200 - scrollHeight, 200) / 1000
    myVideo.style.opacity = videoOpacity;
})

function moveToWorks() {
    if(isScroll) {
        return;
    }
    var worksDiv = document.querySelector("#about");
    worksDiv.scrollIntoView({ behavior: "smooth" }); // ページをスクロールしてworksDivが表示されるようにする
}