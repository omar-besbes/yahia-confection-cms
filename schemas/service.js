export default {
	name: 'service',
	title: 'Service',
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
			name: 'shorttext',
			title: 'Description',
			type: 'string'
		}
	]
}