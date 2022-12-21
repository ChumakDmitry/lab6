import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAllAtributeInAllTable1671617198418 implements MigrationInterface {
    name = 'AddAllAtributeInAllTable1671617198418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercise" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "photo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD "video" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exercise_step" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "kcal" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "protein" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "fat" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food" ADD "carbohydrates" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "food_goal" ADD "isEaten" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "move_goal" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "move_goal" ADD "isDone" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rest" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rest" ADD "isDone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sticker" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "win_stat" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "actualKcal" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "goalKcal" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "actualProtein" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "goalProtein" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "actualFat" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "goalFat" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "actualCarbo" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "goalCarbo" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD "courage" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD "forgiveness" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD "creativity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD "learning" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD "spirituality" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_reward" ADD "timestamp" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "cost" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "size" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "path" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "bucket" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "file" ADD "mime" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" ADD "photo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" ADD "text" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "mime"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "bucket"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "path"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "user_reward" DROP COLUMN "timestamp"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP COLUMN "spirituality"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP COLUMN "learning"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP COLUMN "creativity"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP COLUMN "forgiveness"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP COLUMN "courage"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "goalCarbo"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "actualCarbo"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "goalFat"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "actualFat"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "goalProtein"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "actualProtein"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "goalKcal"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "actualKcal"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "win_stat" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "sticker" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "rest" DROP COLUMN "isDone"`);
        await queryRunner.query(`ALTER TABLE "rest" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "move_goal" DROP COLUMN "isDone"`);
        await queryRunner.query(`ALTER TABLE "move_goal" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "food_goal" DROP COLUMN "isEaten"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "carbohydrates"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "fat"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "protein"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "kcal"`);
        await queryRunner.query(`ALTER TABLE "food" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "exercise_step" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "video"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "text"`);
    }

}
