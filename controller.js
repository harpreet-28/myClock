var TimeController = function TimeController() {
    var self = this;
    var currentDate = new Date();
    self.timeString = currentDate.toTimeString();
    self.updateTime = function updateTime() {
        currentDate = new Date();
        this.timeString = currentDate.toTimeString();
    }
}
angular
    .module('myClock')
    .controller('TimeController', TimeController);
