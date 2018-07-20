import DS from 'ember-data';

export default DS.Model.extend({
	//cwar: DS.hasMany('cwar', {async:true,inverse:null}),
	oname: DS.attr('string')
});