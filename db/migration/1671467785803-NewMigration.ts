import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1671467785803 implements MigrationInterface {
    name = 'NewMigration1671467785803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" "char" NOT NULL`);
    }

}
