const get =(req,res)=>{
    res.send([
        {
            "id":"1",
            "title":"RRR",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU",
            "article":"RRR is about an imaginary friendship between two superheroes,according to Rajamouli. He has said that the bifurcation of Andhra Pradesh, his home state, also had an impact in the conception of the film.",
            "date":"Date:Released in 2022"
        },
        {
            "id":"2",
            "title":"PUSHPA",
            "image":"https://pbs.twimg.com/media/E7HzmKqVcAUg8KN.jpg:large",
            "article":"A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process. A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process",
            "date":"Released in 2022"
        },
        {
            "id":"3",
            "title":"Gangubhai",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP6um_LU7TM5GlBJobEvjcuycEy67qFznXZUgGl26nfCIZFGANroz8TbjmjUUC2rXKto&usqp=CAU",
            "article":"The story follows what it takes for Gangubai to make that vow a reality, with all the trials and tribulations it entails; from a savage beating by a sadistic client to making a powerful ally in local crime boss Rahim (Ajay Devgn) and, ultimately, being in a position to negotiate with the Prime Minister.",
            "date":"Released in 2022",
        },
        {
            "id":"4",
            "title":"Brahmastra",
            "image":"https://screenanarchy.com/assets_c/2022/06/brahmastra-thumb-430xauto-86124.jpg",
            "article":"Brahmastra: Part One' used to be called 'Love' for the longest time because that was the theme of the film. It is a love story and Shiva got his power from love. But 'Part Two: Dev' will be a darker and juicier story in terms of the dramatic conflict. The follow-ups will be darker for sure.",
            "date":"Released in 2022"
        }
    ])
}

module.exports.apiController = get;