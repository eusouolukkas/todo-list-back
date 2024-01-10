import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from '../../app/features/tasks/routes/taskRoutes';

export const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(cookieParser());

    // const csrfProtect = csurf({ cookie: true });

    // app.get('/tasks', csrfProtect, function(req, res) {
    //     res.render('send', { csrfToken: req.csrfToken() })
    //     })

    // app.post('/tasks', csrfProtect, function(req, res) {
    //     res.send('data is being processed')
    //     })

    app.use('/api', taskRoutes);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err && err.message === 'EBADCSRFTOKEN') {
          res.status(403).json({ error: 'Token CSRF inválido' });
        } else {
          next(err);
        }
      });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
    });

    return app;

}