var app = angular.module("challengeApp", [])


    .controller("challengeController", function ($scope, $interval) {
        this.title = "RAZR Code Challenge";
        this.name = "Jennifer Johnson";
        $scope.shapeArray = [];

        function circleObject(h) {
            this.radius = h / 2;
            this.height = h;
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

        function squareObject(h, rotate) {
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
                "width": this.height + "px",
                "-ms - transform": "rotate(" + rotate + "deg)", /* IE 9 */
                "-webkit - transform": "rotate(" + rotate + "deg)", /* Chrome, Safari, Opera */
                "transform": "rotate(" + rotate + "deg)"
            }
            this.Area = this.getArea();
            this.Info = "Square: Size = " + this.height.toString() + " Area = " + this.getArea().toString();

        }



        $interval(function () {
            $scope.shapeArray = [];
            // creates 50 new circle objects
            for (var i = 0; i < 50; i++) {
                var rr = Math.floor((Math.random() * 100) + 1);
                var object = new circleObject(rr);
                $scope.shapeArray.push({
                    object
                });

            };
            var rotate = 10;
            // creates 50 new square objects
            for (var i = 0; i < 50; i++) {
                var rotate = rotate + 10;
                var h = Math.floor((Math.random() * 100) + 1);
                var object = new squareObject(h,rotate);
                $scope.shapeArray.push({
                    object
                })
            }

            // this sorts the array of objects by area but doesn't display them in order.  orderBy needed
            this.sortArray = function () {
                $scope.shapeArray.sort(function (a, b) {
                    return a.object.Area - b.object.Area;
                });

            };

            this.sortArray();

        }, 500);


        // decided not to use draw and going with ng-style for the repeat
        // for (var i = 0; i < this.shapeArray.length; i++) {
        //     this.shapeArray[i].object.draw();
        // }

    });

