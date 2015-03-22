Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');
console.log("Hello client");


Template.historylist.helpers({
  'ifAdmin':function(){
    if(Meteor.user()==null) return null;
    var currentUserId = Meteor.user().emails[0].address;
    if(currentUserId=='admin@Dhgate.com'){
      return "admin";
    }
    else{
      return null;
    }
  },
  'selectHistory':function(){
      var playerId = this._id;
      var selectHistory = Session.get('selectHistory');
      if(playerId == selectHistory){
        return "selected"
      }        
  },
  'historylist':function(){ 
    if(Meteor.user()==null) return null;
    var currentUser = Meteor.user().emails[0].address;
    var currentUserId = Meteor.userId();
    if(currentUserId==null) return null;
    if(currentUser=='admin@Dhgate.com'){
      return HistoryList.find({},{sort:{time:-1}});
    }
    else{
      return HistoryList.find({usedby:currentUserId},{sort:{time:-1}}); 
    }
  },
});

Template.historylist.events({
  'click .historylist':function(){
    var historyid = this._id;
    Session.set('selectHistory',historyid);
  },
  'click .removehistory':function(){
    var selectHistory = Session.get('selectHistory');
    Meteor.call('removeHistoryData',selectHistory);
  },
  'click .removeAllhistory':function(){
    Meteor.call('removeAllHistoryData');
  },
});
