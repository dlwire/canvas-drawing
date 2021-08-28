import express, { Application, Request, Response } from "express";
import cors from 'cors';

import { Shape } from './types';

const PORT: Number = 5000;

const app: Application = express();

app.use(cors());
app.use(express.json());

let shapeStore: Shape[] = [];

app.get(
    '/get-shapes',
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            shapes: shapeStore,
        });
    }
);

app.post(
    '/clear',
    async (req: Request, res: Response): Promise<Response> => {
        shapeStore = [];

        res.status(200).end();
        return res;
    }
)

app.post(
    '/add-shape',
    async (req: Request, res: Response): Promise<Response> => {
        shapeStore.push(req.body);

        res.status(200).end();
        return res;
    }
)

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}
