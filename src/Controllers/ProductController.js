const createproduct = async function (req, res){
    try {
        let product = req.body
        let { Name, PackegeSize, Category, MRP, status } = product;
        let files = req.files

        const productImage = await aws.uploadFile(files[0])

        let currencyId = "INR"
        let currencyFormat = "₹"
        let productCreated = {Name ,PackegeSize , Category,MRP ,status , productImage,currencyId,currencyFormat }
        const productCreate = await productModel.create(productCreated);
        return res.status(201).send({ status: true, message: 'Success', data: productCreate });
    }
    catch (err) {
        res.status(500).send(err.message)
    }

}


const getAllProduct= async function(req,res){
    
}