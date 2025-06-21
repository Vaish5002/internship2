function test() {
    var a = 8;
    var b = 3;
    var c = a;
    a = b;
    b = c;
    console.log("a is " + a);
    console.log("b is " + b);
}
test()