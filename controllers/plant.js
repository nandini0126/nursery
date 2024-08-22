import Plant from "../models/Plant.js"

const plants =[]

const postPlant = async (req,res)=>{
    const {
        name,
        category,
        image,
        price,
        description
    }=req.body

    
    const newPlant= new Plant({
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    })

    const savedPlant = await newPlant.save()

    res.json({
        success: true,
        data: savedPlant,
        message: "New plant added successfully"
    })
}

const getPlant= async (req,res)=>{

    const allPlants= await Plant.find().sort({updatedAt: -1})
    res.json({
        success:true,
        data: allPlants,
        message: "All plants fetched successfully"
    })
}

const getPlantId = async (req,res)=>{
    const {id}=req.params

    const plant = await Plant.findById(id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant fetched successfully" : "Plant not found"
    })
}

const putPlantId = async (req,res)=>{
    const {
        name,
        category,
        image,
        price,
        description
    }=req.body

    const {id}=req.params

    const updateResult = await Plant.updateOne({_id: id},{
        $set:{
            name: name,
            category: category,
            image: image,
            price: price,
            description: description
        }
    })
    const updatedPlant = await Plant.findById(id)


        res.json({
            success: true,
            data: updatedPlant,
            message: "Plant successfully updated"
        })



    
}

const deletePlantId = async (req,res)=>{
    const {id}=req.params

    await Plant.deleteOne({_id:id})
    res.json({
        success: true,
        data: null,
        message: "Plant deleted successfully"
    })
}

export {
    postPlant, getPlant, getPlantId ,putPlantId, deletePlantId
}