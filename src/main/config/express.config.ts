import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import taskRoutes from '../../app/features/tasks/routes/taskRoutes';

export const createServer = () => {
    const app = express();

    app.use(express.json())
    app.use(cors());
    app.use(cookieParser());

    app.use('/api', taskRoutes);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
    });

    return app;

}