// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import step from "./step";
import locale from "./locale";
import route from "./route";
import partner from "./partner";
import product from "./product";
import service from "./service";
import strength from "./strength";
import figure from "./figure";
import contactInfo from "./contactInfo";
import bannerSlide from "./bannerSlide";
import social from "./social";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		step,
		locale,
		route,
		partner,
		product,
		service,
		strength,
		figure,
		contactInfo,
		bannerSlide,
		social
	]),
})
