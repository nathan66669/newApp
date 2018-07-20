import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addClan : function(){
			var tag = this.get('tag');
			var adderName = this.get('adderName');
			var date = this.get('date');
			var newid = tag.substr(1);
			//create new clan
			var newClan = this.store.createRecord('clan', {
				id:newid,
				tag:tag,
				adderName:adderName,
				date: new Date(date)
			
			});
			//Clan
			newClan.save();
			this.setProperties({
				id:'',
				tag:'',
				adderName:'',
				date:''
			});
		}
	}
});