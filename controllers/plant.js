const plants =[
    {
        "id": 5,
        "name": "Astronomia Pink Rose",
        "category": "indoor",
        "image": "https://rukminim2.flixcart.com/image/750/900/l0pm3680/plant-sapling/k/v/6/no-perennial-yes-pink-rose-plant-1-greenhorizon-original-imagcfhtsvbmgnzd.jpeg?q=20&crop=false",
        "price": "160",
        "description": "Astronomia Pink Rose is an extraordinary rose shrub with only five petals providing a unique and inviting look to your landscape design for most of the season. Blooming with its elegant golden stamens it also has the tendency to grow wild but can be trained to be a small climber. Astronomia Pink Roses are also impressive disease-resistant shrubs that are easy to care for and can perfectly coordinate to produce magnificent pink blooms."
    },
    {
        "id": 8,
        "name": "Moth Orchid",
        "category": "indoor",
        "image": "https://nurserynisarga.in/wp-content/uploads/2022/10/orchid-new-moth-e1680517838495.webp",
        "price": "250",
        "description": "The popular Phalaenopsis orchid is one of the easiest varieties of orchids to grow as a houseplant and is often called the beginner orchid due to its easygoing nature, or the moth orchid due to the shape of its blooms. this orchid with leafy stems and long-lasting flowers does best in a bright, warm, humid spot. Indoors, the Phalaenopsis will typically bloom about once a year, for up to three months."
    },
    {
        "id": 4,
        "name": "Jasmine",
        "category": "indoor",
        "image": "https://36vine.com/s/img/wp-content/uploads/2023/12/Indoor-Jasmine-Plant.webp",
        "price": "320",
        "description": "Jasmine, with its intoxicating scent, is more than just a pretty face in the plant world.Transforming your home into a fragrant paradise with indoor jasmine flowers is an adventure in both gardening and sensory delight. Jasmine plants are like sunbathers; they love their light bright but not too harsh. "
    }
]

const postPlant = (req,res)=>{
    const {
        name,
        category,
        image,
        price,
        description
    }=req.body

    if(!name){
        res.json({
            success: false,
            data: null,
            message: "Name should not be empty"
        })
    }
    if(!category){
        res.json({
            success: false,
            data: null,
            message: "category should not be empty"
        })
    }
    if(!image){
        res.json({
            success: false,
            data: null,
            message: "image should not be empty"
        })
    }
    if(!price){
        res.json({
            success: false,
            data: null,
            message: "Price should not be empty"
        })
    }
    if(!description){
        res.json({
            success: false,
            data: null,
            message: "description should not be empty"
        })
    }

    const randomID = Math.round(Math.random()*10000)

    const newPlant={
        id: randomID,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    })


}

const getPlant= (req,res)=>{
    res.json({
        success:true,
        data: plants,
        message: "All plants fetched successfully"
    })
}

const getPlantId = (req,res)=>{
    const {id}=req.params

    const plant = plants.find((p)=>p.id==id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant fetched successfully" : "Plant not found"
    })
}

const putPlantId = (req,res)=>{
    const {
        name,
        category,
        image,
        price,
        description
    }=req.body

    const {id}=req.params

    let index = -1
    
    plants.forEach((plant,i)=>{
        if(plant.id == id){
            index=i
        }
    })

    const newObj= {
        id,
        name,
        category,
        image,
        price,
        description
    }

    if(index==-1){
        return res.json({
            success: false,
            data: null,
            message: "Plant not found"
        })
    }
    else{
        plants[index]=newObj

        return res.json({
            success: true,
            data: newObj,
            message: "Plant successfully updated"
        })

    }

    
}

const deletePlantId = (req,res)=>{
    const {id}=req.params

    let index = -1
    
    plants.forEach((plant,i)=>{
        if(plant.id == id){
            index=i
        }
    })

    if(index==-1){
        return res.json({
            success: false,
            data: null,
            message: "Plant not found"
        })
    }

    plants.splice(index,1)

    res.json({
        success: true,
        data: null,
        message: "Plant deleted successfully"
    })
}

export {
    postPlant, getPlant, getPlantId ,putPlantId, deletePlantId
}