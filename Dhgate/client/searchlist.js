Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');

Template.searchlist.helpers({
  'searchlist':function(){
    var query = Session.get('search');
    return PlayersList.find({name:query,confirm:'Yes'},{sort:{type:1,difficulty:-1,name:1}});        
  },	
  'selectedsearchitem':function(){
	  var playerId = this._id;
	  var selectedPlayer = Session.get('selectedsearchitem');
	  if(playerId == selectedPlayer){
	    return "selected"
	  }    
  },
});
Template.searchlist.events({
  'click .searchlist':function(){
      var searchId = this._id;
      Session.set('selectedsearchitem', searchId);
  },
});
