const { PrismaClient } = require('@prisma/client')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const prisma = new PrismaClient()

// to parse all the body to json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function getAllData() {
    return await prisma.transactional_details.findMany()
    
  }

async function getDataById(primaryId) {
     return await prisma.transactional_details.findUnique({
        where: {
            id: primaryId
        }
    })
    console.log(allFormData);
    return allFormData
}

app.get('/transaction', async (req,res)=> {
          try{
            let transactionData = await getAllData()
           await prisma.$disconnect()
           res.json(transactionData)
          }
          catch (e){
          console.error(e)
          await prisma.$disconnect()
          process.exit(1)
          }
    

})
app.get('/transaction/:id', async (req,res)=> {
  try{
    let transactionData = await getDataById(parseInt(req.params.id))
   await prisma.$disconnect()
   res.json(transactionData)
  }
  catch (e) {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
  }


})

app.post('/transaction', async (req, res) => {
  try {
    let body = req.body
    var dbres = await prisma.transactional_details.create({
      data: {
        broker: body.broker,
        broker_account: body.broker_account,
        transaction_type: body.transaction_type,
        equity_name: body.equity_name,
        transaction_date: body.transaction_date,
        quantity: body.quantity,
        total_price: body.total_price,
        price_per_unit: body.price_per_unit,
        target_percentage: body.target_percentage,
        target_amount: body.target_amount
      }
    })

    res.status(201).json({"status": "Created Successfully", "data": dbres})
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }
})