export default {
	name: 'social',
	title: 'Social Media',
	type: 'document',
	i18n: false,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			options: {
				list: [
					'facebook',
					'twitter',
					'google',
					'instagram',
					'linkedin'
				]
			}
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'string',
			options: {
				list: [
					'icon-facebook',
					'icon-twitter',
					'icon-google',
					'icon-instagram',
					'icon-linkedin'
				]
			}
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
		}
	]
}