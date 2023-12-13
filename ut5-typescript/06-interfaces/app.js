var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.salary = function (jobType) {
        return jobType * 4000;
    };
    return Developer;
}());
var dev = new Developer();
console.log(dev.salary(2));
