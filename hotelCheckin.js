var rooms = {
        single: {
            available: true,
            beds: 1,
            sqft: 500, 
            televisionSize: 32, 
            sleeps: 2,
            price: 100,
        },
        double: {
            available: true,
            beds: 2,
            sqft: 500,
            televisionSize: 32,
            sleeps: 4,
            price: 120,
        },
        king: {
            available: true,
            beds: 2,
            sqft: 750,
            televisionSize: 50,
            sleeps: 4,
            price: 200,
        },
        family: {
            available: true,
            beds: 3,
            sqft: 1100,
            televisionSize: 50,
            sleeps: 8,
            price: 300,
        },
    };
    
    
    function sendContact() {
        let name = document.getElementById("inputInfo").elements.item(0).value;
        let email = document.getElementById("inputInfo").elements.item(1).value;
        let message = document.getElementById("inputInfo").elements.item(2).value;
        let nameCapital = name[0].toUpperCase() + name.slice(1);
    
        if (nameCapital.length < 2) {
            alert("Please enter a valid name.")
        }
        else {
            alert("Thank you " + nameCapital + " for reaching out, we will get back to you shortly!")
        }
        // document.getElementById("maintitle").innerHTML = "Welcome to the Div'inn " + name + " " + email + "!";
    }
    
    document.getElementById("standard-button").addEventListener("click", function() {
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-standard-price").innerHTML = "This room costs $" + rooms.single.price
    });
  
    document.getElementById("queen-button").addEventListener("click", function() {
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-queen-price").innerHTML = "This room costs $" + rooms.double.price
    });
    
    document.getElementById("king-button").addEventListener("click", function() {
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-king-price").innerHTML = "This room costs $" + rooms.king.price
    });
    
    document.getElementById("family-button").addEventListener("click", function() {
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-family-price").innerHTML = "This room costs $" + rooms.family.price
    });
    
    function reserveStandard() {
        rooms.single.available == false;
        document.getElementById("reserve-standard").innerHTML = "Thank you for reserving the Standard Room!"
    }
    
    function reserveQueen() {
        rooms.double.available == false;
        document.getElementById("reserve-queen").innerHTML = "Thank you for reserving the Queen Premier Room!"
    }
    
    function reserveKing() {
        rooms.king.available == false;
        document.getElementById("reserve-king").innerHTML = "Thank you for reserving the King Deluxe Room!"
    }
    
    function reserveFamily() {
        rooms.family.available == false;
        document.getElementById("reserve-family").innerHTML = "Thank you for reserving the Family Suite!"
    }
    
    document.getElementById("standard-button").addEventListener("click", function() {
        this.style.backgroundColor = "#c9cfd8";
    });