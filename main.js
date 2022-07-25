function $(query) {
    return document.querySelectorAll(query)
}

$.first = function(query) {
    return document.querySelector(query)
}

NodeList.prototype.filter = Array.prototype.filter
NodeList.prototype.map = Array.prototype.map
NodeList.prototype.reduce = Array.prototype.reduce