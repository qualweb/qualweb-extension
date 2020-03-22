let borderStyle = "";
let outlineStyle="";
let borderRadiusStyle = "";

function highlightElement(selector) {
    let element = document.querySelector(selector);
    borderStyle = element.style.border;
    outlineStyle =element.style.outline;
    borderRadiusStyle = element.style.borderRadius;
    element.style.border= "1px dashed white";
    element.style.borderRadius= "0px";
    element.style.outline= "1px dashed black";

}

function turnOffhighlightElement(selector) {
    let element = document.querySelector(selector);
    element.style.border= borderStyle;
    element.style.borderRadius= borderRadiusStyle;
    element.style.outline= outlineStyle;
}

