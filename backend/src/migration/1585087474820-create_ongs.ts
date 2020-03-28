import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createOngs1585087474820 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'ongs',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'whatsapp',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'city',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'uf',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'createdAt',
          isNullable: false,
          type: 'timestamptz',
          default: 'CURRENT_TIMESTAMP'
        },
        {
          name: 'updatedAt',
          isNullable: false,
          type: 'timestamptz',
          default: 'CURRENT_TIMESTAMP'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('ongs')
  }
}
