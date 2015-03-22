Meteor.subscribe('thePlayers');
Meteor.subscribe('Rules');
Meteor.subscribe('History');
console.log("Hello client");


Template.rulelist.helpers({
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
  'rulelist':function(){
    return RulesList.find({});
  },
  'selectrulelist':function(){
      var playerId = this._id;
      var selectrulelist = Session.get('selectrulelist');
      if(playerId == selectrulelist){
        return "selected"
      }  
  },
  'addRules':function(){
      var addRules = Session.get('addr');
      if(addRules!=null&&addRules!="")
        return addRules;
      else return null;
  },
});
Template.rulelist.events({
  'click .rulelist':function(){
    var searchId = this._id;
    Session.set('selectrulelist', searchId);
  },
  'click .removerules': function(){
    var selectrulelist = Session.get('selectrulelist');
    Meteor.call('removeRuleData',selectrulelist);
  },
  'click .addrules': function(){
    var addrules = Session.get('addr');
    if(addrules!=null&&addrules!=""){
      Session.set('addr','');
    }
    else{
      Session.set('addr','true');
    }
  },
});

Template.addRuleForm.events({
  'submit form': function(event){  
    event.preventDefault();
    var drank = document.getElementById("drank").value;
    var dposition = document.getElementById("dposition").value;
    var Algorithm = event.target.Algorithm.value;
    var Cplus = event.target.Cplus.value;
    var JAVA = event.target.JAVA.value;
    var Database = event.target.Database.value;
    var DataMining = event.target.DataMining.value;
    var others = event.target.others.value;
    var Num = event.target.Num.value;
    var Easy = event.target.Easy.value;
    var Normal = event.target.Normal.value;
    var Difficult = event.target.Difficult.value;
    Session.set('rp','');
    var a = parseFloat(Easy),b = parseFloat(Normal),c=parseFloat(Difficult);
    var v1 = parseInt(Algorithm),v2 = parseInt(Cplus),v3 = parseInt(JAVA),v4 = parseInt(Database), v5= parseInt(DataMining),v6 = parseInt(others);
    console.log(a+" "+b+" "+c);


	if(v1>=0&&v2>=0&&v3>=0&&v4>=0&&v5>=0&&v1+v2+v3+v4+v5==parseInt(Num)){
	    if(a>=0&&a<=1&&b>=0&&b<=1&&c>=0&&c<=1&&a+b+c==1){
		    if(Easy!=""&&Normal!=""&&Difficult!=""&&drank!=""&&dposition!=""&&Algorithm!=""&&Cplus!=""&&JAVA!=""&&Database!=""&&DataMining!=""&&others!=""){
		    	var tmparr = RulesList.find({drank:drank,dposition:dposition});
			    if(tmparr.count()==0){
			    	Meteor.call('insertRuleData1',Num,drank,dposition,Algorithm,Cplus,JAVA,Database,DataMining,others,Easy,Normal,Difficult);
			    	
			    }	
		    	else{
		    		alert("该规则已存在！");
		    	}		   
		    }
		    else{
		      alert("请正确填写题目信息！");
		    }
		}
		else{
			alert("请正确填写难度信息！");
		}
	}
	else{
		alert("请正确填写数量信息！");
	}
  },
});
