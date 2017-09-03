var app = angular.module("challengeApp", [])


    .controller("challengeController", function () {
        this.title = "RAZR Code Challenge";

       function circleObject(x,y,r) {
        this.radius = r;
        this.yCoord = y;
        this.xCoord = x;
        this.getArea = function() {
            return Math.PI*this.radius*2;
       }
       this.circleInfo = "Circle: Radius = "+ this.radius.toString() + " Area= " + this.getArea().toString();
    
       
        }
        var redCircle = new circleObject(30,14,14);
        console.log(redCircle);
    });

