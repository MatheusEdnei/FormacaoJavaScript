function addUp(){
    //Using arguments to capture the arbitrary number of inputs
const args = Array.from(arguments); 
this.x = args.reduce((prev, curr) => prev + curr, 0);
console.log("this.x = ", this.x);

}

function driverFunc(){
const obj = {
    inps: [1,2,3,4,5,6]
}
addUp.apply(obj, obj.inps);
}

driverFunc();

const drive = new driverFunc()
console.log(drive);