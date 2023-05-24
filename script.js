var siteCod = Array()

  siteCod['cod'] = Array()

  siteCod['cod'][1] = "https://github.com/nyquin/login-page"
  siteCod['cod'][2] = "https://github.com/nyquin/register-page"
  siteCod['cod'][3] = "https://github.com/nyquin/StopWatch_Project"
  siteCod['cod'][4] = "https://github.com/nyquin/gameMataMosquito"

  siteCod['site'] = Array()

  siteCod['site'][1] = "https://loginpage-nycolas.netlify.app"
  siteCod['site'][2] = "https://registerpage-nycolas.netlify.app"
  siteCod['site'][3] = "https://stopwatch-project-nycolas.netlify.app"
  siteCod['site'][4] = "https://matamosquito-nycolas.netlify.app"


function codLogin(){
  window.open(siteCod['cod'][1]);
}

function siteLogin() {
  window.open(siteCod['site'][1]);
}

/***** pagina de registro ****/

function codRegister(){
  window.open(siteCod['cod'][2]);
}

function siteRegister() {
  window.open(siteCod['site'][2]);
}

/***** stopwatch ****/

function codStopwatch(){
  window.open(siteCod['cod'][3]);
}

function siteStopwatch() {
  window.open(siteCod['site'][3]);
}

/***** game ****/

function codGame(){
  window.open(siteCod['cod'][4]);
}

function siteGame() {
  window.open(siteCod['site'][4]);
}

/***** links no perfil *****/

function linkedin(){
  window.open("https://www.linkedin.com/in/nycolas-andrey/");
}

function github() {
  window.open("https://github.com/nyquin/");
}