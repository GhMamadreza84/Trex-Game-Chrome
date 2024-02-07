// ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");
// RESTART PAGE ELEMENT
const restartPage = document.querySelector('.restart-page');
const restartButton = document.querySelector('.restart-btn');
// JUMP TREX WHEN WE CLICK SPACE BUTTON
document.addEventListener('keyup' , (e)=>{
    if(e.key === " "){
        trexElement.classList.add("jumpAnimate")
    };
    setTimeout(()=>{
        trexElement.classList.remove("jumpAnimate");

    },500)

})
// CHECK IF WE LOSE OR NOT
const checkCondition = () => {
    const trexTop = parseInt(window.getComputedStyle(trexElement).top);
    const treeLeft = parseInt(window.getComputedStyle(treeElement).left);
    if(treeLeft < 90 && trexTop >= 230){
        trexElement.style.top = `${trexTop}px`;
        treeElement.style.display = 'none';
        restartPage.classList.add('show-restart-page');
    }
}
// CHECK CONDITION FUNCTION EVERY 10ms
setInterval(checkCondition ,10);
// RESTART GAME WHEN WE CLICK RESTART BUTTON
restartButton.addEventListener('click',()=>{
    restartPage.classList.remove('show-restart-page');
    treeElement.style.display = "block";
    trexElement.style.top = "";
    setInterval(checkCondition,10);
})