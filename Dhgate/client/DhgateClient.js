// Accounts.config({ restrictCreationByEmailDomain: 'school.edu' });
Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');
console.log("Hello client");

Template.navmain.helpers({
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
});
Template.navmain.events({
  'click .brand':function(){
    // console.log(Meteor.user().emails[0].address);
    Session.set('select','');
    Session.set('History','');
    Session.set('MyProblems','');
    Session.set('search','');
    Session.set('rank','');
    Session.set('position','');
    Session.set('Rules','');    
  },
  'click .MyProblems':function(){
    Session.set('select','');
    Session.set('History','');
    Session.set('MyProblems','MyProblems');
    Session.set('search','');
    Session.set('rank','');
    Session.set('position','');
    Session.set('Rules','');
  },
  'click .select':function(){
    Session.set('select','select');
    Session.set('MyProblems','');
    Session.set('History','');
    Session.set('search','');
    Session.set('rank','');
    Session.set('position','');
    Session.set('Rules','');
  },
  'click .History':function(){
    Session.set('select','');
    Session.set('MyProblems','');
    Session.set('History','History');
    Session.set('search','');
    Session.set('rank','');
    Session.set('position','');
    Session.set('Rules','');
  },
  'click .Rules':function(){
    Session.set('select','');
    Session.set('MyProblems','');
    Session.set('History','');
    Session.set('search','');
    Session.set('rank','');
    Session.set('position','');
    Session.set('Rules','Rules');
  },
  'submit form':function(event){
    event.preventDefault();
    var currentUserId = Meteor.userId();
    if(currentUserId!=null){
      Session.set('select','');
      Session.set('MyProblems','');
      Session.set('History','');
      Session.set('rank','');
      Session.set('position','');
      Session.set('Rules','');
      var search = event.target.search.value;
      if(search!=""&&search!=null)
        Session.set('search',search);  
    }  
    else{
      alert("请先登录");
    }
  }
});
Template.leaderboard.helpers({
  'Welcome':function(){
    var select=Session.get('select');
    var History=Session.get('History');
    var MyProblems=Session.get('MyProblems');
    var search=Session.get('search');
    var rank=Session.get('rank');
    var position=Session.get('position');
    var Rules=Session.get('Rules');
    if(select==null&&History==null&&MyProblems==null&&search==null&&rank==null&&position==null&&Rules==null){
      return true;
    }
    else if(select==''&&History==''&&MyProblems==''&&search==''&&rank==''&&position==''&&Rules==''){
      return true;
    }
    else{
      return null;
    }
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
  'search':function(){
      var search = Session.get('search');
      if(search!=null&&search!="")
        return search;
      else return null;
  },
  'select':function(){
      var select = Session.get('select');
      if(select!=null&&select!="")
        return select;
      else return null;
  },

  'MyProblems':function(){
      var MyProblems = Session.get('MyProblems');
      if(MyProblems!=null&&MyProblems!="")
        return MyProblems;
      else return null;
  },
  'History':function(){
      var Historys = Session.get('History');
      if(Historys!=null&&Historys!="")
        return Historys;
      else return null;    
  },
  'rank':function(){
      var rank = Session.get('rank');
      if(rank!=null&&rank!="")
        return rank;
      else return null;  
  },
  'position':function(){
      var position = Session.get('position');
      if(position!=null&&position!="")
        return position;
      else return null;  
  },
  'rp':function(){
      var rp = Session.get('rp');
      if(rp!=null&&rp!="")
        return rp;
      else return null; 
  },
  'Rules':function(){
      var Rules = Session.get('Rules');
      if(Rules!=null&&Rules!="")
        return Rules;
      else return null;     
  },
});
Template.leaderboard.events({
  'click .print':function(){  
    window.print(); 
  },

  'click .increment':function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, 1);
  },
  'click .decrement':function(){
      var selectedPlayer = Session.get('selectedPlayer');
      Meteor.call('modifyPlayerScore', selectedPlayer, -1);
  },

  'submit form': function(event){
    event.preventDefault();
    var currentUserId = Meteor.userId();
    if(currentUserId!=null){
      Session.set('rank','');
      Session.set('position','');
      Session.set('rp','');
      if(document.getElementById("rank")!=null&&document.getElementById("position")!=null){
        var rank = document.getElementById("rank").value;
        var position = document.getElementById("position").value;
      }

      if(rank!=""&&position!=""&&rank!=null&&position!=null){
        Session.set('rank',rank);
        Session.set('position',position);
        Session.set('rp','1');
        Session.set('Algorithm','');
        Session.set('Cplus','');
        Session.set('JAVA','');
        Session.set('Database','');
        Session.set('DataMining','');
        Session.set('others','');
        var tmparr = RulesList.find({drank:rank,dposition:position});  
        tmparr.forEach(function (post) {
          Session.set('Num',post.Num);
          Session.set('Algorithm',post.Algorithm);
          Session.set('Cplus',post.Cplus);
          Session.set('JAVA',post.JAVA);
          Session.set('Database',post.Database);
          Session.set('DataMining',post.DataMining);
          Session.set('others',post.others);
          Session.set('Easy',post.Easy);
          Session.set('Normal',post.Normal);
          Session.set('Difficult',post.Difficult);
        });

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


        var tmparr1Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Easy)});
        var tmparr1Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Normal)});
        var tmparr1Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'Algorithm'},{sort: {hit:1},limit:parseInt(Algorithm*Difficult)});
        
        var tmparr2Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Easy)});
        var tmparr2Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Normal)});
        var tmparr2Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'C++'},{sort: {hit:1},limit:parseInt(Cplus*Difficult)});        

        var tmparr3Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Easy)});
        var tmparr3Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Normal)});
        var tmparr3Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'JAVA'},{sort: {hit:1},limit:parseInt(JAVA*Difficult)});

        var tmparr4Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'Database'},{sort: {hit:1},limit:parseInt(Database*Easy)});
        var tmparr4Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'Database'},{sort: {hit:1},limit:parseInt(Database*Normal)});
        var tmparr4Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'Database'},{sort: {hit:1},limit:parseInt(Algorithm*Difficult)});

        var tmparr5Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Easy)});
        var tmparr5Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Normal)});
        var tmparr5Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'DataMining'},{sort: {hit:1},limit:parseInt(DataMining*Difficult)});

        var tmparr6Easy = PlayersList.find({confirm:'Yes',difficulty:'Easy',type:'others'},{sort: {hit:1},limit:parseInt(others*Easy)});
        var tmparr6Normal = PlayersList.find({confirm:'Yes',difficulty:'Normal',type:'others'},{sort: {hit:1},limit:parseInt(others*Normal)});
        var tmparr6Difficult = PlayersList.find({confirm:'Yes',difficulty:'Difficult',type:'others'},{sort: {hit:1},limit:parseInt(others*Difficult)});


        
        tmparr1Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr1Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr1Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });

        tmparr2Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr2Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr2Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });

        tmparr3Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr3Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr3Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });

        tmparr4Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr4Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr4Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });


        tmparr5Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr5Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr5Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });



        tmparr6Easy.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr6Normal.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });
        tmparr6Difficult.forEach(function (post) {
          var id = post._id;
          Meteor.call('modifyPlayerScore',id,1); 
          Meteor.call('addHistory',id,post.name,post.type,post.difficulty,post.detail);      
        });                
 
      }
    }
    else{
      alert('请先登录！');
    }
  },
});
Template.addPlayerForm.events({
  'submit form': function(event){
      event.preventDefault();
      var type=document.getElementById("type").value;
      var name = event.target.Name.value;
      var difficulty=document.getElementById("Difficulty").value;
      var detail = event.target.Detail.value;
      var knowledge = event.target.Knowledge.value;
      var source = event.target.Source.value;
      // var hit = event.target.Hit.value;
      var PerfectAns = event.target.PerfectAns.value;
      var NormalAns = event.target.NormalAns.value;
      var BadAns = event.target.BadAns.value;

      if(name!=""&&detail!="")
        Meteor.call('insertPlayerData',type,name,difficulty,detail,knowledge,source,PerfectAns,NormalAns,BadAns);
      else{
        alert("请正确填写题目信息！");
      }
  },

});




