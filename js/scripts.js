/* GLOBAL VARIABLES */
let liveCount;
let liveInc;
let passInc = 1;


window.onload = function() {
    /** Initialise global variables when window is loaded **/
    liveCount = 0
    liveInc = 1
    liveDisplay()
}

function liveDisplay() {
    /** Displays the liveCount variable **/
    document.getElementById('liveCount').innerHTML = liveCount
}

function inc() {
    /** Each click increases the liveCount by the current liveInc **/
    liveCount += liveInc
    liveDisplay()
}

function pInc() {
    /** Each tick increases the liveCount by the passInc **/
    liveCount += passInc
    liveDisplay()
}

function incInc(inc, cost) {
    /** Checks the cost of upgrades against the current liveCount, alert is shown if not enough **/
    if (cost > liveCount) {
        alert("You do not have enough points!")
    }
    else {
        liveCount -= cost
        liveInc += inc
        liveDisplay()
    }
}

function startIdle(i) {
    /** Starts an idle tick -- (i) parameter is milliseconds per tick ( 1000 = 1 second ) **/
    setInterval(function() {
        pInc()
    }, i)

}

function idleCostCheck(cost, i) {
    /** Checks the cost of idle tick upgrades against the current liveCount, alert is shown if not enough **/
    if (cost > liveCount) {
        alert("You do not have enough points!")
    }
    else {
        liveCount -= cost
        startIdle(i)
    }
}














