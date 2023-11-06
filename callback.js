function productDilivery(name, callback) {
  console.log("Product Dilivery name",  name);
  callback();
}
function successfunction() {
  console.log("Product has been deleverd successfully");
}
productDilivery("Macbook", successfunction);
