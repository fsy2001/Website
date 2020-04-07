$("#file0").change(function(){
    let objUrl = getObjectURL(this.files[0]) ;//获取文件信息
    console.log("objUrl = "+objUrl);
    if (objUrl) {
        $("#img0").attr("src", objUrl);
        let area = document.getElementById("pre-upload");
        area.style.display = "none";

        let img = document.getElementById("img0");
        img.style.opacity = "1";
    }
});

function getObjectURL(file) {
    let url = null;
    if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file) ;
    } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url;
}