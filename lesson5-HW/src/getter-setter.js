let fruits = {
    fruitName: ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
    apple: {
       "Red Delicious" : {
            color: "Red",
            taste: "Sweet",
            price: 1.5
        },
        "Granny Smith" : {
            color: "Green",
            taste: "Tart",
            price: 1.2
        },

        get apple () {
            return this.apple;
        }, 
        set apple (newApple) {
            this.apple = newApple;
        }
    },
    banana: {
        "Cavendish" : {
            color: "Yellow",
            taste: "Sweet",
            price: 0.5
        }

    },
    cherry: {
        set cherry (newCherry) {
            this.cherry = newCherry;
        },
        get cherry () {
            return this.cherry;
        }
    }
    };

module.exports = fruits;

fruits.apple.get("Red Delicious"); // { color: 'Red', taste: 'Sweet', price: 1.5 }
fruits.apple.get("Granny Smith"); // { color: 'Green', taste: 'Tart', price: 1.2 }
fruits.apple.set("Fuji", { color: "Red", taste: "Sweet", price: 1.8 });
fruits.apple.get("Fuji"); // { color: 'Red', taste: 'Sweet', price: 1.8 }
fruits.cherry.set("Bing", { color: "Dark Red", taste: "Sweet", price: 2.0 });