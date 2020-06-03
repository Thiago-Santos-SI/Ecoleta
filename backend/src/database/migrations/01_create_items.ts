import Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('items', tableBuilder => {
        tableBuilder.increments('id').primary();
        tableBuilder.string('image').notNullable();
        tableBuilder.string('title').notNullable();

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('items')
}