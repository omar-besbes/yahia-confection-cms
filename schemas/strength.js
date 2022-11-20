export default {
	name: 'strength',
	title: 'Strength',
	type: 'document',
	i18n: true,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image'
		},
		{
			name: 'text',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'link',
			title: 'Link',
			type: 'object',
			fields: [
				{
					name: 'page',
					title: 'Page Key',
					type: 'reference',
					to: [{type: 'route'}]
				},
				{
					name: 'text',
					title: 'Text',
					type: 'string'
				},
			]
		}
	]
}