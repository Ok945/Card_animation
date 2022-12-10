var firstCard = document.getElementById("first__card");
        var secondCard = document.getElementById("second__card");
        var thirdCard = document.getElementById("third__card");
        var fourthCard = document.getElementById("fourth__card");

        function myFunction() {
            setTimeout(function () {
                firstCard.classList.remove("animation_end_up");
                secondCard.classList.remove("animation_end_up");
                thirdCard.classList.remove("animation_end_up");
                fourthCard.classList.remove("animation_end_up");

                secondCard.classList.remove("animation_end_below")
                thirdCard.classList.remove("animation_end_below")
                secondCard.classList.add("animation_start_up");
                firstCard.classList.add("animation_start_below");
                setTimeout(function () {
                    secondCard.classList.remove("animation_start_up");
                    secondCard.classList.add("animation_end_below")
                    firstCard.classList.remove("animation_start_below");
                    firstCard.classList.add("animation_end_up")

                }, 500);


            }, 30);
        }

        function myFunction1() {
            setTimeout(function () {
                firstCard.classList.remove("animation_end_up");
                secondCard.classList.remove("animation_end_up");
                thirdCard.classList.remove("animation_end_up");
                fourthCard.classList.remove("animation_end_up");
                
                // firstCard.classList.add("animation_start_up");
                thirdCard.classList.add("animation_start_up");
                secondCard.classList.add("animation_start_below");

                setTimeout(function () {
                    thirdCard.classList.remove("animation_start_up");
                    thirdCard.classList.add("animation_end_below")
                    secondCard.classList.remove("animation_start_below");
                    secondCard.classList.add("animation_end_up")
                }, 500);
            }, 30);
        }

        function myFunction2() {
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

        function myFunction3() {
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


        
        var cardElement4 = document.getElementById("fourth__card");
        var cardElement1 = document.getElementById("first__card");
        var cardElement2 = document.getElementById("second__card");
        var cardElement3 = document.getElementById("third__card");



        cardElement1.addEventListener('click',() =>{
            setTimeout(function () {
                firstCard.classList.remove("animation_end_up");
                secondCard.classList.remove("animation_end_up");
                thirdCard.classList.remove("animation_end_up");
                fourthCard.classList.remove("animation_end_up");

                secondCard.classList.remove("animation_end_below")
                thirdCard.classList.remove("animation_end_below")
                secondCard.classList.add("animation_start_up");
                firstCard.classList.add("animation_start_below");
                setTimeout(function () {
                    secondCard.classList.remove("animation_start_up");
                    secondCard.classList.add("animation_end_below")
                    firstCard.classList.remove("animation_start_below");
                    firstCard.classList.add("animation_end_up")

                }, 500);


            }, 30);
        
        })

        cardElement2.addEventListener('click' , () =>{
            setTimeout(function () {
                firstCard.classList.remove("animation_end_up");
                secondCard.classList.remove("animation_end_up");
                thirdCard.classList.remove("animation_end_up");
                fourthCard.classList.remove("animation_end_up");
                
                // firstCard.classList.add("animation_start_up");
                thirdCard.classList.add("animation_start_up");
                secondCard.classList.add("animation_start_below");

                setTimeout(function () {
                    thirdCard.classList.remove("animation_start_up");
                    thirdCard.classList.add("animation_end_below")
                    secondCard.classList.remove("animation_start_below");
                    secondCard.classList.add("animation_end_up")
                }, 500);
            }, 30);
        
        })

        cardElement3.addEventListener("click" , () =>{

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

        })

        cardElement4.addEventListener('click', () =>{
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
            }, 30);
        
        })