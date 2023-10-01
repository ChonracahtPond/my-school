import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const regfrom = await prisma.regfrom.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalregfrom = await prisma.regfrom.count();
                const totalPage: number = Math.ceil(totalregfrom / pageSize);
                res.status(200).json({ regfrom });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the regfrom" });
            }
            break;

        case 'POST':
            try {
                const newregfrom = await prisma.regfrom.create({
                    data: req.body,
                });

                res.status(201).json(newregfrom);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the regfrom" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}