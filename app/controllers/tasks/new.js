import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTask : function(){
			var title = this.get('title');
			var description = this.get('description');
			var date = this.get('date');

			//create new task
			var newTask = this.store.createRecord('task', {
				title:title,
				description:description,
				date: new Date(date)
			});
			//newTask
			newTask.save();
			this.setProperties({
				title:'',
				description:'',
				date:''
			});
		}
	}
});
