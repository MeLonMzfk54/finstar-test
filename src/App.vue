<template>
  <div id="app">
    <div class="wrapper">
      <ErrorMessageComponent/>
      <HeaderComponent/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import ErrorMessageComponent from "@/components/utils/ErrorMessageComponent";
  import HeaderComponent from "@/components/HeaderComponent";

  export default {
    components: {
      ErrorMessageComponent,
      HeaderComponent
    }
  }
</script>

<style lang="scss">
/*ROBOTO FONT INCLUDE*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/*Variables*/
$maxWidthContainer: 1380px;
$paddingContainer: 0px 15px;
$roboto: 'Roboto', sans-serif;

/*NULL STYLES*/
*{
  padding: 0;
  margin: 0;
  border: 0;
}


*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


:focus,:active{outline:none;}
a:focus,a:active{outline: none;}


nav,footer,header,aside{display: block;}

html,body{
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  font-family: $roboto;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,button,textarea{font-family: inherit;}


input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0;border: 0;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}

.btn {
  padding: 10px;
  transition: .4s all ease;
}

hr {
  height: 1px;
  width: 100%;
  background-color: black ;
}

/*STYLES*/

.wrapper{
  overflow: hidden;
  min-height: 100%;
  width: 100%;
}

.container{
  max-width: $maxWidthContainer;
  padding: $paddingContainer;
  margin: 0 auto;
}

.section {
  padding: 10px 0 50px;
}

.title {
  text-transform: uppercase;
  margin-bottom: 20px;
}

</style>
