var app = angular.module("challengeApp", [])


    .controller("challengeController", function () {
        this.title = "RAZR Code Challenge";
        this.name = "Jennifer Johnson";
        this.shapeArray = [];

        function circleObject(r) {
            this.radius = r / 2;
            this.height = r;
            this.style = {
                "background-color": "blue",
                "border-radius": "50px",
                "height": this.height + "px",
                "width": this.height + "px"
            }
            this.getArea = function () {
                return Math.PI * this.radius * 2;
            }
            this.Area = this.getArea();
            this.Info = "Circle: Radius = " + this.radius.toString() + " Area = " + this.getArea().toString();
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
                "background-color": "red",
                "border-radius": "0",
                "height": this.height + "px",
                "width": this.height + "px"
            }
            this.Area = this.getArea();
            this.Info = "Square: Size = " + this.height.toString() + " Area = " + this.getArea().toString();
            
        }
        
        // creates 50 new circle objects
        for (var i = 0; i < 50; i++) {
            var rr = Math.floor((Math.random() * 100) + 1);
            var object = new circleObject(rr);
            this.shapeArray.push({
                object
            });

        };

        // creates 50 new square objects
        for (var i = 0; i < 50; i++) {
            var h = Math.floor((Math.random() * 100) + 1);
            var object = new squareObject(h);
            this.shapeArray.push({
                object
            })
        }

        // this sorts the array of objects by area but doesn't display them in order.  orderBy needed
        this.sortArray = function () {
            this.shapeArray.sort(function (a, b) {
                return a.object.Area - b.object.Area;
            });

        };

        this.sortArray();
        // decided not to use draw and going with ng-style for the repeat
        // for (var i = 0; i < this.shapeArray.length; i++) {
        //     this.shapeArray[i].object.draw();
        // }

    });

