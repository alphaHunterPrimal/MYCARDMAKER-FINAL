import {Entity, PrimaryColumn, Column} from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("cards")
class Card{
    @PrimaryColumn()
    id!: string;
    @Column()
    type!: string;
    @Column()
    allKeywords!: string;
    @Column()
    name!: string;
    @Column()
    card!: string;
    @Column()
    sets!: string;
    @Column()
    arctype!: string;
    @Column()
    custoM!: string;
    @Column()
    custoE!: string;
    @Column()
    ganho!: string;
    @Column()
    mov!: string;
    @Column()
    MV!: string;
    @Column()
    vida!: string;
    @Column()
    dano!: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}
export {Card}