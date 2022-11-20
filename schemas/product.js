export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	i18n: true,
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
			name: 'brand',
			title: 'Brand Name',
			type: 'string'
		}
	]
}