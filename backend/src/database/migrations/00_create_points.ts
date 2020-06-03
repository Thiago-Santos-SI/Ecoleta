import Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('points', tableBuilder => {
        tableBuilder.increments('id').primary();
        tableBuilder.string('image').notNullable();
        tableBuilder.string('name').notNullable();
        tableBuilder.string('email').notNullable();
        tableBuilder.string('whatsapp').notNullable();
        tableBuilder.decimal('latitude').notNullable();
        tableBuilder.decimal('longitude').notNullable();
        tableBuilder.string('city').notNullable();
        tableBuilder.string('uf', 2).notNullable();

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('points')
}