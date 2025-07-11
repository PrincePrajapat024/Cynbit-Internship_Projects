       const input = document.getElementById("userInput");
        const button = document.getElementById("submitBtn");
        const display = document.getElementById("displayText");

        button.addEventListener("click", function() {
            const value = input.value.trim(); // trim to remove extra spaces
            if (value === "") {
                display.textContent = "Please type something!";
                display.style.color = "red";
            } else {
                display.textContent = "You typed: " + value;
                display.style.color = "#444";
            }
        });
