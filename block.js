let chromeadlist = document.getElementsByClassName("WrcADd")
if (chromeadlist.length != 0) {
let chromead = chromeadlist[0]
chromead.hidden = true
// This will be the standard ad blocking format that I'll use elsewhere as well
}
let bingads = document.getElementsByClassName("b_ad")
let bingads2 = document.getElementsByClassName("b_algo")
// To disable set this to 1 instead of 0
let disabled = 0
// Don't change this stuff to 1
if (disabled != 1) {
    bingads[0].hidden = true
    bingads2[0].hidden = true
}
