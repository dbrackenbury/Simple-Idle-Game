let liveCount;
let liveInc;
let passInc;

function liveDisplay() {
    document.getElementById('liveCount').innerHTML = liveCount
}

window.onload = function() {
    liveCount = 0
    liveInc = 1
    liveDisplay()
}


function inc() {
    liveCount = liveCount + liveInc
    liveDisplay()
}

function incInc(inc, cost) {

    if (cost > liveCount) {
        alert("You do not have enough points!")
    }
    else {
        liveCount = liveCount - cost
        liveInc = liveInc + inc
        liveDisplay()
    }
}

// NOT WORKIN
function idleInc(i) {
    passInc = i
    liveCount = liveCount + passInc
    console.log(liveCount)
    liveDisplay()
}






