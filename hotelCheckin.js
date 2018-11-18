var rooms = {
        single: {
            available: true,
            beds: 1,
            sqft: 500, 
            televisionSize: '32"', 
            sleeps: 2,
            price: 100,
        },
        double: {
            available: true,
            beds: 2,
            sqft: 500,
            televisionSize: '32"',
            sleeps: 4,
            price: 120,
        },
        king: {
            available: true,
            beds: 2,
            sqft: 750,
            televisionSize: '50"',
            sleeps: 4,
            price: 200,
        },
        family: {
            available: true,
            beds: 3,
            sqft: 1100,
            televisionSize: '50"',
            sleeps: 8,
            price: 300,
        },
    };
    
        // HANDLES USER CONTACT INPUT
    
    function sendContact() {
        let name = document.getElementById("inputInfo").elements.item(0).value;
        let email = document.getElementById("inputInfo").elements.item(1).value;
        let message = document.getElementById("inputInfo").elements.item(2).value;
        let nameCapital = name[0].toUpperCase() + name.slice(1);
    
        if (name.length >= 2) {
            alert("Thank you " + nameCapital + " for reaching out, we will get back to you shortly!");
        }
        else {
            alert("Please enter a valid name.");
        }
    }
    
        // HANDLERS
        
    document.getElementById("standard-button").addEventListener("click", function() {
        document.getElementById("reserve-standard").innerHTML = "";
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-standard-price").innerHTML = "This room costs $" + rooms.single.price
    });
  
    document.getElementById("queen-button").addEventListener("click", function() {
        document.getElementById("reserve-queen").innerHTML = "";
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-queen-price").innerHTML = "This room costs $" + rooms.double.price
    });
    
    document.getElementById("king-button").addEventListener("click", function() {
        document.getElementById("reserve-king").innerHTML = "";
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-king-price").innerHTML = "This room costs $" + rooms.king.price
    });
    
    document.getElementById("family-button").addEventListener("click", function() {
        document.getElementById("reserve-family").innerHTML = "";
        this.style.backgroundColor = "#628ac9";
        document.getElementById("check-family-price").innerHTML = "This room costs $" + rooms.family.price
    });
    
    //  RESERVE ROOM FUNCTIONS
    
    function reserveStandard() {
        document.getElementById("check-standard-price").innerHTML = "";
        rooms.single.available == false;
        document.getElementById("reserve-standard").innerHTML = "Thank you for reserving the Standard Room!"
    }
    
    function reserveQueen() {
        document.getElementById("check-queen-price").innerHTML = "";
        rooms.double.available == false;
        document.getElementById("reserve-queen").innerHTML = "Thank you for reserving the Queen Premier Room!"
    }
    
    function reserveKing() {
        document.getElementById("check-king-price").innerHTML = "";
        rooms.king.available == false;
        document.getElementById("reserve-king").innerHTML = "Thank you for reserving the King Deluxe Room!"
    }
    
    function reserveFamily() {
        document.getElementById("check-family-price").innerHTML = "";
        rooms.family.available == false;
        document.getElementById("reserve-family").innerHTML = "Thank you for reserving the Family Suite!"
    }
    
    function viewAmenitiesSqftSingle() {
        document.getElementById("show-amenities-single-first").innerHTML = Object.keys(rooms.single)[2] + " " + Object.values(rooms.single)[2];
    }
    
    function viewAmenitiesBedsSingle() {
        document.getElementById("show-amenities-single-second").innerHTML = Object.keys(rooms.single)[1] + " " + Object.values(rooms.single)[1];
    }
    
    function viewAmenitiesTvSingle() {
        document.getElementById("show-amenities-single-third").innerHTML = Object.keys(rooms.single)[3] + " " + Object.values(rooms.single)[3];
    }
    
     function viewAmenitiesSqftQueen() {
        document.getElementById("show-amenities-queen-first").innerHTML = Object.keys(rooms.double)[2] + " " + Object.values(rooms.double)[2];
    }
    
    function viewAmenitiesBedsQueen() {
        document.getElementById("show-amenities-queen-second").innerHTML = Object.keys(rooms.double)[1] + " " + Object.values(rooms.double)[1];
    }
    
    function viewAmenitiesTvQueen() {
        document.getElementById("show-amenities-queen-third").innerHTML = Object.keys(rooms.double)[3] + " " +  Object.values(rooms.double)[3];
    }