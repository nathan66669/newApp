//import Ember from '@ember';
import Helper from '@ember/component/helper'
export function formatDate(params){
	return moment(params[0]).format('DD MMM YY');
}
export default Helper.helper(formatDate);