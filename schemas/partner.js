export default {
	name: 'partner',
	title: 'Partner',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'reference',
			to: [{type: 'image'}]
		},
		{
			name: 'website',
			title: 'Website Link',
			type: 'url'
		}
	]
}