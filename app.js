var app = angular.module("challengeApp", [])


    .controller("challengeController", function () {
        this.title = "RAZR Code Challenge";
        this.shapeArray = [];
        this.canvas = angular.element(document.querySelector('#canvas'));
        var ctx = this.canvas[0].getContext('2d');

        function circleObject(x, y, r) {
            this.radius = r;
            this.yCoord = y;
            this.xCoord = x;
            this.color = "blue";
            this.getArea = function () {
                return Math.PI * this.radius * 2;
            }
            this.Area = this.getArea();

            this.Info = "Circle: Radius = " + this.radius.toString() + " Area = " + this.getArea().toString();
            this.draw = function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

        }

        function squareObject(x) {

            this.yCoord = x;
            this.xCoord = x;
            this.color = "red";
            this.getArea = function () {
                return x * 2;
            }
            this.Area = this.getArea();
            this.Info = "Square: Size = " + this.yCoord.toString() + " Area = " + this.getArea().toString();
            this.draw = function () {
                console.log("working on squares");
            }

        }

        for (var i = 0; i < 50; i++) {
            var rr = Math.floor((Math.random() * 100) + 1);
            var rc = Math.floor((Math.random() * 100) + 1);

            var object = new circleObject(rc, rc, rr);
            this.shapeArray.push({
                object
            });

        };


        for (var i = 0; i < 50; i++) {
            var x = Math.floor((Math.random() * 100) + 1);
            var object = new squareObject(x);
            this.shapeArray.push({
                object
            })
        }


        this.sortArray = function () {

            this.shapeArray.sort(function (a, b, ) {
                return a.object.Area - b.object.Area;
            });

        };

        for (var i = 0; i < this.shapeArray.length; i++) {
            // console.log(this.shapeArray[i].object.color);
            this.shapeArray[i].object.draw();
        }

    });

