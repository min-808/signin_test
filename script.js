async function signIn(user, pass) {
    try {
        const response = await fetch('https://nodejs-serverless-function-express-one-teal.vercel.app/api/test', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: user, password: pass }),
        })
        
        if (response.ok) { // Ok, 200-299 status code
            const comeback = await response.json()
            var displayedError = false

            if (comeback["status"] == "Success") {
                console.log("Successfully signed in as user: " + comeback["username"])
            } else if (comeback["status"] == "Incorrect") {
                if (displayedError = false) {
                    var error = document.createElement("p")
                    error.innerHTML = "Incorrect username or password"
                    error.style.color = "red"
                    error.style.fontWeight = "bold"
                    document.getElementById("status").appendChild(error)
                    
                    displayedError = true
                }
            } else {
                console.log("Something went wrong")
            }
        }
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }
}