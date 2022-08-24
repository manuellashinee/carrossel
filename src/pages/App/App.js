import './App.scss';

function App() {

  

  var counter = 1;
  setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4) {
          counter = 1;
      }
  }, 5000);

  return (
    <section>

      <div>
      <nav >
               <a href='#INICIO'> INICIO </a>
               <a href='# EM CARTAZ'> EM CARTAZ </a>
               <a href='#EM BREVE'> EM BREVE </a>
               <a href='#SNACK BAR'> SNACK BAR </a>
       </nav>
      </div>

      <div className='container2'>
      <div class="slider">
        <div class="slides">
            <input type= "radio" name ="radio-btn" id="radio1"/>
            <input type= "radio" name ="radio-btn" id="radio2"/>
            <input type= "radio" name ="radio-btn" id="radio3"/>
            <input type= "radio" name ="radio-btn" id="radio4"/>

       <div class="slide first">
            <img src="../images/encanto.webp" alt=""/>
       </div>

       <div class="slide">
        <img src="../images/Pijama.jpg" alt="" />
    </div>

    <div class="slide">
        <img src="../images/red.jpg" alt="" />
   </div>

   <div class="slide">
    <img src="../images/telefone.jpg" alt="" />
    </div>
       <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
    </div>

    <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
    </div>


    </div>
    </div>
    </div>
    </section>
  );
}

export default App;
