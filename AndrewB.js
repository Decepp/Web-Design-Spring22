function copy() {
    var range = document.createRange();
    range.selectNode(document.getElementById("contactE"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById("contactE")
   }