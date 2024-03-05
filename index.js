const app = Vue.createApp(
    {   
        data() 
        {
            return {
                userInput: 0,
                cpuRandom: Math.float(Math.random()*11),
                userTries: [],
        }
    }
})
app.mount("#app")