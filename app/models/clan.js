import DS from 'ember-data';

export default DS.Model.extend({
	tag: DS.attr('string'),
	cwar: DS.hasMany('cwar', {async:true,inverse:null}),
	//oname: DS.attr('string'),
	adderName: DS.attr('string'),
	date: DS.attr('date'),
	created: DS.attr('string',{
		defaultValue: function(){
			return new Date();
		}
	})
});