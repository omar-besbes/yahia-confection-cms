export default {
	name: 'route',
	title: 'Page',
	type: 'document',
	i18n: true,
	fields: [
		{
			name: 'name',
			title: 'Key',
			type: 'string'
		},
		{
			name: 'link',
			title: 'Path',
			type: 'string'
		},
		{
			name: 'linkText',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'string'
		},
		{
			name: 'child',
			title: 'Has Children ?',
			type: 'boolean'
		},
		{
			name: 'submenu',
			title: 'Submenus',
			type: 'array',
			of: [{type: 'route'}],
			hidden: ({document}) => !document?.child
		}
	]
}