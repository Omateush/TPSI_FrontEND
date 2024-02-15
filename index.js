const app = Vue.createApp(
    {   
        data() 
        {
            return {
            productName: "Navio",
            Productsubtitle: "Nao se afogue.",
            ProductDescription: "Cruise ship",
            ship: "https://i0.statig.com.br/bancodeimagens/45/bv/jk/45bvjkhy48luu055s2z69ieoa.jpg",
            subtitleStyle:{'background-color' : 'brown', 'color' : 'blue'}
            // additional properties later
        }
    }
})
app.mount("#app")