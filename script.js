async function signIn(data) {
    try {
        const response = await fetch('https://nodejs-serverless-function-express-one-teal.vercel.app/api/test', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: data }),
        })
        
        if (response.ok) {
            const comeback = await response.json()

            if (comeback["status"] = "Success") {
                console.log("Successfully signed in as user: " + comeback["username"])
            } else {
                console.log("Something went wrong")
            }
        }
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }
}