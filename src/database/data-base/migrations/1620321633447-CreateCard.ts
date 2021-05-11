import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCard1620321633447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cards', 
                columns: [
                    {name: "id", type: "uuid", isPrimary: true},
                    {name: "type", type: "varchar"},
                    {name: "allKeywords", type: "varchar"},
                    {name: "name", type: "varchar"},
                    {name: "card", type: "varchar"},
                    {name: "sets", type: "varchar"},
                    {name: "arctype", type: "varchar"},
                    {name: "custoM", type: "varchar"},
                    {name: "custoE", type: "varchar"},
                    {name: "ganho", type: "varchar"},
                    {name: "mov", type: "varchar"},
                    {name: "MV", type: "varchar"},
                    {name: "dano", type: "varchar"},
                    {name: "vida", type: "varchar"},
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cards')
    }

}
