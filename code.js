var bike = { name: "HONDA", color: "blue", model: "500cc",
    details:function() {
return this.name + " " + this.color + " " + this.model;
} };
console.log(bike.details());