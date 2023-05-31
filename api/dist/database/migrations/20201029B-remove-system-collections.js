import { merge } from 'lodash-es';
export async function up(knex) {
    await knex('superscribe_collections').delete().where('collection', 'like', 'superscribe_%');
}
export async function down(knex) {
    const defaults = {
        collection: null,
        hidden: false,
        singleton: false,
        icon: null,
        note: null,
        translations: null,
        display_template: null,
    };
    const systemCollections = [
        {
            collection: 'superscribe_activity',
            note: 'Accountability logs for all events',
        },
        {
            collection: 'superscribe_collections',
            icon: 'list_alt',
            note: 'Additional collection configuration and metadata',
        },
        {
            collection: 'superscribe_fields',
            icon: 'input',
            note: 'Additional field configuration and metadata',
        },
        {
            collection: 'superscribe_files',
            icon: 'folder',
            note: 'Metadata for all managed file assets',
        },
        {
            collection: 'superscribe_folders',
            note: 'Provides virtual directories for files',
        },
        {
            collection: 'superscribe_permissions',
            icon: 'admin_panel_settings',
            note: 'Access permissions for each role',
        },
        {
            collection: 'superscribe_presets',
            icon: 'bookmark_border',
            note: 'Presets for collection defaults and bookmarks',
        },
        {
            collection: 'superscribe_relations',
            icon: 'merge_type',
            note: 'Relationship configuration and metadata',
        },
        {
            collection: 'superscribe_revisions',
            note: 'Data snapshots for all activity',
        },
        {
            collection: 'superscribe_roles',
            icon: 'supervised_user_circle',
            note: 'Permission groups for system users',
        },
        {
            collection: 'superscribe_sessions',
            note: 'User session information',
        },
        {
            collection: 'superscribe_settings',
            singleton: true,
            note: 'Project configuration options',
        },
        {
            collection: 'superscribe_users',
            archive_field: 'status',
            archive_value: 'archived',
            unarchive_value: 'draft',
            icon: 'people_alt',
            note: 'System users for the platform',
        },
        {
            collection: 'superscribe_webhooks',
            note: 'Configuration for event-based HTTP requests',
        },
    ].map((row) => {
        for (const [key, value] of Object.entries(row)) {
            if (value !== null && (typeof value === 'object' || Array.isArray(value))) {
                row[key] = JSON.stringify(value);
            }
        }
        return merge({}, defaults, row);
    });
    await knex.insert(systemCollections).into('superscribe_collections');
}
