import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
		deleteTask: function(id){
			this.store.findRecord('clan', id).then(function(clan){
				clan.deleteRecord();

				clan.save();
			});
		}
	}
});