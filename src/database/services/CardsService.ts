import { getCustomRepository } from 'typeorm';

import { CardsRepository } from '../repositories/CardsRepository';

class CardsService{
    private cardsRepository: CardsRepository;
    constructor(){
        this.cardsRepository = getCustomRepository(CardsRepository);
    }
}
export {CardsService};