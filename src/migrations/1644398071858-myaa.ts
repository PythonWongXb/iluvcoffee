import {MigrationInterface, QueryRunner} from "typeorm";

export class myaa1644398071858 implements MigrationInterface {
    name = 'myaa1644398071858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "demo" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "demo"`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

}
