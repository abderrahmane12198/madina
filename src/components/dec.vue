<template>


    <div>
  <header>

    <div class="wrapper">
        
    <div>
 
     <a href="index.html"><h1>Madina<span class="orange">Tic</span></h1></a>
         
    <nav>
        <ul>
            <li> <a href="/">Accueil</a>  </li>
            <li> <a href="#steps">About Us</a></li>
            <li><a href="#possibility">services</a></li>
            <li><a href="contactus" >Contact Us</a></li>
            <li><a href="signin">Sign in</a></li>
           
        </ul>  
        
    </nav>
        </div>
   </div>     

</header>
   <div class="box">
    <div class="testbox">    
      <form action="/">
      <center><h1>Modify Declaration</h1></center><br/><br/>
        <div class="colums"> 
          <div class="item">
            <h2>Street</h2>
            <input id="street" type="text"   name="street" required/>
          </div>
          <div class="item">
            <h2>title</h2>
            <input id="city" type="text"   name="city" required/>
          </div>
          
        </div>
        <div class="item">
          <h2>Descreption</h2>
          <textarea id="visit" rows="3"></textarea>
        </div>
        <h2>upload picture</h2>
        <input type="file" @change="onFileSelected">
        <div class="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
      </div>
      </div>
      <footer>
             <h1>Madina<span class="orange">Tic</span></h1>
            <div class="copyright" >Copyright © 2020. All rights reserved.</div>
            
        </footer>
    
    
    </div>
</template>
<script>
export default {
    data (){
        return {}
        },
    methods: {
        onFileSelected(event) {
            console.log(event)
        }

    }
    
}
</script>

