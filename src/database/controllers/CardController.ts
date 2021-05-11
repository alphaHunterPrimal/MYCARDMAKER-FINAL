import { Request, Response } from 'express';

import { CardsService } from '../services/CardsService';

class CardsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const cardsService = new CardsService();

    //const card = await cardsService.create(email);

    //return res.json(card);
  }
  
}

export { CardsController };