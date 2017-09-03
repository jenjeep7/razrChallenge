var app = angular.module("challengeApp", [])


    .controller("challengeController", function () {
        this.title = "RAZR Code Challenge";
        this.circleArray = [];
        this.squareArray = [];

        function circleObject(x, y, r) {
            this.radius = r;
            this.yCoord = y;
            this.xCoord = x;
            this.getArea = function () {
                return Math.PI * this.radius * 2;
            }
            this.Area = this.getArea();

            this.Info = "Circle: Radius = " + this.radius.toString() + " Area = " + this.getArea().toString();


        }

        function squareObject(x) {

            this.yCoord = x;
            this.xCoord = x;
            this.getArea = function () {
                return x * 2;
            }
            this.Area = this.getArea();
            this.Info = "Square: Size = " + this.yCoord.toString() + " Area = " + this.getArea().toString();


        }

        for (var i = 0; i < 50; i++) {
            var rr = Math.floor((Math.random() * 100) + 1);
            var rc = Math.floor((Math.random() * 100) + 1);

            var object = new circleObject(rc, rc, rr);
            this.circleArray.push({
                object
            })
        };

        
        for (var i = 0; i < 50; i++) {
            var x = Math.floor((Math.random() * 100) + 1);
            var object = new squareObject(x);
            this.squareArray.push({
                object
            })
        }


        function sortArray(x, y) {
            
            var allArray = x.concat(y);

            allArray.sort(function(a,b,) {
                return a.object.Area - b.object.Area;
            });
            console.log(allArray);
           
        };

        sortArray(this.circleArray, this.squareArray);

        // console.log(this.circleArray);
        // console.log(this.squareArray);
        // var redCircle = new circleObject(30, 14, 14);
        // console.log(redCircle);

        // window.onload = function () {
        //     var canvas = document.getElementById("myCanvas");
        //     var context = canvas.getContext("2d");
        //     var centerX = canvas.width / 2;
        //     var centerY = canvas.height / 2;
        //     var radius = 10;

        //     context.beginPath();
        //     context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        //     context.fillStyle = "black";
        //     context.fill();
        //     context.lineWidth = 1;
        //     context.strokeStyle = "black";
        //     context.stroke();
        // };
    });

