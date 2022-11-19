export default {
	name: 'service',
	title: 'Service',
	type: 'document',
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
			type: 'reference',
			to: [{type: 'image'}]
		},
		{
			name: 'shorttext',
			title: 'Description',
			type: 'string'
		}
	]
}