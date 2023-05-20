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

const getProduct= async function(res,req){
    try {
        let productName = req.params.name
        if (!productName)
            return res.status(400).send({ status: false, msg: "please give product Name" })
  
        let product = await productModel.findOne(productName)       
        return res.status(200).send({ status: true, message: "Success", data: product })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
  }

const getProductsByCategory= async function(req,res){
    try {
        let productCategory = req.params.Category
        if (!productCategory)
            return res.status(400).send({ status: false, msg: "please give product Category" })
  
        let product = await productModel.find(productCategory)       
        return res.status(200).send({ status: true, message: "Success", data: product })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
  }
