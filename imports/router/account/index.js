import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

var account = FlowRouter.group({
  prefix: '/Accounting',
  action: function(){
  }
});

account.route('/', {
	name: 'account',
  action:function() {
  	Session.set('config.title', 'Accounting');
  	if(Meteor) {
      BlazeLayout.render('app', { main: 'account' });
  	} else {
  		BlazeLayout.render('welcome');
  	}
  }
});