function Emitter() {
    this.event = {}
}

Emitter.prototype.on = function(type, listner) {
    this.event[type] = this.event[type] || [];
    this.event[type].push(listner);
}

Emitter.prototype.emit = function(type) {
    if(this.event[type]) {
        this.event[type].forEach(function(element) {
            element();   
        });
    }
}

module.exports = Emitter;