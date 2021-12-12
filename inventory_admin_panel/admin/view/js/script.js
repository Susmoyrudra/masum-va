$( document ).ready(function() {
    showData()
});

function Datainsert(){
    var sub_cat_name=document.getElementById("sub_cat_name").value;
    var sub_cat_code=document.getElementById("sub_cat_code").value;
    var error2="Please Insert Category Type Name" ;
    var error3="Please Insert Category Type Code";
    if(sub_cat_name=='' || sub_cat_code==''){
        if(sub_cat_code=='' && sub_cat_code==''){
            // echo "sadsad";
            var error1 = "Please fill up both forms";
            //  document.getElementById("main_notification").innerHTML= error2;
            //  document.getElementById("main_notification").style.display="auto";
            // document.getElementById("main_notification").style.color="red";
            document.getElementById("sub_notification").innerHTML= error2;
            document.getElementById("sub_notification").style.display="block";
            // document.getElementById("sub_notification").style.display="block";
            // document.getElementById("sub_notification").style.display="block";
            document.getElementById("sub_notification").style.color="red";
             document.getElementById("sub_notification2").innerHTML= error3;
             document.getElementById("sub_notification2").style.display="block";
             document.getElementById("sub_notification2").style.color="red";
            //  document.getElementById("sub_notification").style.display="none";
            //  document.getElementById("sub_notification2").style.display="none";
       }
        else if (sub_cat_name==''){

            var error2 = "Please Insert Category Type Name";
            // echo $error2;
             document.getElementById("sub_notification").innerHTML= error2;
             document.getElementById("sub_notification").style.display="block";
             document.getElementById("sub_notification").style.color="red";
             document.getElementById("main_notification").style.display="none";
             document.getElementById("sub_notification2").style.display="none";
            
             

        }
        else if (sub_cat_code==''){
            var error3 = "Please Insert Category Type Code";
            document.getElementById("sub_notification2").innerHTML= error3;
             document.getElementById("sub_notification2").style.display="block";
             document.getElementById("sub_notification2").style.color="red";
            document.getElementById("sub_notification").style.display="none";
            document.getElementById("main_notification").style.display="none";
        }

        
    }
  else{
    $.ajax({
        method:"POST",
        url:"insert.php",
        data:{
             name:sub_cat_name,
             code:sub_cat_code
        },
        success: function(data){
            alert:(data);
            if (data==1){
                alert ("Both values are already existes");
            }
             else{
                 var success = "Successfully Inserted";
                document.getElementById("main_notification").innerHTML = success;
                 document.getElementById("main_notification").style.display ="block";
                 document.getElementById("main_notification").style.color ="green";
                 document.getElementById("sub_notification").style.display ="none";
                 document.getElementById("sub_notification2").style.display ="none";
             } 
            
            // $('#show_data').html(data);
            // //     document.getElementById("show_table_div").style.display="block";
            //  alert("successfuly");
            showData();
        }
    
            
            
        
    });
    var success = "Successfully Inserted";
             document.getElementById("main_notification").innerHTML=success;
            document.getElementById("main_notification").style.display="block";
             document.getElementById("main_notification").style.color="green";
            //  document.getElementById("main_notification").style.display="none";
             document.getElementById("sub_notification").style.display="none";
             document.getElementById("sub_notification2").style.display="none";
}

}

function showData(){
    $.ajax({
        method: "POST",
        url:"show.php",
        success: function(data){
            $('#show_data').html(data);
            // document.getElementById("show_table_div").style.display="block";
        }
        
    });  
}

//  function ShowData(data){
//      alert("show");
//  }