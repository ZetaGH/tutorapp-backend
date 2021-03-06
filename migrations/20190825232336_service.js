
exports.up = function(knex) {
    return knex.schema.createTable('service',function (table){
        table.increments()
        table
            .integer('id_tutor')
            .unsigned()
            .notNullable()
        table
            .foreign('id_tutor')
            .references('id')
            .inTable('tutor')
            .onDelete('CASCADE')
            
        table.string('description',100).notNullable()
        table.string('name',20).notNullable()
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.timestamps(false,true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('service')
};
