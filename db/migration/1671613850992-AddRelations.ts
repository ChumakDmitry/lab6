import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1671613850992 implements MigrationInterface {
    name = 'AddRelations1671613850992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "food_goal" ("id" SERIAL NOT NULL, "statId" integer, "foodId" integer, CONSTRAINT "PK_61db758917e903aac6a7da974bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "win_stat" ("id" SERIAL NOT NULL, "statId" integer, CONSTRAINT "PK_1905a2ed315d7524a16d9a68f59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_ability" ("id" SERIAL NOT NULL, "userId" integer, CONSTRAINT "PK_de75583e38b69ea2fc3aa127970" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_reward" ("id" SERIAL NOT NULL, "userId" integer, "rewardId" integer, CONSTRAINT "PK_870b280d018d4f7520abec33561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "move_goal" ADD "statId" integer`);
        await queryRunner.query(`ALTER TABLE "rest" ADD "statId" integer`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" ADD "statId" integer`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" ADD "stickerId" integer`);
        await queryRunner.query(`ALTER TABLE "stat" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "reward" ADD "fileId" integer`);
        await queryRunner.query(`ALTER TABLE "food_goal" ADD CONSTRAINT "FK_4599b8379d3c6c1e069471d8248" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "food_goal" ADD CONSTRAINT "FK_d0e41196388c2a7717cc42d362d" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "move_goal" ADD CONSTRAINT "FK_7669728aa767f1a57cd1bcc9050" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rest" ADD CONSTRAINT "FK_4a0c3712af614071489392991b4" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" ADD CONSTRAINT "FK_12f9b9da8a01b937f051a1ec4cd" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" ADD CONSTRAINT "FK_ca1dc7a510f54dbf319a06498fd" FOREIGN KEY ("stickerId") REFERENCES "sticker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "win_stat" ADD CONSTRAINT "FK_299bf418302bd6601180fac7775" FOREIGN KEY ("statId") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stat" ADD CONSTRAINT "FK_0d79ac0534255a3b34a834c5709" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_ability" ADD CONSTRAINT "FK_8e7cd1669d1790f7acdc01aad80" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_reward" ADD CONSTRAINT "FK_ef8e443d9a7cd2881b2e75ae35d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_reward" ADD CONSTRAINT "FK_ba319255c60a14b32e078b7350a" FOREIGN KEY ("rewardId") REFERENCES "reward"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_305be5a9dc4f5a85ac2019fcb18" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_305be5a9dc4f5a85ac2019fcb18"`);
        await queryRunner.query(`ALTER TABLE "user_reward" DROP CONSTRAINT "FK_ba319255c60a14b32e078b7350a"`);
        await queryRunner.query(`ALTER TABLE "user_reward" DROP CONSTRAINT "FK_ef8e443d9a7cd2881b2e75ae35d"`);
        await queryRunner.query(`ALTER TABLE "user_ability" DROP CONSTRAINT "FK_8e7cd1669d1790f7acdc01aad80"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP CONSTRAINT "FK_0d79ac0534255a3b34a834c5709"`);
        await queryRunner.query(`ALTER TABLE "win_stat" DROP CONSTRAINT "FK_299bf418302bd6601180fac7775"`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" DROP CONSTRAINT "FK_ca1dc7a510f54dbf319a06498fd"`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" DROP CONSTRAINT "FK_12f9b9da8a01b937f051a1ec4cd"`);
        await queryRunner.query(`ALTER TABLE "rest" DROP CONSTRAINT "FK_4a0c3712af614071489392991b4"`);
        await queryRunner.query(`ALTER TABLE "move_goal" DROP CONSTRAINT "FK_7669728aa767f1a57cd1bcc9050"`);
        await queryRunner.query(`ALTER TABLE "food_goal" DROP CONSTRAINT "FK_d0e41196388c2a7717cc42d362d"`);
        await queryRunner.query(`ALTER TABLE "food_goal" DROP CONSTRAINT "FK_4599b8379d3c6c1e069471d8248"`);
        await queryRunner.query(`ALTER TABLE "reward" DROP COLUMN "fileId"`);
        await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" DROP COLUMN "stickerId"`);
        await queryRunner.query(`ALTER TABLE "sticker_stat" DROP COLUMN "statId"`);
        await queryRunner.query(`ALTER TABLE "rest" DROP COLUMN "statId"`);
        await queryRunner.query(`ALTER TABLE "move_goal" DROP COLUMN "statId"`);
        await queryRunner.query(`DROP TABLE "user_reward"`);
        await queryRunner.query(`DROP TABLE "user_ability"`);
        await queryRunner.query(`DROP TABLE "win_stat"`);
        await queryRunner.query(`DROP TABLE "food_goal"`);
    }

}
