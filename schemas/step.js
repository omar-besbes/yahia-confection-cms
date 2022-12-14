export default {
	name: 'step',
	title: 'Step',
	type: 'document',
	i18n: true,
	fields: [
		{
			name: 'icon',
			title: 'Icon',
			type: 'string'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'text',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'children',
			title: 'Steps',
			type: 'array',
			of: [{
				type: 'object',
				fields: [
					{
						name: 'video',
						title: 'Video',
						type: 'file'
					},
					{
						name: 'step',
						title: 'Step',
						type: 'step'
					}
				]
			}]
		},
	]
}