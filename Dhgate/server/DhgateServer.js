Meteor.publish('thePlayers', function(){
    var currentUserId = this.userId;
    return PlayersList.find({})
});
Meteor.publish('Rules', function(){
    var currentUserId = this.userId;
    return RulesList.find({})
});
Meteor.publish('History', function(){
    return HistoryList.find({})
});
Meteor.methods({
    'sendLogMessage': function(){
        console.log("Hello world");
    },
    'insertPlayerData': function(type,name,difficulty,detail,knowledge,source,PerfectAns,NormalAns,BadAns){
        var currentUserId = Meteor.userId();         
        PlayersList.insert({
            type:type,
            name: name,
            difficulty: difficulty,
            detail:detail,
            knowledge:knowledge,
            source:source,
            hit:0,
            PerfectAns:PerfectAns,
            NormalAns:NormalAns,
            BadAns:BadAns,
            createdBy: currentUserId,
            confirm:'No',
            time:new Date().toLocaleString()
        });
    },
    'GenerateProblemlist':function(rank,position){

    },
    'removePlayerData': function(selectedPlayer){
      PlayersList.remove(selectedPlayer);
    },
    'modifyPlayerScore': function(selectedPlayer, scoreValue){
      PlayersList.update(selectedPlayer, {$inc: {hit: scoreValue} });
    },
    'confirmProblem': function(selectedPlayer){
      PlayersList.update(selectedPlayer, {$set: {confirm: 'Yes'} });
    },    
    'insertRuleData1':function(Num,drank,dposition,Algorithm,Cplus,JAVA,Database,DataMining,others,Easy,Normal,Difficult){
        RulesList.insert({
            Num:Num,
            drank:drank,
            dposition:dposition,
            Algorithm:Algorithm,
            Cplus:Cplus,
            JAVA:JAVA,
            Database:Database,
            DataMining:DataMining,
            others:others,
            Easy:Easy,
            Normal:Normal,
            Difficult:Difficult,
            time:new Date().toLocaleString()
        });
    },
    'removeRuleData':function(selectrulelist){
        RulesList.remove(selectrulelist);
    },
    'addHistory':function(id,name,type,difficulty,detail){
        var currentUserId = Meteor.userId();
        var currentUser = Meteor.user().emails[0].address;
        HistoryList.insert({
            problemID:id,
            type:type,
            name:name,
            difficulty:difficulty,
            detail:detail,
            usedby:currentUser,
            time:new Date().toLocaleString()
        });
    },
    'removeHistoryData':function(selectHistory){
        HistoryList.remove(selectHistory);
    },
    'removeAllHistoryData':function(){
        HistoryList.remove({});
    }
});
