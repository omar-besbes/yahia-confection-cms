export default {
	name: 'locale',
	title: 'Language',
	type: 'document',
	i18n: false,
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'flagIconCode',
			title: 'Icon Code',
			type: 'string'
		},
		{
			name: 'i18nKey',
			title: 'Key',
			type: 'string'
		}
	]
}