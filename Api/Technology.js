const get =(req,res)=>{
    res.send([
        {
            "id":"1",
            "title":"IOT",
            "image":"https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg",
            "article":"The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.",
            "date":"Date:Today"
        },
        {
            "id":"2",
            "title":"Data Science",
            "image":"https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg",
            "article":"In simple terms, a data scientist's job is to analyze data for actionable insights. Specific tasks include: Identifying the data-analytics problems that offer the greatest opportunities to the organization. Determining the correct data sets and variables.",
            "date":"Date:Today"
        },
        {
            "id":"3",
            "title":"Full Stack Web Devolopment",
            "image":"https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
            "article":"A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)",
            "date":"Date:Today"
        },
        {
            "id":"4",
            "title":"skills demand in Technology",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfQ6gQpIec9kyoES4VPfOVAoYAkK6mAFPJQ&usqp=CAU",
            "article":" IT skills (also known as information technology skills) are technical skills necessary to work within technical support, maintenance, and development. IT skills are a rather wide skill set that range from hardware installment and software development to troubleshooting and data analysis.",
            "date":"Date:Today"
        }
    ])
}

module.exports.apiController = get;