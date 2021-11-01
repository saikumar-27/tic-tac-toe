var sign = "X";                                                  //initially giving the sign = X
var count = 0;                                                   //initializing the count = 0 this is used to count the number of steps
var s1 = document.getElementById("s1");                          // displaying the SCORE OF PLAYER-1 
var s2 = document.getElementById("s2");                          // displaying the SCORE OF PLAYER-2
var b1 = document.getElementById("b1");                          //button for RESET
var b2 = document.getElementById("b2");                          //button for RESTART
var text = document.getElementById("p");                         //text to display who is winner
var _1 = document.getElementById("00");                          
var _2 = document.getElementById("01");                                                            
var _3 = document.getElementById("02");
var _4 = document.getElementById("10");
var _5 = document.getElementById("11");                          // ALL THE 9 BUTTONS 
var _6 = document.getElementById("12");     
var _7 = document.getElementById("20");
var _8 = document.getElementById("21");
var _9 = document.getElementById("22");
var c1 = 0;                                                     //count to calculate the score of Player-1
var c2 = 0;                                                     //count to calculate the score of Player-2


b1.addEventListener("click" , function()                        //adding eventlistener to RESET button 
{
    reset();
});

b2.addEventListener("click",function()                         //adding eventlistener to RESTART button
{
    restart();
});

function reset()                                               //reset function to reset the scores 
{
    _1.innerHTML = "";
    _2.innerHTML = "";
    _3.innerHTML = "";
    _4.innerHTML = "";
    _5.innerHTML = "";
    _6.innerHTML = "";
    _7.innerHTML = "";
    _8.innerHTML = "";
    _9.innerHTML = "";
    text.innerHTML="";
    c1 = 0;
    c2 = 0;
    s1.innerHTML = 0;
    s2.innerHTML = 0;
}

function restart()                                            //restart function to restart the game again
{
    _1.innerHTML = "";
    _2.innerHTML = "";
    _3.innerHTML = "";
    _4.innerHTML = "";
    _5.innerHTML = "";
    _6.innerHTML = "";
    _7.innerHTML = "";
    _8.innerHTML = "";
    _9.innerHTML = "";
    text.innerHTML="";
    sign = "X";
    document.querySelectorAll("button").forEach(dis =>
        {
            dis.disabled = false;
        });
}


function disable()                                           //disable function to disable the button after the winner is displayed
{
    document.querySelectorAll('.b').forEach(b=>
        {
            b.disabled = true;
        });
}


document.querySelectorAll("button").forEach(b =>            //accessing all the buttons i.e 9 buttons
    {
        b.addEventListener("click" , function()             //adding the eventlistener to all those 9 buttons 
        {
            if(sign == "X" && b.innerHTML == "")            //checking the button is empty an if sign is X then adding the innerHtml to X
            {
                b.innerHTML = "X";                          //adding the innerHTML of button to X
                count = count + 1;                          //increasing the count value
                checkSign();                                //calling the checksign function
            }
            else if(b.innerHTML == "" && sign == "O")       //if the above condition is false this condition gets executed i.e if sign is O
            {
                b.innerHTML = "O";                          //adding the innerHTML to O
                count = count + 1;                          //increasing the count 
                checkSign();                                //calling the checksign function
            }
            if(count > 4)                                   //condition checking
            {
                winner();                                   //calling the winner function
            }
        });
    });



function checkSign()                                       //function checksign
{
    if(sign == "X")                                        //if sign is x then it will change to O and viceversa
    {
        sign = "O";
    }
    else
    {
        sign = "X";
    }
}

function checkX()                                       //function to check if X is winner or not
{
    if(
        (_1.innerHTML=="X"&&_2.innerHTML=="X"&&_3.innerHTML=="X")||
        (_4.innerHTML=="X"&&_5.innerHTML=="X"&&_6.innerHTML=="X")||
        (_7.innerHTML=="X"&&_8.innerHTML=="X"&&_9.innerHTML=="X")||
        (_1.innerHTML=="X"&&_4.innerHTML=="X"&&_7.innerHTML=="X")||
        (_2.innerHTML=="X"&&_5.innerHTML=="X"&&_8.innerHTML=="X")||
        (_3.innerHTML=="X"&&_6.innerHTML=="X"&&_9.innerHTML=="X")||
        (_1.innerHTML=="X"&&_5.innerHTML=="X"&&_9.innerHTML=="X")||
        (_3.innerHTML=="X"&&_5.innerHTML=="X"&&_7.innerHTML=="X"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkO()                                                  //function to check if O is winner or not
{
    if((_1.innerHTML=="O"&&_2.innerHTML=="O"&&_3.innerHTML=="O")||
    (_4.innerHTML=="O"&&_5.innerHTML=="O"&&_6.innerHTML=="O")||
    (_7.innerHTML=="O"&&_8.innerHTML=="O"&&_9.innerHTML=="O")||
    (_1.innerHTML=="O"&&_4.innerHTML=="O"&&_7.innerHTML=="O")||
    (_2.innerHTML=="O"&&_5.innerHTML=="O"&&_8.innerHTML=="O")||
    (_3.innerHTML=="O"&&_6.innerHTML=="O"&&_9.innerHTML=="O")||
    (_1.innerHTML=="O"&&_5.innerHTML=="O"&&_9.innerHTML=="O")||
    (_3.innerHTML=="O"&&_5.innerHTML=="O"&&_7.innerHTML=="O"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkTie()                                                  //function to check the game is tie or not
{
    if((_1.innerHTML!=""&&_2.innerHTML!=""&&_3.innerHTML!="")&&
    (_4.innerHTML!=""&&_5.innerHTML!=""&&_6.innerHTML!="")&&
    (_7.innerHTML!=""&&_8.innerHTML!=""&&_9.innerHTML!=""))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function winner()                                                //function winner
{
    if(checkX())                                                 //checking the checkX function
        {
            text.innerHTML = "WINNER IS X";                      //displaying the winner is X
            c1 = c1 + 1;                                         //increasing the score of X
            s1.innerHTML = c1;                                   //displaying the score 
            disable();                                           //calling the disable function to disable all the button after the game ends
            count = 0;                                           //count is again 0
        }
        else if(checkO())                                        //checking the checkO function
        {
            text.innerHTML = "WINNER IS O";                      //checking the checkO function
            c2 = c2 + 1;                                         //increasing the score of O
            s2.innerHTML = c2;                                   //displaying the score of O
            disable();                                           //calling the disable function 
            count = 0;                                           //again making count 0
        }
        else if(checkTie())                                      //checking the condition by calling the checkTie function
        {
            text.innerHTML = "IT IS A TIE";                      //displaying that it is Tie
            disable();                                           //calling the disable function
            count = 0;                                           //again making the count 0
        }
};
