export default {
	name: 'partner',
	title: 'Partner',
	type: 'document',
	i18n: false,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image'
		},
		{
			name: 'website',
			title: 'Website Link',
			type: 'url'
		}
	]
}