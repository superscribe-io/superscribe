const updates = [
    {
        table: 'superscribe_fields',
        constraints: [
            {
                column: 'group',
                references: 'superscribe_fields.id',
            },
        ],
    },
    {
        table: 'superscribe_files',
        constraints: [
            {
                column: 'folder',
                references: 'superscribe_folders.id',
            },
            {
                column: 'uploaded_by',
                references: 'superscribe_users.id',
            },
            {
                column: 'modified_by',
                references: 'superscribe_users.id',
            },
        ],
    },
    {
        table: 'superscribe_folders',
        constraints: [
            {
                column: 'parent',
                references: 'superscribe_folders.id',
            },
        ],
    },
    {
        table: 'superscribe_permissions',
        constraints: [
            {
                column: 'role',
                references: 'superscribe_roles.id',
            },
        ],
    },
    {
        table: 'superscribe_presets',
        constraints: [
            {
                column: 'user',
                references: 'superscribe_users.id',
            },
            {
                column: 'role',
                references: 'superscribe_roles.id',
            },
        ],
    },
    {
        table: 'superscribe_revisions',
        constraints: [
            {
                column: 'activity',
                references: 'superscribe_activity.id',
            },
            {
                column: 'parent',
                references: 'superscribe_revisions.id',
            },
        ],
    },
    {
        table: 'superscribe_sessions',
        constraints: [
            {
                column: 'user',
                references: 'superscribe_users.id',
            },
        ],
    },
    {
        table: 'superscribe_settings',
        constraints: [
            {
                column: 'project_logo',
                references: 'superscribe_files.id',
            },
            {
                column: 'public_foreground',
                references: 'superscribe_files.id',
            },
            {
                column: 'public_background',
                references: 'superscribe_files.id',
            },
        ],
    },
    {
        table: 'superscribe_users',
        constraints: [
            {
                column: 'role',
                references: 'superscribe_roles.id',
            },
        ],
    },
];
/**
 * NOTE:
 * Not all databases allow (or support) recursive onUpdate/onDelete triggers. MS SQL / Oracle flat out deny creating them,
 * Postgres behaves erratic on those triggers, not sure if MySQL / Maria plays nice either.
 */
export async function up(knex) {
    for (const update of updates) {
        await knex.schema.alterTable(update.table, (table) => {
            for (const constraint of update.constraints) {
                table.dropForeign([constraint.column]);
                table.foreign(constraint.column).references(constraint.references);
            }
        });
    }
}
export async function down(knex) {
    for (const update of updates) {
        await knex.schema.alterTable(update.table, (table) => {
            for (const constraint of update.constraints) {
                table.dropForeign([constraint.column]);
            }
        });
    }
}
