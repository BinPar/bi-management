import i18n from "i18next";

i18n.init({
	whitelist: ['es', 'en'],
	fallbackLng: 'es',
	debug: false,
	// have a common namespace used around the full app
	ns: ['common', 'greetings'],
	defaultNS: 'common',
});

export default i18n;