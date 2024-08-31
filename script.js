const signUp = async (data) => {
    try {
        const response = await fetch('https://nodejs-serverless-function-express-one-teal.vercel.app/api/test', {
            method: 'POST',
            body: JSON.stringify({ username: data }),
        })
        
        const comeback = await response.json()
        console.log(comeback)
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }
}