const user = {
  useName: "Nandani",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.useName}, welcome my channel`);
  },
};
user.welcomeMessage()
console.log(user);
