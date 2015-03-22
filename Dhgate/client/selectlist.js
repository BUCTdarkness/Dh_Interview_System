Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');

Template.selectlist.helpers({
  'generatelistAlgorithmEasy':function(){

	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    console.log(parseInt(Algorithm*Easy));
	    if(Algorithm!=''&&Algorithm!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Easy)});
	    }
	    else
	      return null;
  },
  'generatelistAlgorithmNormal':function(){

	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Algorithm!=''&&Algorithm!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Normal)});
	    }
	    else
	      return null;
  },
  'generatelistAlgorithmDifficult':function(){

	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Algorithm!=''&&Algorithm!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Difficult)});
	    }
	    else
	      return null;
  },    
  'generatelistCplusEasy':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Cplus!=''&&Cplus!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Easy)});
	    }
	    else
	      return null;
  },
  'generatelistCplusNormal':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Cplus!=''&&Cplus!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Normal)});
	    }
	    else
	      return null;
  },
  'generatelistCplusDifficult':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Cplus!=''&&Cplus!=null){
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Difficult)});
	    }
	    else
	      return null;
  },

  'generatelistJAVAEasy':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(JAVA!=''&&JAVA!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Easy)});
	    else
	      return null;
  },

  'generatelistJAVANormal':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(JAVA!=''&&JAVA!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Normal)});
	    else
	      return null;
  },
  'generatelistJAVADifficult':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(JAVA!=''&&JAVA!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Difficult)});
	    else
	      return null;
  },

  'generatelistDatabaseEasy':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Database!=''&&Database!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'Database'},{sort: {hit:1},limit:parseInt(Database*Easy)});
	    else
	      return null;
  },

  'generatelistDatabaseNormal':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Database!=''&&Database!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'Database'},{sort: {hit:1},limit:parseInt(Database*Normal)});
	    else
	      return null;
  },
  'generatelistDatabaseDifficult':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(Database!=''&&Database!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'Database'},{sort: {hit:1},limit:parseInt(Database*Difficult)});
	    else
	      return null;
  },

  'generatelistDataMiningEasy':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(DataMining!=''&&DataMining!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Easy)});
	    else
	      return null;
  },

  'generatelistDataMiningNormal':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(DataMining!=''&&DataMining!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Normal)});
	    else
	      return null;
  },

  'generatelistDataMiningDifficult':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');
	    if(DataMining!=''&&DataMining!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Difficult)});
	    else
	      return null;
  },

  'generatelistothersEasy':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');

	    if(others!=''&&others!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'others'},{sort: {hit:1},limit:parseInt(others*Easy)});
	    else
	      return null;
  },

  'generatelistothersNormal':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');

	    if(others!=''&&others!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'others'},{sort: {hit:1},limit:parseInt(others*Normal)});
	    else
	      return null;
  },

  'generatelistothersDifficult':function(){
	    var Num = Session.get('Num');
	    var Easy = parseFloat(Session.get('Easy'));
	    var Normal = parseFloat(Session.get('Normal'));
	    var Difficult = parseFloat(Session.get('Difficult'));
	    var grank=Session.get('rank');
	    var gposition=Session.get('position');
	    var Algorithm=Session.get('Algorithm');
	    var Cplus=Session.get('Cplus');
	    var JAVA=Session.get('JAVA');
	    var Database=Session.get('Database');
	    var DataMining=Session.get('DataMining');
	    var others=Session.get('others');

	    if(others!=''&&others!=null)
	      return PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'others'},{sort: {hit:1},limit:parseInt(others*Difficult)});
	    else
	      return null;
  },  
  'selectlistItem':function(){
      var playerId = this._id;
      var selectrulelist = Session.get('selectlist');
      if(playerId == selectrulelist){
        return "selected"
      }    	
  },
});

Template.selectlist.events({
	'click .selectlist':function(){
	    var searchId = this._id;
	    Session.set('selectlist', searchId);		
	},
});