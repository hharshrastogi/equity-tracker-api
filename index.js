const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

let allFormData
async function getAllData() {
    allFormData = await prisma.transactional_details.findMany()
    console.log(allFormData)
}

async function getDataById(primaryId) {
    allFormData = await prisma.transactional_details.findFirst({
        where: {
            id: primaryId
        }
    })
    console.log(allFormData)
}

getDataById(1)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })