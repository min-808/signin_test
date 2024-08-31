async function signIn(data) {
    try {
        const response = await fetch('https://nodejs-serverless-function-express-one-teal.vercel.app/api/test', {
            method: 'POST',
            body: JSON.stringify({ username: data }),
        })

        window.location.href = '/result.html'
        
        if (response.ok) {
            const comeback = await response.json()
            document.getElementById("resulting").innerHTML = "Yes it worked"
            console.log(comeback)
        }
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
        document.getElementById("resulting").innerHTML = "No it didn't work"
    }
}