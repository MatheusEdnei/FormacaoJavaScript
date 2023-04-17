function Car(type, fuelType, price){
	this.type = type;
	this.fuelType = fuelType;
    this.price = price;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol",1);
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel", 1);
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);

console.log(`New Brand Car: ${newBrand.type}`);