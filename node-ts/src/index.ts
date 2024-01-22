import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const newProduct = await prisma.product.create({
        data: {
            name: "laptop",
            price: 3000,
            stock: true
        }
    })
    console.log(newProduct)
}

main()