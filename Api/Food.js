const get =(req,res)=>{
    res.send([
        {
            "id":"1",
            "title":"PanCakes",
            "image":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
            "article":"Pancakes later became a perfect way of using up these ingredients, with the pancake first featured in cookery books around 1439.“And every man and maide doe take their turne, And tosse their Pancakes up for feare they burne.",
        },
        {
            "id":"2",
            "title":"Pasta",
            "image":"https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
            "article":"It's Part of a Good Diet.Pasta is made from grain, one of the basic food groups in a healthy diet that also can include vegetables, fruits, fish, and poultry. It's a good source of energy and can give you fiber, too, if it's made from whole grain. That can help with stomach problems and may help lower cholesterol.There are two major classifications: pasta fresca (fresh) and pasta secca (dried). From here, there are more than 400 unique types of pasta: sheets, strips, long strands, cylinders, unique shapes, flavors, and many other local varieties.",
        },
        {
            "id":"3",
            "title":"Mushroom Curry",
            "image":"https://cdn2.stylecraze.com/wp-content/uploads/2014/09/Mushroom-Curry.jpg",
            "article":"Mushrooms are a great addition to the diet for vegans and vegetarians. They are one of the few non-animal sources of vitamin D, and they also contain B vitamins and varying amounts of fiber and protein.Mushrooms have beta-glucan which improves immunity, it also helps in reducing chronic inflammation.",
        },
        {
            "id":"4",
            "title":"Andhra Vegetable Meal",
            "image":"https://i.pinimg.com/originals/21/84/b7/2184b754177f36685409721915f4fe77.jpg",
            "article":"A complete vegetarian Andhra meal typically consists of rice served with ghee, pulihora, chapati or puri, pappu (lentils), sambar, chaaru (rasam), fried and wet curries, appadam (papadum), odiyalu, chutney, pachadi, avakaya, yoghurt and a sweet for dessert.",
        }
    ])
}

module.exports.apiController = get;