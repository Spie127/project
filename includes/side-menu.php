<div class="container">
    <h4><b>COVID19</b><br>
    <?php
echo "Updated " . date("Y/m/d") . "<br>";
?>
    </h4>
  <div class="row">
    <div class="col-md-2">
<div class="card" style="background: rgb(167, 255, 255);">
  <img src="img/virus.png" alt="Avatar" style="width:15%">
    <h4><b>1509</b></h4> 
    <h5>New Cases</h5>
    </div>
<div class="card" style="background: rgb(230, 243, 194);">
  <img src="img/smile.png" alt="Avatar" style="width:15%">
    <h4><b>3853</b></h4> 
    <h5>Recovered</h5> 
    </div>
    <div class="card" style="background: rgb(252, 170, 170);">
  <img src="img/sad.png" alt="Avatar" style="width:15%">
    <h4><b>42</b></h4> 
    <h5>Deaths</h5> 
    </div>
        
  </div>
</div>
</div>
<div class="side-menu animate-dropdown outer-bottom-xs">
    <div class="head"><i class="icon fa fa-align-justify fa-fw"></i> Categories</div>        
    <nav class="yamm megamenu-horizontal" role="navigation">
  
        <ul class="nav">
            <li class="dropdown menu-item">
              <?php $sql=mysqli_query($con,"select id,categoryName  from category");
while($row=mysqli_fetch_array($sql))
{
    ?>
                <a href="category.php?cid=<?php echo $row['id'];?>" class="dropdown-toggle"><i class="icon fa fa-desktop fa-fw"></i>
                <?php echo $row['categoryName'];?></a>
                <?php }?>
                        
</li>
</ul>
    </nav>
</div>

