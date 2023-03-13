const get =(req,res)=>{
    res.send([
        {
            "id":"1",
            "title":"Meditation",
            "image":"https://i.pinimg.com/736x/97/cb/de/97cbdeada72e02103f483afc5f1367f8.jpg",
            "article":"Meditation is all about Connecting with your Soul.Meditation simply means focusing your attention on one object. It can be a simple word, phrase, geometrical figure or candle flame, or even the movement of your breath. Your mind constantly processes a variety of sensations, visual impressions and emotions",
        },
        {
            "id":"2",
            "title":"Healthy And Fit Life",
            "image":"https://i.pinimg.com/736x/68/3e/6b/683e6bb87ccf3dd50bf04ec00bb13fa6.jpg",
            "article":"Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits.1.Plant-based future.2.Botanical boom.3.Mood, cognition, and sleep.4.Microbiome beyond digestive health.5.Body-positive weight management.6.Nutrition accountability.",
        },
        {
            "id":"3",
            "title":"Exercises",
            "image":"https://png.pngtree.com/png-clipart/20200531/ourlarge/pngtree-hand-drawn-indoor-exercise-health-fitness-png-image_2216272.jpg",
            "article":"Exercises not only changes your body but also changes your mind,attitude,and mood.As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, maintain weight loss or meet specific fitness goals, you may need to exercise more. Reducing sitting time is important, too. The more hours you sit each day, the higher your risk of metabolic problems.",
        },
        {
            "id":"4",
            "title":"Yoga",
            "image":"https://thumbs.dreamstime.com/b/yoga-meditation-3929285.jpg",
            "article":"Yoga takes you to the present moment.The only place were life exists.It was a discipline that originated in ancient India and was aimed at instilling peace of mind and body with concentration, meditation, postures and breathing. Yoga can be said to have over 5000 years of history and is probably one of the oldest ways to keep track of your mind and body.",
        }
    ])
}

module.exports.apiController = get;