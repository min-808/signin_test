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

            console.log(comeback["status"])

            if (comeback["status"] = "Success") {
                console.log("Successfully signed in as user: " + comeback["username"])
            } else if (comeback["status"] = "Incorrect") {
                var error = document.createElement("p")
                error.innerHTML = "Incorrect username or password"
                document.getElementById("password_input").appendChild(error)
            } else {
                console.log("Something went wrong")
            }
        }
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }
}