import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContactosTable1670545537435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contacto',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
          },
          {
            name: 'edad',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacto');
  }
}
