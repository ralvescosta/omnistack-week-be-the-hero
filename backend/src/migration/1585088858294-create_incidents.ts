import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateIncidents1585088858294 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'incidents',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isNullable: false
        },
        {
          name: 'ongId',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'title',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'value',
          type: 'int',
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
      ],
      foreignKeys: [
        {
          columnNames: ['ongId'],
          referencedTableName: 'ongs',
          referencedColumnNames: ['id'],
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('incidents')
  }
}
