import {project} from "./data/project";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void>=> {   
    try {
        await prisma.projects.deleteMany()
        await prisma.$queryRaw`ALTER TABLE Projects AUTO_INCREMENT = 1`
        await prisma.projects.createMany({data:project})
    } catch (error) {
      console.log(error);  
    } 
}        
 main()   