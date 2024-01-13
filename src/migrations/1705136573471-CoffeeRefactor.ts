import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1705136573471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`
        )
    }

}

// [cmd]: npx typeorm migration:create ./src/migrations/CoffeeRefactors
// npm run build
// [cmd]: npx typeorm migration:run
// [cmd]: npx typeorm migration:revert
