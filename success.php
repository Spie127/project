<?php
include('includes/config.php');

$ref = $_GET['refId'];

$data =[
    'amt'=>$actualamount,
    'rid'=> $ref,
    'pid'=>'Thulo3',
    'scd'=> $merchant_code
];

    $curl = curl_init($fraudcheck_url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    echo $response;
 
    curl_close($curl);
    
    
    if(strpos(  $response, "Success") !== false){
        header("Location:http://localhost/project/index.php ");
    } else{
         header("Location: payment-method.php");
    }
?>