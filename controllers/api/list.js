const { ObjectId } = require('mongodb')
const List = require('../../models/list')



function indexList(req,res){
    List.findOne({user:ObjectId(req.user._id)})
    .then((foundDoc)=>{
        foundDoc.movies.push(req.body)
        foundDoc.save()
        res.status(200)
    })
    .catch(()=>{
    List.create({user:req.user._id})
    .then((listDoc)=>{
        listDoc.movies.push(req.body)
        listDoc.save()
        res.status(200)
    })})
    .catch((error)=>console.log(error))

}
function getList(req,res){
    List.findOne({user:req.user._id})
    .then((foundDoc)=>{
        res.status(200).json(foundDoc.movies)
    })
    
    .catch((error)=>console.log(error))

}
module.exports={
    indexList,
    getList
}