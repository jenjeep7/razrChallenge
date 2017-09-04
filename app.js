var app = angular.module("challengeApp", [])


    .controller("challengeController", function () {
        this.title = "RAZR Code Challenge";
        this.shapeArray = [];
        // this.canvas = angular.element(document.querySelector('#canvas'));
        // var ctx = this.canvas[0].getContext('2d');

        function circleObject(r) {
            this.radius = r /2;
            this.height = r;
            // this.yCoord = y;
            // this.xCoord = x;
            // this.borderRadius = 50;
            // this.color = "blue";
            this.style = {
                "background-color" : "blue",
                "border-radius" : "50px",
                "height" : this.height + "px",
                "width" : this.height + "px"
            }
            this.getArea = function () {
                return Math.PI * this.radius * 2;
            }
            this.Area = this.getArea();

            this.Info = "Circle: Radius = " + this.radius.toString() + " Area = " + this.getArea().toString();
            // this.draw = function () {
            //     ctx.beginPath();
            //     ctx.arc(this.xCoord / 2 , this.yCoord / 2 , this.radius, 0, 2 * Math.PI, false);
            //     ctx.fillStyle = this.color;
            //     ctx.fill();
            //     ctx.lineWidth = 1;
            //     // ctx.closePath();
            //     ctx.strokeStyle = "black";
            //     ctx.stroke();
            // }

        }

        function squareObject(h) {

            this.height = h;
            // this.yCoord = y;
            this.color = "red";
            this.borderRadius = 0;
            this.getArea = function () {
                return h * 2;
            }
            this.style = {
                "background-color" : "red",
                "border-radius" : "0",
                "height" : this.height + "px",
                "width" : this.height + "px"
            }
            this.Area = this.getArea();
            this.Info = "Square: Size = " + this.height.toString() + " Area = " + this.getArea().toString();
            // this.draw = function () {
            //     console.log("working on squares");
            //     ctx.beginPath();
            //     ctx.fillStyle = this.color;
            //     ctx.lineWidth = 1;
            //     ctx.strokeStyle = "black";
            //     ctx.rect(300,y,h,h);
            //     ctx.fill();
            // }

        }
        // var yCoord = 0;
        
        for (var i = 0; i < 50; i++) {
            var rr = Math.floor((Math.random() * 100) + 1);
            // var rc = Math.floor((Math.random() * 100) + 1);
            // yCoord = yCoord + rr * 2;
            var object = new circleObject(rr);
            this.shapeArray.push({
                object
            });

        };

        // var y = 0;

        for (var i = 0; i < 50; i++) {
            var h = Math.floor((Math.random() * 100) + 1);
            // y = y + h;
            var object = new squareObject(h);
            this.shapeArray.push({
                object
            })
        }


        this.sortArray = function () {

            this.shapeArray.sort(function (a, b) {
                return a.object.Area - b.object.Area;
            });

        };
console.log(this.shapeArray);
        // for (var i = 0; i < this.shapeArray.length; i++) {
        //     console.log(this.shapeArray[i].object.color);
        //     this.shapeArray[i].object.draw();
        // }

    });

