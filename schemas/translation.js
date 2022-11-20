export default {
	name: 'translation',
	title: 'Translation',
	type: 'document',
	i18n: true,
	fields: [
		{
			name: 'key',
			title: 'Key',
			type: 'string'
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'object',
			fields: [
				{
					name: 'en',
					title: 'English Translation',
					type: 'string'
				},
				{
					name: 'fr',
					title: 'French Translation',
					type: 'string'
				},
			]
		}
	]
}