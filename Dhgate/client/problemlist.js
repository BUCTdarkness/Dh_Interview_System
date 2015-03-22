Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');

Template.problemlist.helpers({

  'player':function(){
    var currentUserId = Meteor.userId();
    var Type = Session.get('selectedType');
    if(Meteor.user()==null) return null;
    var currentUser = Meteor.user().emails[0].address;
    if(currentUser!='admin@Dhgate.com'){
      if(Type !=null&&Type!='')
        return PlayersList.find({createdBy:currentUserId,type:Type},{sort:{type:-1,difficulty:-1,name:1}})
      else return PlayersList.find({createdBy:currentUserId},{sort:{type:1,difficulty:-1,name:1}})
    }
    else{
      if(Type !=null&&Type!='')
        return PlayersList.find({type:Type},{sort:{type:-1,difficulty:-1,name:1}})
      else return PlayersList.find({},{sort:{type:1,difficulty:-1,name:1}})     
    }
  },	
  'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
  },  
   'showSelectedPlayer': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer)
  },
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
  'addProblem':function(){
      var addProblem = Session.get('addProblem');
      if(addProblem!=null&&addProblem!="")
        return addProblem;
      else return null;
  },
  'showProblemlist':function(){
      var showProblemlist = Session.get('showProblemlist');
      if(showProblemlist!=null&&showProblemlist!="")
        return showProblemlist;
      else return null;
  },
});
Template.problemlist.events({
  'click .player':function(){
    var playerId = this._id;
    Session.set('selectedPlayer', playerId);
    var selectedPlayer = Session.get('selectedPlayer');
  },
  'click .remove': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('removePlayerData',selectedPlayer);
  },
  'click .add': function(){
    var addProblem = Session.get('addProblem');
    if(addProblem!=null&&addProblem!=""){
      Session.set('addProblem','');
    }
    else{
      Session.set('addProblem','true');
    }
  },
  'click .confirm': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('confirmProblem',selectedPlayer);
  },	
  'click .problemtype0':function(){
    Session.set('selectedType','');
  },
  'click .problemtype1':function(){
    Session.set('selectedType','Algorithm');
  },
  'click .problemtype2':function(){
    Session.set('selectedType','C++');
  },
  'click .problemtype3':function(){
    Session.set('selectedType','JAVA');
  },
  'click .problemtype4':function(){
    Session.set('selectedType','Database');
  },
  'click .problemtype5':function(){
    Session.set('selectedType','DataMining');
  },
  'click .problemtype6':function(){
    Session.set('selectedType','others');
  },
});