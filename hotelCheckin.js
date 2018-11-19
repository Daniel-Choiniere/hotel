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
    
        if (nameCapital.length >= 2) {
            alert("Thank you " + nameCapital + " for reaching out, we will get back to you shortly @ " + email);
        }
        else {
            alert("Please enter a valid name.");
        }
        
        if (email.length < 5) {
            alert("Please enter a valid e-mail")
        }
    }
    
        // ROOM PRICE HANDLERS
        
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
    
        //  RESERVE ROOM METHODS
    
    // function reserveStandard() {
    //     document.getElementById("check-standard-price").innerHTML = "";
    //     rooms.single.available == false;
    //     document.getElementById("reserve-standard").innerHTML = "Thank you for reserving the Standard Room!"
    //     alert("YOU HAVE RESERVED THE STANDARD ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
    // }
    
    // function reserveQueen() {
    //     document.getElementById("check-queen-price").innerHTML = "";
    //     rooms.double.available == false;
    //     document.getElementById("reserve-queen").innerHTML = "Thank you for reserving the Queen Premier Room!"
    //     alert("YOU HAVE RESERVED THE QUEEN ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
    // }
    
    // function reserveKing() {
    //     document.getElementById("check-king-price").innerHTML = "";
    //     rooms.king.available == false;
    //     document.getElementById("reserve-king").innerHTML = "Thank you for reserving the King Deluxe Room!"
    //     alert("YOU HAVE RESERVED THE KING ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
    // }
    
    
    function reserveStandard() {
        document.getElementById("check-standard-price").innerHTML = "";
        if (rooms.single.available === false) {
            alert("I'm sorry that room is already booked. Please choose from one of our other wonderfull rooms.")
        } else if (rooms.single.available === true) {
            rooms.single.available = false;
            document.getElementById("reserve-standard").innerHTML = "Thank you for reserving the Standard Room!"
            alert("YOU HAVE RESERVED THE STANDARD ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
        }
    }
    
    function reserveQueen() {
        document.getElementById("check-queen-price").innerHTML = "";
        if (rooms.double.available === false) {
            alert("I'm sorry that room is already booked. Please choose from one of our other wonderfull rooms.")
        } else if (rooms.double.available === true) {
            rooms.double.available = false;
            document.getElementById("reserve-queen").innerHTML = "Thank you for reserving the Queen Premier Room!"
            alert("YOU HAVE RESERVED THE QUEEN PREMIER ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
        }
    }
    
    function reserveKing() {
        document.getElementById("check-king-price").innerHTML = "";
        if (rooms.king.available === false) {
            alert("I'm sorry that room is already booked. Please choose from one of our other wonderfull rooms.")
        } else if (rooms.king.available === true) {
            rooms.king.available = false;
            document.getElementById("reserve-king").innerHTML = "Thank you for reserving the King Deluxe Room!"
            alert("YOU HAVE RESERVED THE KING DELUXE ROOM. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
        }
    }
    
    function reserveFamily() {
        document.getElementById("check-family-price").innerHTML = "";
        if (rooms.family.available === false) {
            alert("I'm sorry that room is already booked. Please choose from one of our other wonderfull rooms.")
        } else if (rooms.family.available === true) {
            rooms.family.available = false;
            document.getElementById("reserve-family").innerHTML = "Thank you for reserving the Family Suite!"
            alert("YOU HAVE RESERVED THE FAMILY SUITE. PROCEED TO CHECKOUT WHEN YOU ARE READY.")
        }
    }
     
        
        // VIEW AMENITIES METHODS
    
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
        document.getElementById("show-amenities-queen-third").innerHTML = Object.keys(rooms.double)[3] + " " + Object.values(rooms.king)[3];
    }
    
         function viewAmenitiesSqftKing() {
        document.getElementById("show-amenities-king-first").innerHTML = Object.keys(rooms.king)[2] + " " + Object.values(rooms.king)[2];
    }
    
    function viewAmenitiesBedsKing() {
        document.getElementById("show-amenities-king-second").innerHTML = Object.keys(rooms.king)[1] + " " + Object.values(rooms.king)[1];
    }
    
    function viewAmenitiesTvKing() {
        document.getElementById("show-amenities-king-third").innerHTML = Object.keys(rooms.king)[3] + " " +  Object.values(rooms.king)[3];
    }
        
         function viewAmenitiesSqftFamily() {
        document.getElementById("show-amenities-family-first").innerHTML = Object.keys(rooms.family)[2] + " " + Object.values(rooms.family)[2];
    }
    
    function viewAmenitiesBedsFamily() {
        document.getElementById("show-amenities-family-second").innerHTML = Object.keys(rooms.family)[1] + " " + Object.values(rooms.family)[1];
    }
    
    function viewAmenitiesTvFamily() {
        document.getElementById("show-amenities-family-third").innerHTML = Object.keys(rooms.family)[3] + " " +  Object.values(rooms.family)[3];
    }
    
        // HANDELS CUSTOMER CHECKOUT
        
    