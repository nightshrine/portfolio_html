window.onload = function () {
    setTimeout(moveToWorks, 3000); // 3秒後にmoveToDiv関数を実行
};

function moveToWorks() {
    var worksDiv = document.querySelector("#about");
    worksDiv.scrollIntoView({ behavior: "smooth" }); // ページをスクロールしてworksDivが表示されるようにする
}
