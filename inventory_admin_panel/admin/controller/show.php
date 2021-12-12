<?php
     include_once '../model/db_config.php';

    $sql = "SELECT * FROM sub_categories   ORDER BY sub_cat_id DESC";
    $execute = mysqli_query($link,$sql);
    if($execute->num_rows>0){
        while($row=$execute->fetch_assoc()){
            // echo $row['sub_cat_id'];
            $id = $row['sub_cat_id'];
            $id = (string)$id;
            $ciphering = "AES-128-CTR";
            $iv_length = openssl_cipher_iv_length($ciphering);
            $options = 0;
            $encryption_key = "1234";
            $encryption_iv = "1234567891011121";
            $encryption = openssl_encrypt($id, $ciphering,$encryption_key,$options,$encryption_iv);
            
            echo '<tr>';
            //  echo '<td> '.'Edit'.'</td>'
             echo '<td class >'.$row['sub_cat_name'].'</td>';
             echo '<td class >'.$row['sub_cat_code'].'</td>';
              echo '<td> <a id="'.$encryption.'"  class=" editbtn btn-primary " href ="#"> '.' Edit '.' </a> </td>';
              echo '<td> <a id="'.$encryption.'"  class="btn btn-primary " href ="#"> '.' Delete '.' </a> </td>';
            //     echo '<td> <a target ="__blank" href ="edit.php?id=".$row["sub_cat_id"].">'.'Edit'.'</a></td>';
            //    echo '<td> <a class="btn btn-primary " id ="'.$encryption.'" href="#">'.'Delete'.' </a> </td>';
                echo '</tr>';

        }
    }
?>
<script type="text/javascript">
        $(document).ready(function () {
            $('.editbtn').on('click', function () {
             var sub_cat_id = $(this).attr('id');
                 alert ("id");
                 $.ajax({   
                        method:"POST",
                        url:"fetch_single_data.php",
                        data:{id:sub_cat_id},
                         dataType:'Json',
                        success: function(data){
                            // alert(JSON.stringfy (data[0][sub_cat_name]));
                            localStorage.setItem('name', data[0].sub_cat_name);
                            localStorage.setItem('code', data[0].sub_cat_code);
                            var options {
                                ajaxprefix;''
                            };
                            new Dialogify('../view/layout/edit_data_form.php',options)
                            .title('Edit sub_categories')
                            .buttons([
                                {
                                    text:'cancel',
                                    click:function(e){
                                        this.close();
                                    }
                                },
                            ])

                        }

                     })
        });
      });
    </script>
               
 