const submitBtn = document.getElementById("submitBtn")
const choices = document.querySelectorAll('input[type="radio"]')
const timeUpOverlay = document.querySelector(".time-up-overlay")
const body = document.querySelector("body")
const result = document.querySelector(".score")
let score = 0;
submitBtn.addEventListener("click", ansChecker)

function ansChecker(){
    choices.forEach(choice => {
        if(choice.checked){
            let value = choice.value
            if(value == "correctAns"){
                score++;
            }
        }
    })
    scrollTo(0, 0)
    displayingResults()
    submitBtn.disabled = "true"
}

function displayingResults(){
    body.style.overflow = "hidden"
    timeUpOverlay.classList.remove("invisible")
    timeUpOverlay.classList.add("visible")
    result.textContent = `Your score is ${score} / 5`
}

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    function twoDigits( n )
    
    {return (n <= 9 ? "0" + n : n);}

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();


    function updateTimer()
    {
        msLeft = endTime - (+new Date);

        if ( msLeft < 1000) {
            element.innerHTML = "Time is up!";
            if(!timeUpOverlay.classList.contains("visible")){
                ansChecker()
            }

        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
}

countdown( "timer", 10, 0 );