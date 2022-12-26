import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1658694616973 implements MigrationInterface {
  name = 'CreatePost1658694616973';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "isActive" boolean NOT NULL DEFAULT '1', CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")); COMMENT ON COLUMN "User"."id" IS 'The user indentity'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
