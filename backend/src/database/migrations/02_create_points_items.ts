import Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', tableBuilder => {
        tableBuilder.increments('id').primary();
        tableBuilder.integer('point_id').notNullable().references('id').inTable('points')
        tableBuilder.string('item_id').notNullable().references('id').inTable('items')

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('points_items')
}