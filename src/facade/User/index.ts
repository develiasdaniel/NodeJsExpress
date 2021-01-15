import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        console.log('query',req.query);
        console.log('body',req.body);
        console.log('param',req.params);
        
        const users: any[] = await UserFacade.findAll();
        res.status(HttpStatusCode.OK).json(users);
    } catch (error) {
        next(error);
    }
}