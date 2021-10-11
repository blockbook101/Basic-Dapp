var myWeb3;

var myContract;

App = {
  

  init: async function() {
    
    myWeb3 = new Web3(web3.currentProvider); 

    console.log(myWeb3);

    return await App.initContract();
  },

  initContract: function() {

    $.getJSON('Students.json').then((val)=>{
       console.log("init",val); 

       myContract = TruffleContract(val);

       myContract.setProvider(web3.currentProvider);

       console.log(myContract);

    })
    
  },

  enterData : function(){
    console.log("Entered");

    var sid = $("#sid").val();
    var sname= $("#sname").val();
    var cname = $("#cname").val();

    console.log(sid);
    console.log(sname);

    myContract.deployed().then((val)=>{
    
      console.log(val);

      val.addStudent(sid,sname,cname,{from:myWeb3.eth.accounts[0]}).then((res)=>{
        console.log(res);
        alert("Student Added");

        $("#sid").val(" ");
        $("#sname").val(" ");
        $("#cname").val(" ");

       
      })


    })

  },

  showData: function(){

    var sid = $("#sid").val();

    myContract.deployed().then((val)=>{

      console.log(val);

      val.getStudent(sid).then((res)=>{
        console.log("sid",res);
        $('#a').html(sid);
        $('#b').html(res[0]);
        $('#c').html(res[1]);


      })
    })


  }

  

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
