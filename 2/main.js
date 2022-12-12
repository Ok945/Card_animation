var firstCard = document.getElementById("first__card");
var secondCard = document.getElementById("second__card");
var thirdCard = document.getElementById("third__card");
var fourthCard = document.getElementById("fourth__card");

function myFunction() {
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        firstCard.classList.add('animation_start_below')
        secondCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')


        

        setTimeout(function () {
            firstCard.classList.remove('animation_start_below')
            secondCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')
    

            firstCard.classList.add('animation_end_up')

            


        }, 500);


    }, 30);
}




function myFunction1() {
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        secondCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')


        setTimeout(function () {
            secondCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')
    

            secondCard.classList.add('animation_end_up')

        }, 500);
    }, 30);
}

function myFunction2() {
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        thirdCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        secondCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')


        setTimeout(function () {
            thirdCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            secondCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')
    

            thirdCard.classList.add('animation_end_up')

        }, 500);
    }, 30);
}



function myFunction3() {
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        fourthCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        secondCard.classList.add('animation_start_up')


        setTimeout(function () {
            fourthCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            secondCard.classList.remove('animation_start_up')
    

            fourthCard.classList.add('animation_end_up')

        }, 500);
    }, 30);
}
