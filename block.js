let chromeadlist = document.getElementsByClassName("WrcADd")
if (chromeadlist.length != 0) {
let chromead = chromeadlist[0]
chromead.hidden = true
// This will be the standard ad blocking format that I'll use elsewhere as well
}
let bingads = document.getElementsByClassName("b_ad")
let bingads2 = document.getElementsByClassName("b_algo")
// You're gonna want to disable this if you use Give with Bing, or your nonprofit will be missing out (replace 0 with 1 below)
let disabled = 0
// Don't change this stuff
if (disabled != 1) {
    bingads[0].hidden = true
    bingads2[0].hidden = true
}
