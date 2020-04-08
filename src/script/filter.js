// let s = "hello";
// alert(s.charAt(2) === "l");


// main

function choose(obj) {
    let id = obj.id;
    hide(obj.parentNode);
    change(id);

    if (id.charAt(4) === "1") {
        document.getElementById("text-1").innerHTML = obj.innerHTML;
    }

    if (id.charAt(4) === "2") {
        document.getElementById("text-2").innerHTML = obj.innerHTML;
    }

    if (id.charAt(4) === "3") {
        document.getElementById("text-3").innerHTML = obj.innerHTML;
    }

}


// parts

function hide(element) {
    // let element = document.getElementById(id);
    element.style.opacity = "0";
    element.style.top = "2em";
    element.style.visibility = "hidden";
}

function show(id) {
    let element = document.getElementById(id);
    element.style.visibility = "visible";
    element.style.opacity = "100%";
    element.style.top = "3em";

}

function change(id) {
    if (id === "opt-2-1") {
        document.getElementById("text-3").innerHTML = "选择城市";

        document.getElementById("opt-3-1").innerHTML = "上海";
        document.getElementById("opt-3-2").innerHTML = "北京";
        document.getElementById("opt-3-3").innerHTML = "西安";
        document.getElementById("opt-3-4").innerHTML = "重庆";
    }

    if (id === "opt-2-2") {
        document.getElementById("text-3").innerHTML = "选择城市";

        document.getElementById("opt-3-1").innerHTML = "旧金山";
        document.getElementById("opt-3-2").innerHTML = "纽约";
        document.getElementById("opt-3-3").innerHTML = "华盛顿";
        document.getElementById("opt-3-4").innerHTML = "西雅图";
    }

    if (id === "opt-2-3") {
        document.getElementById("text-3").innerHTML = "选择城市";

        document.getElementById("opt-3-1").innerHTML = "悉尼";
        document.getElementById("opt-3-2").innerHTML = "墨尔本";
        document.getElementById("opt-3-3").innerHTML = "堪培拉";
        document.getElementById("opt-3-4").innerHTML = "珀斯";
    }

    if (id === "opt-2-4") {
        document.getElementById("text-3").innerHTML = "选择城市";

        document.getElementById("opt-3-1").innerHTML = "伦敦";
        document.getElementById("opt-3-2").innerHTML = "伯明翰";
        document.getElementById("opt-3-3").innerHTML = "斯旺西";
        document.getElementById("opt-3-4").innerHTML = "纽卡斯尔";
    }
}

function closeAll() {
    let boxes = document.getElementsByClassName("select-option-box");

    for (let i = 0; i < boxes.length; i++) {
        hide(boxes[i]);
    }
}

// document.addEventListener("click", closeAll);