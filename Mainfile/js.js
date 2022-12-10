const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-black');
const blueButton = document.getElementById('btn-blue');
const yellowButton = document.getElementById('btn-yellow')

const firstCard = document.getElementById('first_container');
const secondCard = document.getElementById('second_container');
const thirdCard = document.getElementById('third_container');
const fourthCard = document.getElementById('fourth_container');
// const secondCard = document.getElementById('second_card');




function first_card_animation(){
    setTimeout(() => {
        firstCard.classList.remove("animation_end_up");
        secondCard.classList.remove("animation_end_up");
        thirdCard.classList.remove("animation_end_up");
        fourthCard.classList.remove("animation_end_up");

        secondCard.classList.remove("animation_end_below")
        thirdCard.classList.remove("animation_end_below")
        secondCard.classList.add("animation_start_up");
        firstCard.classList.add("animation_start_below");
        setTimeout(() => {
            secondCard.classList.remove("animation_start_up");
            secondCard.classList.add("animation_end_below")
            firstCard.classList.remove("animation_start_below");
            firstCard.classList.add("animation_end_up")

        }, 500);
    }, 30);
}

function second_card_animation(){
    setTimeout(function () {
        firstCard.classList.remove("animation_end_up");
        secondCard.classList.remove("animation_end_up");
        thirdCard.classList.remove("animation_end_up");
        fourthCard.classList.remove("animation_end_up");

        // firstCard.classList.add("animation_start_up");
        thirdCard.classList.add("animation_start_up");
        secondCard.classList.add("animation_start_below");

        setTimeout(() => {
            thirdCard.classList.remove("animation_start_up");
            thirdCard.classList.add("animation_end_below")
            secondCard.classList.remove("animation_start_below");
            secondCard.classList.add("animation_end_up")
        }, 500);

    }, 30)
}

function third_card_animation(){
    setTimeout(() => {
        firstCard.classList.remove("animation_end_up");
        secondCard.classList.remove("animation_end_up");
        thirdCard.classList.remove("animation_end_up");
        fourthCard.classList.remove("animation_end_up");


        secondCard.classList.remove("animation_end_below")
        thirdCard.classList.remove("animation_end_below")
        secondCard.classList.add("animation_start_up");
        thirdCard.classList.add("animation_start_below");

        setTimeout(() => {
            secondCard.classList.remove("animation_start_up");
            secondCard.classList.add("animation_end_below");
            thirdCard.classList.remove("animation_start_below");
            thirdCard.classList.add("animation_end_up")

        }, 500);
    }, 30);
}

function fourth_card_animation(){
    setTimeout(() => {
        firstCard.classList.remove("animation_end_up");
        secondCard.classList.remove("animation_end_up")
        thirdCard.classList.remove("animation_end_up");
        fourthCard.classList.remove("animation_end_up");

        secondCard.classList.remove("animation_end_below");
        thirdCard.classList.remove("animation_end_below");
        secondCard.classList.add("animation_start_up");
        fourthCard.classList.add("animation_start_below");

        setTimeout(() => {
            secondCard.classList.remove("animation_start_up");
            secondCard.classList.add("animation_end_below");
            fourthCard.classList.remove("animation_start_below");
            fourthCard.classList.add("animation_end_up")

        }, 500);
    }, 30)
}


redButton.addEventListener('click', first_card_animation)
greenButton.addEventListener('click', second_card_animation)
blueButton.addEventListener('click', third_card_animation)
yellowButton.addEventListener('click', fourth_card_animation)


firstCard.addEventListener('click',first_card_animation)
secondCard.addEventListener('click',second_card_animation)
thirdCard.addEventListener('click',third_card_animation)
fourthCard.addEventListener('click',fourth_card_animation)
