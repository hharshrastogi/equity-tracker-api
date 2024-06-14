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
    allFormData = await prisma.transactional_details.findFirst({
        where: {
            id: primaryId
        }
    })
    console.log(allFormData)
}

app.get('/transaction', async (req,res)=> {
          try{
            let transactionData = await getAllData()
           await prisma.$disconnect()
           res.json(transactionData)
          }
          catch{
          console.error(e)
          await prisma.$disconnect()
          process.exit(1)
          }
    

})