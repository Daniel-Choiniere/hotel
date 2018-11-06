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
        let nameCapital = name[0].toUpperCase() + name.slice(1);
    
        if (nameCapital === " ") {
            alert("Please enter a valid name.")
        }
        else {
            alert("Thank you " + nameCapital + " for reaching out, we will get back to you shortly!")
        }
        // document.getElementById("maintitle").innerHTML = "Welcome to the Div'inn " + name + " " + email + "!";
    }
    
    
    function checkPrice() {
        document.getElementById("check-price").innerHTML = "This room costs $" + rooms.family.price;
    }