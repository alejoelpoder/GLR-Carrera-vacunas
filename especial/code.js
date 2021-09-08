$('.vacuna').click(function () {
    if($(this).hasClass('vacunaActiva')) {
        $(this).removeClass('vacunaActiva');
    } else {
        $(this).addClass('vacunaActiva');
    }
});
$('.cerrar-mobile').click(function () {
    $('.infoVac-mobile').css('display','none');
    $('.titular-textos').css('display','block');
    $('.vacunasSite-mobile').css('display','block');
    $('.carreraSite').css('display','block');
    $('.nota-ensayos').css('display','block');
    $('footer').css('display','block');
    $('.cerrar').css('display','none');
    $('.leyenda').css('display','block');
});


//Sobre Vacuna 1 (Sinovac)

$('.vacuna1').click(function () {
    if($('.vacuna1').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna1Row"><div class="vacunaBlock vacuna1Block-logo"><p class="vacuna-info-tit">Sinovac</p><div class="logo-de-vacuna infoVac1-logo close"><h2>Sinovac</h2><h3>Fase 3</h3><p>La compañía privada china Sinovac Biotech desarrolló una vacuna que usa el virus inactivado o muerto. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna1Block-marzo"></div><div class="vacunaBlock vacuna1Block-abril"><div class="info infoVac1-abril-close"><div class="infoVac1-abril close"><h3>Sinovac - Información de abril</h3><ul><li><p>16 de abril:  Fase 1/2</p><p>China, 744 participantes (18 a 59 años)</p><a href="https://clinicaltrials.gov/ct2/show/NCT04352608">Link de referencia</a></li><li><p>La potencial vacuna de Sinovac es probada en monos Rhesus y resulta efectiva</p><a href="https://larepublica.pe/mundo/2020/04/25/covid-19-en-china-laboratorio-experimenta-en-monos-vacuna-de-coronavirus-sinovac-biotech/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-abril">x</p></div><div class="vacunaBlock vacuna1Block-mayo"><div class="info infoVac1-mayo-close"><div class="infoVac1-mayo close"><h3>Sinovac - Información de mayo</h3><ul><li><p>22 de mayo: fase 1/2 </p><p>China, 422 participantes (+60 años)</p><a href="https://clinicaltrials.gov/ct2/show/NCT04383574">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-mayo">x</p></div><div class="vacunaBlock vacuna1Block-junio"></div><div class="vacunaBlock vacuna1Block-julio"><div class="info infoVac1-julio-close"><div class="infoVac1-julio close"><h3>Sinovac - Información de julio</h3><ul><li><p>21 de julio: fase 3 </p><p>13.060 participantes, Brasil </p><a href="https://clinicaltrials.gov/ct2/show/NCT04456595">Link de referencia</a></li><li><p>BRASIL INICIA PRUEBAS</p><a href="https://larepublica.pe/mundo/2020/07/21/brasil-inicia-ensayos-de-vacuna-experimental-china-de-sinovac-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-julio">x</p></div><div class="vacunaBlock vacuna1Block-agosto"><div class="info infoVac1-agosto-close"><div class="infoVac1-agosto close"><h3>Sinovac - Información de agosto</h3><ul><li><p>10 agosto: fase 3</p><p>1.620 participantes, Indonesia</p><a href="https://clinicaltrials.gov/ct2/show/NCT04383574">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-agosto">x</p></div><div class="vacunaBlock vacuna1Block-septiembre"><div class="info infoVac1-septiembre-close"><div class="infoVac1-septiembre close"><h3>Sinovac - Información de septiembre</h3><ul><li><p>14 de setiembre: fase 3</p><p>13.000 participantes, Turquía</p><a href="https://clinicaltrials.gov/ct2/show/NCT04582344">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-septiembre">x</p></div><div class="vacunaBlock vacuna1Block-octubre"><div class="info infoVac1-octubre-close"><div class="infoVac1-octubre close"><h3>Sinovac - Información de octubre</h3><ul><li><p>31 de octubre: fase 1/2</p><p>552 participantes (3 a 17 años) China</p><a href="https://clinicaltrials.gov/ct2/show/NCT04383574">Link de referencia</a></li><li><p>31 de octubre: fase 3, China</p><p>1040 participantes</p><a href="https://clinicaltrials.gov/ct2/show/NCT04617483">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-octubre">x</p></div><div class="vacunaBlock vacuna1Block-noviembre"></div><div class="vacunaBlock vacuna1Block-diciembre fin-de-año"><div class="info infoVac1-diciembre-close"><div class="infoVac1-diciembre close"><h3>Sinovac - Información de diciembre</h3><ul><li><p>8 de diciembre: Los resultados preliminares revelan una eficacia del 97% de la potencial vacuna</p><a href="https://larepublica.pe/mundo/2020/12/08/reportan-que-posible-vacuna-china-tiene-eficacia-de-97-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac1-diciembre">x</p></div><div class="vacunaBlock vacuna1Block-finJeringa"></div><div class="vacunaBlock vacuna1Block-ultimoTramo"></div><div class="vacunaBlock vacuna1Block-Meta"></div></div>');
        $('.vacuna1').removeClass('blockOff');
        $('.vacuna1').addClass('blockOn');
    }else {
        $('.vacuna1Row').remove(); 
        $('.vacuna1').removeClass('blockOn');
        $('.vacuna1').addClass('blockOff');
    }
});

$(document).on('click','.vacuna1Block-logo',function() {
    if($('.infoVac1-logo').hasClass('close')) {
        $('.infoVac1-logo').addClass('open');
        $('.infoVac1-logo').removeClass('close');
    } else if($('.infoVac1-logo').hasClass('open')){
        $('.infoVac1-logo').addClass('close');
        $('.infoVac1-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna1Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna1Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-abril-close',function() {
    $('.infoVac1-abril').addClass('open');
    $('.infoVac1-abril').css('display','block');
    $('.cerrar-Vac1-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac1-abril',function() {
    $('.infoVac1-abril').css('display','none');
    $('.cerrar-Vac1-abril').css('display','none');
});
$(document).on('click','.infoVac1-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-mayo-close',function() {
    $('.infoVac1-mayo').addClass('open');
    $('.infoVac1-mayo').css('display','block');
    $('.cerrar-Vac1-mayo').css('display','block');
});
$(document).on('click','.cerrar-Vac1-mayo',function() {
    $('.infoVac1-mayo').css('display','none');
    $('.cerrar-Vac1-mayo').css('display','none');
});
$(document).on('click','.infoVac1-mayo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-mayo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-julio-close',function() {
    $('.infoVac1-julio').addClass('open');
    $('.infoVac1-julio').css('display','block');
    $('.cerrar-Vac1-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac1-julio',function() {
    $('.infoVac1-julio').css('display','none');
    $('.cerrar-Vac1-julio').css('display','none');
});
$(document).on('click','.infoVac1-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-agosto-close',function() {
    $('.infoVac1-agosto').addClass('open');
    $('.infoVac1-agosto').css('display','block');
    $('.cerrar-Vac1-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac1-agosto',function() {
    $('.infoVac1-agosto').css('display','none');
    $('.cerrar-Vac1-agosto').css('display','none');
});
$(document).on('click','.infoVac1-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-septiembre-close',function() {
    $('.infoVac1-septiembre').addClass('open');
    $('.infoVac1-septiembre').css('display','block');
    $('.cerrar-Vac1-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac1-septiembre',function() {
    $('.infoVac1-septiembre').css('display','none');
    $('.cerrar-Vac1-septiembre').css('display','none');
});
$(document).on('click','.infoVac1-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-octubre-close',function() {
    $('.infoVac1-octubre').addClass('open');
    $('.infoVac1-octubre').css('display','block');
    $('.cerrar-Vac1-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac1-octubre',function() {
    $('.infoVac1-octubre').css('display','none');
    $('.cerrar-Vac1-octubre').css('display','none');
});
$(document).on('click','.infoVac1-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac1-diciembre-close',function() {
    $('.infoVac1-diciembre').addClass('open');
    $('.infoVac1-diciembre').css('display','block');
    $('.cerrar-Vac1-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac1-diciembre',function() {
    $('.infoVac1-diciembre').css('display','none');
    $('.cerrar-Vac1-diciembre').css('display','none');
});
$(document).on('click','.infoVac1-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac1-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 2 (Sinopharm + Wuhan)

$('.vacuna2').click(function () {
    if($('.vacuna2').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna2Row"><div class="vacunaBlock vacuna2Block-logo"><p class="vacuna-info-tit">Sinopharm + Wuhan</p><div class="logo-de-vacuna infoVac2-logo close"><h2>Sinopharm + Wuhan</h2><h3>Fase 3</h3><p>El Instituto de Productos Biológicos de Wuhan desarrolló una vacuna que usa el virus inactivado o muerto. La compañía china Sinopharm se encarga de realizar los ensayos clínicos. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna2Block-marzo"></div><div class="vacunaBlock vacuna2Block-abril"><div class="info infoVac2-abril-close"><div class="infoVac2-abril close"><h3>Sinopharm + Wuhan - Información de abril</h3><ul><li><p>11 abril: Fase 1/2</p><p>Inicia ensayo clínico en China.</p><p>Número de participantes: 1.456</p><a href="http://www.chictr.org.cn/showprojen.aspx?proj=52227">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac2-abril">x</p></div><div class="vacunaBlock vacuna2Block-mayo"></div><div class="vacunaBlock vacuna2Block-junio"></div><div class="vacunaBlock vacuna2Block-julio"><div class="info infoVac2-julio-close"><div class="infoVac2-julio close"><h3>Sinopharm + Wuhan - Información de julio</h3><ul><li><p>18 julio: Fase 3</p><p>Inicia ensayo clínico masivo en Emiratos Árabes Unidos.</p><p>Número de participantes: 15.000</p></li></ul></div></div><p class="cerrar cerrar-Vac2-julio">x</p></div><div class="vacunaBlock vacuna2Block-agosto"><div class="info infoVac2-agosto-close"><div class="infoVac2-agosto close"><h3>Sinopharm + Wuhan - Información de agosto</h3><ul><li><p>13 agosto: resultados fase 1/2</p><p>Los participantes desarrollaron anticuerpos contra el virus. No se registraron reacciones adversas graves.</p><a href="https://jamanetwork.com/journals/jama/fullarticle/2769612">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac2-agosto">x</p></div><div class="vacunaBlock vacuna2Block-septiembre"><div class="info infoVac2-septiembre-close"><div class="infoVac2-septiembre close"><h3>Sinopharm + Wuhan - Información de septiembre</h3><ul><li><p>10 setiembre: Fase 3</p><p>Inicia ensayo clínico masivo en Perú.</p><p>N° participantes: 6.000</p><a href="https://clinicaltrials.gov/ct2/show/NCT04612972">Link de referencia</a></li><li><p>14 setiembre: Aprobación de emergencia de E. U. A</p><p>Emiratos Árabes Unidos aprobó el uso de emergencia de las vacunas experimentales de Sinopharm.</p></li></ul></div></div><p class="cerrar cerrar-Vac2-septiembre">x</p></div><div class="vacunaBlock vacuna2Block-octubre"><div class="info infoVac2-octubre-close"><div class="infoVac2-octubre close"><h3>Sinopharm + Wuhan - Información de octubre</h3><ul><li><p>13 de octubre: fase 3, Marruecos</p><p>600 participantes.</p><a href="http://www.chictr.org.cn/showprojen.aspx?proj=62581">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac2-octubre">x</p></div><div class="vacunaBlock vacuna2Block-noviembre"><div class="info infoVac2-noviembre-close"><div class="infoVac2-noviembre close"><h3>Sinopharm + Wuhan - Información de noviembre</h3><ul><li><p>19 noviembre: vacunación en China</p><p>Sinopharm anunció que casi un millón de ciudadanos chinos se han aplicado sus vacunas. En ese país, se autorizó el uso de emergencia en julio para inocular a funcionarios del gobierno, estudiantes y trabajadores que viajaban al extranjero.</p><a href="https://larepublica.pe/mundo/2020/11/19/casi-un-millon-de-personas-han-recibido-la-vacuna-experimental-china-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac2-noviembre">x</p></div><div class="vacunaBlock vacuna2Block-diciembre fin-de-año"><div class="info infoVac2-diciembre-close"><div class="infoVac2-diciembre close"><h3>Sinopharm + Wuhan - Información de diciembre</h3><ul><li><p>11 diciembre: se suspende ensayo en Perú</p><p>El Instituto Nacional de Salud (INS) suspendió los ensayos de las dos vacunas experimentales de Sinopharm después de que un voluntario presentara “síntomas neurológicos”.</p><a href="https://larepublica.pe/sociedad/2020/12/11/ins-suspende-ensayos-clinicos-de-candidata-a-vacuna-de-sinopharm/">Link de referencia</a></li><li><p>16 diciembre: se reanuda ensayo en Perú</p><p>Después de concluir que el caso reportado no estaba relacionado con la vacuna, el INS y Sinopharm reanudaron los ensayos de las dos vacunas experimentales.</p><a href="https://larepublica.pe/sociedad/2020/12/17/reanudan-estudio-clinico-de-vacuna-sinopharm-en-peru/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac2-diciembre">x</p></div><div class="vacunaBlock vacuna2Block-finJeringa"><div class="info infoVac2-finJeringa-close"><div class="infoVac2-finJeringa close"><p>Aprobación anticipada en China</p></div></div><p class="cerrar cerrar-Vac2-finJeringa">x</p></div><div class="vacunaBlock vacuna2Block-ultimoTramo"><div class="info infoVac2-ultimoTramo-close"><div class="infoVac2-ultimoTramo close"><p>Aprobación de emergencia en Emiratos Árabes Unidos</p></div></div><p class="cerrar cerrar-Vac2-ultimoTramo">x</p></div><div class="vacunaBlock vacuna2Block-Meta"></div></div>');
        $('.vacuna2').removeClass('blockOff');
        $('.vacuna2').addClass('blockOn');
    }else {
        $('.vacuna2Row').remove(); 
        $('.vacuna2').removeClass('blockOn');
        $('.vacuna2').addClass('blockOff');
    }
});

$(document).on('click','.vacuna2Block-logo',function() {
    if($('.infoVac2-logo').hasClass('close')) {
        $('.infoVac2-logo').addClass('open');
        $('.infoVac2-logo').removeClass('close');
    } else if($('.infoVac2-logo').hasClass('open')){
        $('.infoVac2-logo').addClass('close');
        $('.infoVac2-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna2Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna2Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-abril-close',function() {
    $('.infoVac2-abril').addClass('open');
    $('.infoVac2-abril').css('display','block');
    $('.cerrar-Vac2-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac2-abril',function() {
    $('.infoVac2-abril').css('display','none');
    $('.cerrar-Vac2-abril').css('display','none');
});
$(document).on('click','.infoVac2-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-julio-close',function() {
    $('.infoVac2-julio').addClass('open');
    $('.infoVac2-julio').css('display','block');
    $('.cerrar-Vac2-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac2-julio',function() {
    $('.infoVac2-julio').css('display','none');
    $('.cerrar-Vac2-julio').css('display','none');
});
$(document).on('click','.infoVac2-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-agosto-close',function() {
    $('.infoVac2-agosto').addClass('open');
    $('.infoVac2-agosto').css('display','block');
    $('.cerrar-Vac2-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac2-agosto',function() {
    $('.infoVac2-agosto').css('display','none');
    $('.cerrar-Vac2-agosto').css('display','none');
});
$(document).on('click','.infoVac2-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-septiembre-close',function() {
    $('.infoVac2-septiembre').addClass('open');
    $('.infoVac2-septiembre').css('display','block');
    $('.cerrar-Vac2-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac2-septiembre',function() {
    $('.infoVac2-septiembre').css('display','none');
    $('.cerrar-Vac2-septiembre').css('display','none');
});
$(document).on('click','.infoVac2-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-octubre-close',function() {
    $('.infoVac2-octubre').addClass('open');
    $('.infoVac2-octubre').css('display','block');
    $('.cerrar-Vac2-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac2-octubre',function() {
    $('.infoVac2-octubre').css('display','none');
    $('.cerrar-Vac2-octubre').css('display','none');
});
$(document).on('click','.infoVac2-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-noviembre-close',function() {
    $('.infoVac2-noviembre').addClass('open');
    $('.infoVac2-noviembre').css('display','block');
    $('.cerrar-Vac2-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac2-noviembre',function() {
    $('.infoVac2-noviembre').css('display','none');
    $('.cerrar-Vac2-noviembre').css('display','none');
});
$(document).on('click','.infoVac2-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-diciembre-close',function() {
    $('.infoVac2-diciembre').addClass('open');
    $('.infoVac2-diciembre').css('display','block');
    $('.cerrar-Vac2-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac2-diciembre',function() {
    $('.infoVac2-diciembre').css('display','none');
    $('.cerrar-Vac2-diciembre').css('display','none');
});
$(document).on('click','.infoVac2-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-finJeringa-close',function() {
    $('.infoVac2-finJeringa').addClass('open');
    $('.infoVac2-finJeringa').css('display','block');
    $('.cerrar-Vac2-finJeringa').css('display','block');
});
$(document).on('click','.cerrar-Vac2-finJeringa',function() {
    $('.infoVac2-finJeringa').css('display','none');
    $('.cerrar-Vac2-finJeringa').css('display','none');
});
$(document).on('click','.infoVac2-finJeringa-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-finJeringa-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac2-ultimoTramo-close',function() {
    $('.infoVac2-ultimoTramo').addClass('open');
    $('.infoVac2-ultimoTramo').css('display','block');
    $('.cerrar-Vac2-ultimoTramo').css('display','block');
});
$(document).on('click','.cerrar-Vac2-ultimoTramo',function() {
    $('.infoVac2-ultimoTramo').css('display','none');
    $('.cerrar-Vac2-ultimoTramo').css('display','none');
});
$(document).on('click','.infoVac2-ultimoTramo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac2-ultimoTramo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 3 (Sinopharm + Beijing)

$('.vacuna3').click(function () {
    if($('.vacuna3').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna3Row"><div class="vacunaBlock vacuna3Block-logo"><p class="vacuna-info-tit">Sinopharm + Beijing</p><div class="logo-de-vacuna infoVac3-logo close"><h2>Sinopharm + Beijing</h2><h3>Fase 3</h3><p>El Instituto de Productos Biológicos de Beijing desarrolló una vacuna que usa el virus inactivado o muerto. La compañía china Sinopharm se encarga de realizar los ensayos clínicos. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna3Block-marzo"></div><div class="vacunaBlock vacuna3Block-abril"><div class="info infoVac3-abril-close"><div class="infoVac3-abril close"><h3>Sinopharm + Beijing - Información de abril</h3><ul><li><p>29 abril: Fase 1-2</p><p>Inicia ensayo clínico en China.</p><p>Número de participantes: 640</p><a target="_blank" href="http://www.chictr.org.cn/showproj.aspx?proj=53003">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-abril">x</p></div><div class="vacunaBlock vacuna3Block-mayo"></div><div class="vacunaBlock vacuna3Block-junio"></div><div class="vacunaBlock vacuna3Block-julio"><div class="info infoVac3-julio-close"><div class="infoVac3-julio close"><h3>Sinopharm + Beijing - Información de julio</h3><ul><li><p>16 de julio: Fase 3</p><p>Inicia ensayo clínico masivo en Emiratos Árabes Unidos, Bahrein, Egipto, Jordania.</p><p>Número de participantes: 45.000</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04510207#contacts">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-julio">x</p></div><div class="vacunaBlock vacuna3Block-agosto"></div><div class="vacunaBlock vacuna3Block-septiembre"><div class="info infoVac3-septiembre-close"><div class="infoVac3-septiembre close"><h3>Sinopharm + Beijing - Información de septiembre</h3><ul><li><p>10 setiembre: Fase 3</p><p>Inicia ensayo clínico masivo en Perú.</p><p>N° participantes: 6.000</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04612972">Link de referencia</a></li><li><p>14 setiembre: Aprobación de emergencia de E. U. A</p><p>Emiratos Árabes Unidos aprobó el uso de emergencia de las vacunas experimentales de Sinopharm.</p></li><li><p>16 de setiembre: fase 3 en Argentina</p><p>3.000 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04560881">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-septiembre">x</p></div><div class="vacunaBlock vacuna3Block-octubre"><div class="info infoVac3-octubre-close"><div class="infoVac3-octubre close"><h3>Sinopharm + Beijing - Información de octubre</h3><ul><li><p>15 octubre: resultados fase 1/2</p><p>Los participantes desarrollaron anticuerpos contra el virus. No se registraron reacciones adversas graves.</p><a target="_blank" href="https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30831-8/fulltext">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-octubre">x</p></div><div class="vacunaBlock vacuna3Block-noviembre"><div class="info infoVac3-noviembre-close"><div class="infoVac3-noviembre close"><h3>Sinopharm + Beijing - Información de noviembre</h3><ul><li><p>19 noviembre: vacunación en China</p><p>Sinopharm anunció que casi un millón de ciudadanos chinos se han aplicado sus vacunas. En ese país, se autorizó el uso de emergencia en julio para inocular a funcionarios del gobierno, estudiantes y trabajadores que viajaban al extranjero.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/19/casi-un-millon-de-personas-han-recibido-la-vacuna-experimental-china-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-noviembre">x</p></div><div class="vacunaBlock vacuna3Block-diciembre fin-de-año"><div class="info infoVac3-diciembre-close"><div class="infoVac3-diciembre close"><h3>Sinopharm + Beijing - Información de noviembre</h3><ul><li><p>9 diciembre: Aprobación total de E. U. A.</p><p>Emiratos Árabes Unidos se convirtió en el primer país en otorgar la aprobación completa de esta vacuna contra la COVID-19. Indicaron que el preparado tiene un 86% de efectividad.</p><a target="_blank" href="https://www.nytimes.com/2020/12/09/business/china-coronavirus-vaccine-united-arab-emirates.html">Link de referencia</a></li><li><p>11 diciembre: se suspende ensayo en Perú.</p><p>El Instituto Nacional de Salud (INS) suspendió los ensayos de las dos vacunas experimentales de Sinopharm después de que un voluntario presentara “síntomas neurológicos”.</p><a target="_blank" href="https://larepublica.pe/sociedad/2020/12/11/ins-suspende-ensayos-clinicos-de-candidata-a-vacuna-de-sinopharm/">Link de referencia</a></li><li><p>14 diciembre: Aprobación total de Bahrein.</p><p>La nación árabe de Bahrein fue el segundo país que aprobó esta vacuna.</p><a target="_blank" href="https://edition.cnn.com/2020/12/13/china/sinopharm-coronavirus-vaccine-intl-hnk/index.html">Link de referencia</a></li><li><p>16 diciembre: se reanuda ensayo en Perú.</p><p>Después de concluir que el caso reportado no estaba relacionado con la vacuna, el INS y Sinopharm reanudaron los ensayos de las dos vacunas experimentales.</p><a target="_blank" href="https://larepublica.pe/sociedad/2020/12/17/reanudan-estudio-clinico-de-vacuna-sinopharm-en-peru/">Link de referencia</a></li><li><p>30 de diciembre: Sinopharm anuncia que esta vacuna tiene una eficacia de 79.34%</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/30/vacuna-contra-la-covid-19-de-sinopharma-tiene-una-efectividad-de-7934-mdga/">Link de referencia</a></li><li><p>30 de diciembre: China le da su apobación total a esta vacuna de Sinopharm.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/31/china-aprueba-el-uso-comercial-de-la-vacuna-de-sinopharm/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac3-diciembre">x</p></div><div class="vacunaBlock vacuna3Block-finJeringa"><div class="info infoVac3-finJeringa-close"><div class="infoVac3-finJeringa close"><p>Aprobación anticipada en China</p></div></div><p class="cerrar cerrar-Vac3-finJeringa">x</p></div><div class="vacunaBlock vacuna3Block-ultimoTramo"></div><div class="vacunaBlock vacuna3Block-Meta"><div class="info infoVac3-meta-close"><div class="infoVac3-meta close"><p>Aprobación total en China, Emiratos Árabes Unidos y Bahrein.</p></div></div><p class="cerrar cerrar-Vac3-meta">x</p></div></div>');
        $('.vacuna3').removeClass('blockOff');
        $('.vacuna3').addClass('blockOn');
    }else {
        $('.vacuna3Row').remove(); 
        $('.vacuna3').removeClass('blockOn');
        $('.vacuna3').addClass('blockOff');
    }
});

$(document).on('click','.vacuna3Block-logo',function() {
    if($('.infoVac3-logo').hasClass('close')) {
        $('.infoVac3-logo').addClass('open');
        $('.infoVac3-logo').removeClass('close');
    } else if($('.infoVac3-logo').hasClass('open')){
        $('.infoVac3-logo').addClass('close');
        $('.infoVac3-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna3Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna3Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-abril-close',function() {
    $('.infoVac3-abril').addClass('open');
    $('.infoVac3-abril').css('display','block');
    $('.cerrar-Vac3-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac3-abril',function() {
    $('.infoVac3-abril').css('display','none');
    $('.cerrar-Vac3-abril').css('display','none');
});
$(document).on('click','.infoVac3-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-julio-close',function() {
    $('.infoVac3-julio').addClass('open');
    $('.infoVac3-julio').css('display','block');
    $('.cerrar-Vac3-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac3-julio',function() {
    $('.infoVac3-julio').css('display','none');
    $('.cerrar-Vac3-julio').css('display','none');
});
$(document).on('click','.infoVac3-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-septiembre-close',function() {
    $('.infoVac3-septiembre').addClass('open');
    $('.infoVac3-septiembre').css('display','block');
    $('.cerrar-Vac3-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac3-septiembre',function() {
    $('.infoVac3-septiembre').css('display','none');
    $('.cerrar-Vac3-septiembre').css('display','none');
});
$(document).on('click','.infoVac3-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-octubre-close',function() {
    $('.infoVac3-octubre').addClass('open');
    $('.infoVac3-octubre').css('display','block');
    $('.cerrar-Vac3-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac3-octubre',function() {
    $('.infoVac3-octubre').css('display','none');
    $('.cerrar-Vac3-octubre').css('display','none');
});
$(document).on('click','.infoVac3-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-noviembre-close',function() {
    $('.infoVac3-noviembre').addClass('open');
    $('.infoVac3-noviembre').css('display','block');
    $('.cerrar-Vac3-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac3-noviembre',function() {
    $('.infoVac3-noviembre').css('display','none');
    $('.cerrar-Vac3-noviembre').css('display','none');
});
$(document).on('click','.infoVac3-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-diciembre-close',function() {
    $('.infoVac3-diciembre').addClass('open');
    $('.infoVac3-diciembre').css('display','block');
    $('.cerrar-Vac3-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac3-diciembre',function() {
    $('.infoVac3-diciembre').css('display','none');
    $('.cerrar-Vac3-diciembre').css('display','none');
});
$(document).on('click','.infoVac3-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-finJeringa-close',function() {
    $('.infoVac3-finJeringa').addClass('open');
    $('.infoVac3-finJeringa').css('display','block');
    $('.cerrar-Vac3-finJeringa').css('display','block');
});
$(document).on('click','.cerrar-Vac3-finJeringa',function() {
    $('.infoVac3-finJeringa').css('display','none');
    $('.cerrar-Vac3-finJeringa').css('display','none');
});
$(document).on('click','.infoVac3-finJeringa-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-finJeringa-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac3-meta-close',function() {
    $('.infoVac3-meta').addClass('open');
    $('.infoVac3-meta').css('display','block');
    $('.cerrar-Vac3-meta').css('display','block');
});
$(document).on('click','.cerrar-Vac3-meta',function() {
    $('.infoVac3-meta').css('display','none');
    $('.cerrar-Vac3-meta').css('display','none');
});
$(document).on('click','.infoVac3-meta-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac3-meta-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 4 (AstraZeneca + Oxford)

$('.vacuna4').click(function () {
    if($('.vacuna4').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna4Row"><div class="vacunaBlock vacuna4Block-logo"><p class="vacuna-info-tit">AstraZeneca + Oxford</p><div class="logo-de-vacuna infoVac4-logo close"><h2>Vacuna AstraZeneca + Oxford</h2><h3>Fase 3</h3><p>Investigadores de la Universidad de Oxford modificaron un adenovirus que infecta a chimpancés para que lleve material genético del SARS-CoV-2. La compañía británico-sueca AstraZeneca se unió para realizar los ensayos clínicos de esta vacuna. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna4Block-marzo"></div><div class="vacunaBlock vacuna4Block-abril"><div class="info infoVac4-abril-close"><div class="infoVac4-abril close"><h3>AstraZeneca + Oxford - Información de abril</h3><ul><li><p>23 abril: Fase 1/2</p><p>Inicia ensayo clínico en Reino Unido.</p><p>Número de participantes: 1077</p><a target="_blank" href="https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=12166">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-abril">x</p></div><div class="vacunaBlock vacuna4Block-mayo"><div class="info infoVac4-mayo-close"><div class="infoVac4-mayo close"><h3>AstraZeneca + Oxford - Información de mayo</h3><ul><li><p>28 mayo: Fase 2/3</p><p>Inicia ensayo clínico en Reino Unido y Brasil.</p><p>Número de participantes: 12.390</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04400838">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-mayo">x</p></div><div class="vacunaBlock vacuna4Block-junio"><div class="info infoVac4-junio-close"><div class="infoVac4-junio close"><h3>AstraZeneca + Oxford - Información de junio</h3><ul><li><p>24 junio: Fase 1/2</p><p>Inicia ensayo clínico en Sudáfrica.</p><p>Número de participantes: 2.000</p><a target="_blank" href="https://pactr.samrc.ac.za/TrialDisplay.aspx?TrialID=12166">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-junio">x</p></div><div class="vacunaBlock vacuna4Block-julio"><div class="info infoVac4-julio-close"><div class="infoVac4-julio close"><h3>AstraZeneca + Oxford - Información de julio</h3><ul><li><p>20 julio: resultados de fase 1/2 en Reino Unido.</p><p>Los participantes desarrollaron anticuerpos y células T contra el virus. La inmunidad fue reforzada con la segunda dosis.</p><p>No se reportaron efectos adversos graves.</p><a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/32702298/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-julio">x</p></div><div class="vacunaBlock vacuna4Block-agosto"><div class="info infoVac4-agosto-close"><div class="infoVac4-agosto close"><h3>AstraZeneca + Oxford - Información de agosto</h3><ul><li><p>31 agosto: Fase 3</p><p>Comienza ensayo clínico masivo en EE. UU</p><p>N° de participantes: 30.000</p><a target="_blank" href="https://www.nih.gov/news-events/news-releases/phase-3-clinical-testing-us-astrazeneca-covid-19-vaccine-candidate-begins">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-agosto">x</p></div><div class="vacunaBlock vacuna4Block-septiembre"><div class="info infoVac4-septiembre-close"><div class="infoVac4-septiembre close"><h3>AstraZeneca + Oxford - Información de septiembre</h3><ul><li><p>8 setiembre: Se detienen los ensayos.</p><p>La farmacéutica AztraZeneca detuvo sus ensayos clínicos de Fase 3 en todo el mundo para investigar el caso de dos voluntarios que presentaban síntomas de mielitis transversa.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/09/08/coronavirus-pausan-pruebas-de-la-vacuna-de-oxford-y-astrazaneca-por-sospecha-de-reaccion-adversa-en-voluntario/">Link de referencia</a><a target="_blank" href="https://larepublica.pe/mundo/2020/09/20/coronavirus-un-segundo-voluntario-de-la-vacuna-candidata-de-oxford-y-astrazeneca-desarrollo-rara-enfermedad-revela-informe/">Link de referencia</a></li><li><p>12 setiembre: Los ensayos comienzan a reanudarse.</p><p>Oxford y AstraZeneca anunciaron que estaban listos para reanudar los ensayos globales después de que comités independientes garantizaron la seguridad de las pruebas. En un comunicado, informaron que no hallaron pruebas suficientes para vincular la mielitis transversa a la vacunación.</p><a target="_blank" href="https://covid19vaccinetrial.co.uk/files/cov002pisages18-55yearsv11011sept2020pdf">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-septiembre">x</p></div><div class="vacunaBlock vacuna4Block-octubre"></div><div class="vacunaBlock vacuna4Block-noviembre"><div class="info infoVac4-noviembre-close"><div class="infoVac4-noviembre close"><h3>AstraZeneca + Oxford - Información de noviembre</h3><ul><li><p>19 noviembre: resultados de fase 2/3 en Reino Unido.</p><p>Personas de diversas edades (18 a más de 70 años) desarrollaron anticuerpos y células T. Los mayores generaron una respuesta inmune tan sólida como los jóvenes.</p><p>No se registraron efectos adversos graves.</p><a target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)32466-1/fulltext">Link de referencia</a></li><li><p>23 noviembre: Resultados de eficacia</p><p>Tras analizar los primeros 131 casos de COVID-19 en los voluntarios, se determinó que la vacuna tenía una eficacia de 90% cuando se aplicaba primero media dosis y luego la dosis completa, y 62% cuando se aplicó dos dosis completas. Por esa razón, la eficacia media fue 70,4%.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/23/candidata-a-vacuna-de-oxford-y-astrazeneca-muestra-efectividad-de-hasta-90-por-ciento-mdga/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-noviembre">x</p></div><div class="vacunaBlock vacuna4Block-diciembre fin-de-año"><div class="info infoVac4-diciembre-close"><div class="infoVac4-diciembre close"><h3>AstraZeneca + Oxford - Información de diciembre</h3><ul><li><p>8 diciembre: Resultados globales (Reino Unido, Brasil y Sudáfrica).</p><p>En un artículo científico, detallan los resultados anunciados previamente y se confirma que un voluntario que murió a causa de la COVID-19 estaba en el grupo de control (había recibido una vacuna contra otra enfermedad).</p><a target="_blank" href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)32661-1/fulltext">Link de referencia</a></li><li><p>11 diciembre: Colaboración con Rusia.</p><p>AstraZeneca anuncia la combinación de su vacuna con rusa Sputnik V (también basada en adenovirus) en un ensayo clínico para ver si ofrecen una protección más sólida.</p><a target="_blank" href="https://www.astrazeneca.ru/content/az-ru/media/news/2020/20201211-ru201.html">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac4-diciembre">x</p></div><div class="vacunaBlock vacuna4Block-finJeringa"></div><div class="vacunaBlock vacuna4Block-ultimoTramo"><div class="info infoVac4-ultimoTramo-close"><div class="infoVac4-ultimoTramo close"><p>Aprobación de emergencia en Reino Unido.</p></div></div><p class="cerrar cerrar-Vac4-ultimoTramo">x</p></div><div class="vacunaBlock vacuna4Block-Meta"></div></div>');
        $('.vacuna4').removeClass('blockOff');
        $('.vacuna4').addClass('blockOn');
    }else {
        $('.vacuna4Row').remove(); 
        $('.vacuna4').removeClass('blockOn');
        $('.vacuna4').addClass('blockOff');
    }
});

$(document).on('click','.vacuna4Block-logo',function() {
    if($('.infoVac4-logo').hasClass('close')) {
        $('.infoVac4-logo').addClass('open');
        $('.infoVac4-logo').removeClass('close');
    } else if($('.infoVac4-logo').hasClass('open')){
        $('.infoVac4-logo').addClass('close');
        $('.infoVac4-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna4Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna4Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-abril-close',function() {
    $('.infoVac4-abril').addClass('open');
    $('.infoVac4-abril').css('display','block');
    $('.cerrar-Vac4-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac4-abril',function() {
    $('.infoVac4-abril').css('display','none');
    $('.cerrar-Vac4-abril').css('display','none');
});
$(document).on('click','.infoVac4-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-mayo-close',function() {
    $('.infoVac4-mayo').addClass('open');
    $('.infoVac4-mayo').css('display','block');
    $('.cerrar-Vac4-mayo').css('display','block');
});
$(document).on('click','.cerrar-Vac4-mayo',function() {
    $('.infoVac4-mayo').css('display','none');
    $('.cerrar-Vac4-mayo').css('display','none');
});
$(document).on('click','.infoVac4-mayo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-mayo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-junio-close',function() {
    $('.infoVac4-junio').addClass('open');
    $('.infoVac4-junio').css('display','block');
    $('.cerrar-Vac4-junio').css('display','block');
});
$(document).on('click','.cerrar-Vac4-junio',function() {
    $('.infoVac4-junio').css('display','none');
    $('.cerrar-Vac4-junio').css('display','none');
});
$(document).on('click','.infoVac4-junio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-junio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-julio-close',function() {
    $('.infoVac4-julio').addClass('open');
    $('.infoVac4-julio').css('display','block');
    $('.cerrar-Vac4-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac4-julio',function() {
    $('.infoVac4-julio').css('display','none');
    $('.cerrar-Vac4-julio').css('display','none');
});
$(document).on('click','.infoVac4-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-agosto-close',function() {
    $('.infoVac4-agosto').addClass('open');
    $('.infoVac4-agosto').css('display','block');
    $('.cerrar-Vac4-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac4-agosto',function() {
    $('.infoVac4-agosto').css('display','none');
    $('.cerrar-Vac4-agosto').css('display','none');
});
$(document).on('click','.infoVac4-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-septiembre-close',function() {
    $('.infoVac4-septiembre').addClass('open');
    $('.infoVac4-septiembre').css('display','block');
    $('.cerrar-Vac4-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac4-septiembre',function() {
    $('.infoVac4-septiembre').css('display','none');
    $('.cerrar-Vac4-septiembre').css('display','none');
});
$(document).on('click','.infoVac4-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-noviembre-close',function() {
    $('.infoVac4-noviembre').addClass('open');
    $('.infoVac4-noviembre').css('display','block');
    $('.cerrar-Vac4-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac4-noviembre',function() {
    $('.infoVac4-noviembre').css('display','none');
    $('.cerrar-Vac4-noviembre').css('display','none');
});
$(document).on('click','.infoVac4-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-diciembre-close',function() {
    $('.infoVac4-diciembre').addClass('open');
    $('.infoVac4-diciembre').css('display','block');
    $('.cerrar-Vac4-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac4-diciembre',function() {
    $('.infoVac4-diciembre').css('display','none');
    $('.cerrar-Vac4-diciembre').css('display','none');
});
$(document).on('click','.infoVac4-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac4-ultimoTramo-close',function() {
    $('.infoVac4-ultimoTramo').addClass('open');
    $('.infoVac4-ultimoTramo').css('display','block');
    $('.cerrar-Vac4-ultimoTramo').css('display','block');
});
$(document).on('click','.cerrar-Vac4-ultimoTramo',function() {
    $('.infoVac4-ultimoTramo').css('display','none');
    $('.cerrar-Vac4-ultimoTramo').css('display','none');
});
$(document).on('click','.infoVac4-ultimoTramo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac4-ultimoTramo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 5 (CanSino Biologics Inc.)

$('.vacuna5').click(function () {
    if($('.vacuna5').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna5Row"><div class="vacunaBlock vacuna5Block-logo"><p class="vacuna-info-tit">CanSino Biologics Inc.</p><div class="logo-de-vacuna infoVac5-logo close"><h2>CanSino Biologics Inc.</h2><h3>Fase 3</h3><p>La compañía china Cansino Biologics, en alianza con la Academia de Ciencias Militares Médicas de ese país, desarrolló una vacuna basada en el adenovirus Ad5 modificado. Se aplica una dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna5Block-marzo"><div class="info infoVac5-marzo-close"><div class="infoVac5-marzo close"><h3>CanSino Biologics Inc. - Información de marzo</h3><ul><li><p>16 de marzo: fase 1</p><p>China, 108 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04313127">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-marzo">x</p></div><div class="vacunaBlock vacuna5Block-abril"><div class="info infoVac5-abril-close"><div class="infoVac5-abril close"><h3>CanSino Biologics Inc. - Información de abril</h3><ul><li><a target="_blank" href="https://larepublica.pe/ciencia/2020/04/10/coronavirus-en-china-vacuna-contra-la-covid-19-pasa-a-segunda-fase-y-busca-voluntarios/">Información</a></li><li><p>12 de abril: fase 2</p><p>China, 508 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04341389">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-abril">x</p></div><div class="vacunaBlock vacuna5Block-mayo"><div class="info infoVac5-mayo-close"><div class="infoVac5-mayo close"><h3>CanSino Biologics Inc. - Información de mayo</h3><ul><li><p>22 de mayo</p><p>La vacuna candidata produj anticuerpos específicos contra el virus y células T en 14 días.</p><a target="_blank" href="https://larepublica.pe/ciencia/2020/05/22/vacuna-coronavirus-china-anuncia-que-es-segura-y-crea-inmunidad-contra-covid-19-tras-resultados-iniciales/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-mayo">x</p></div><div class="vacunaBlock vacuna5Block-junio"></div><div class="vacunaBlock vacuna5Block-julio"><div class="info infoVac5-julio-close"><div class="infoVac5-julio close"><h3>CanSino Biologics Inc. - Información de julio</h3><ul><li><p>20 de julio: La vacuna candidata produjo una fuerte reacción de anticuerpos en los ensayos de fase 2 en China.</p><a target="_blank" href="https://larepublica.pe/ciencia/2020/07/20/coronavirus-vacuna-de-oxford-y-cansino-biologics-generan-respuesta-inmune-positiva-en-ensayos/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-julio">x</p></div><div class="vacunaBlock vacuna5Block-agosto"><div class="info infoVac5-agosto-close"><div class="infoVac5-agosto close"><h3>CanSino Biologics Inc. - Información de agosto</h3><ul><li><p>1 de agosto: fase 1/2</p><p>696 participantes, Canadá.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04398147#contactlocation">Link de referencia</a></li><li><p>29 de agosto: Canadá cancela acuerdos con CanSino para el desarrollo de la vacuna</p><a target="_blank" href="https://larepublica.pe/mundo/2020/08/29/canada-cancelo-acuerdos-con-china-para-producir-vacuna-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-agosto">x</p></div><div class="vacunaBlock vacuna5Block-septiembre"><div class="info infoVac5-septiembre-close"><div class="infoVac5-septiembre close"><h3>CanSino Biologics Inc. - Información de septiembre</h3><ul><li><p>8 de setiembre: La vacuna demuestra eficacia contra las mutaciones halladas hasta el momento del SARS-CoV.-2</p><a target="_blank" href="https://larepublica.pe/ciencia/2020/09/08/coronavirus-vacuna-experimental-china-demostro-eficacia-contra-mutaciones-de-covid-19-afirma-desarrollador/">Link de referencia</a></li><li><p>11 de setiembre: fase 3</p><p>500 participantes, Rusia.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04540419">Link de referencia</a></li><li><p>15 de setiembre: fase 3</p><p>40.000 participantes, Argentina, Chile, México, Pakistán, Rusia.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04526990">Link de referencia</a></li><li><p>24 de setiembre: fase 2</p><p>481 participantes, China.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04566770">Link de referencia</a></li><li><p>26 de setiembre: fase 1 </p><p>89 participantes, China. </p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04568811">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-septiembre">x</p></div><div class="vacunaBlock vacuna5Block-octubre"><div class="info infoVac5-octubre-close"><div class="infoVac5-octubre close"><h3>CanSino Biologics Inc. - Información de octubre</h3><ul><li><p>15 de octubre: CanSino realiza acuerdos con México para la compra anticipada de 35 millones de dosis de la vacuna candidata.</p><a target="_blank" href="http://www.cansinotech.com/html/1///179/180/556.html">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-octubre">x</p></div><div class="vacunaBlock vacuna5Block-noviembre"><div class="info infoVac5-noviembre-close"><div class="infoVac5-noviembre close"><h3>CanSino Biologics Inc. - Información de noviembre</h3><ul><li><p>6 de noviembre: fase 3</p><p>México, 15.000 participantes.</p><a target="_blank" href="https://www.gob.mx/sre/prensa/llegan-a-mexico-las-primeras-vacunas-candidatas-de-cansino-biologics-para-iniciar-su-ensayo-clinico-fase-iii-para-enfrentar-covid-19">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac5-noviembre">x</p></div><div class="vacunaBlock vacuna5Block-diciembre fin-de-año"></div><div class="vacunaBlock vacuna5Block-finJeringa"></div><div class="vacunaBlock vacuna5Block-ultimoTramo"></div><div class="vacunaBlock vacuna5Block-Meta"></div></div>');
        $('.vacuna5').removeClass('blockOff');
        $('.vacuna5').addClass('blockOn');
    }else {
        $('.vacuna5Row').remove(); 
        $('.vacuna5').removeClass('blockOn');
        $('.vacuna5').addClass('blockOff');
    }
});

$(document).on('click','.vacuna5Block-logo',function() {
    if($('.infoVac5-logo').hasClass('close')) {
        $('.infoVac5-logo').addClass('open');
        $('.infoVac5-logo').removeClass('close');
    } else if($('.infoVac5-logo').hasClass('open')){
        $('.infoVac5-logo').addClass('close');
        $('.infoVac5-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna5Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna5Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-marzo-close',function() {
    $('.infoVac5-marzo').addClass('open');
    $('.infoVac5-marzo').css('display','block');
    $('.cerrar-Vac5-marzo').css('display','block');
});
$(document).on('click','.cerrar-Vac5-marzo',function() {
    $('.infoVac5-marzo').css('display','none');
    $('.cerrar-Vac5-marzo').css('display','none');
});
$(document).on('click','.infoVac5-marzo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-marzo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-abril-close',function() {
    $('.infoVac5-abril').addClass('open');
    $('.infoVac5-abril').css('display','block');
    $('.cerrar-Vac5-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac5-abril',function() {
    $('.infoVac5-abril').css('display','none');
    $('.cerrar-Vac5-abril').css('display','none');
});
$(document).on('click','.infoVac5-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-mayo-close',function() {
    $('.infoVac5-mayo').addClass('open');
    $('.infoVac5-mayo').css('display','block');
    $('.cerrar-Vac5-mayo').css('display','block');
});
$(document).on('click','.cerrar-Vac5-mayo',function() {
    $('.infoVac5-mayo').css('display','none');
    $('.cerrar-Vac5-mayo').css('display','none');
});
$(document).on('click','.infoVac5-mayo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-mayo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-julio-close',function() {
    $('.infoVac5-julio').addClass('open');
    $('.infoVac5-julio').css('display','block');
    $('.cerrar-Vac5-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac5-julio',function() {
    $('.infoVac5-julio').css('display','none');
    $('.cerrar-Vac5-julio').css('display','none');
});
$(document).on('click','.infoVac5-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-agosto-close',function() {
    $('.infoVac5-agosto').addClass('open');
    $('.infoVac5-agosto').css('display','block');
    $('.cerrar-Vac5-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac5-agosto',function() {
    $('.infoVac5-agosto').css('display','none');
    $('.cerrar-Vac5-agosto').css('display','none');
});
$(document).on('click','.infoVac5-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-septiembre-close',function() {
    $('.infoVac5-septiembre').addClass('open');
    $('.infoVac5-septiembre').css('display','block');
    $('.cerrar-Vac5-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac5-septiembre',function() {
    $('.infoVac5-septiembre').css('display','none');
    $('.cerrar-Vac5-septiembre').css('display','none');
});
$(document).on('click','.infoVac5-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-octubre-close',function() {
    $('.infoVac5-octubre').addClass('open');
    $('.infoVac5-octubre').css('display','block');
    $('.cerrar-Vac5-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac5-octubre',function() {
    $('.infoVac5-octubre').css('display','none');
    $('.cerrar-Vac5-octubre').css('display','none');
});
$(document).on('click','.infoVac5-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac5-noviembre-close',function() {
    $('.infoVac5-noviembre').addClass('open');
    $('.infoVac5-noviembre').css('display','block');
    $('.cerrar-Vac5-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac5-noviembre',function() {
    $('.infoVac5-noviembre').css('display','none');
    $('.cerrar-Vac5-noviembre').css('display','none');
});
$(document).on('click','.infoVac5-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac5-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 6 (Gamaleya Research Institute)

$('.vacuna6').click(function () {
    if($('.vacuna6').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna6Row"><div class="vacunaBlock vacuna6Block-logo"><p class="vacuna-info-tit">Gamaleya Research Institute</p><div class="logo-de-vacuna infoVac6-logo close"><h2>Gamaleya Research Institute</h2><h3>Fase 3</h3><p>El Instituto de Investigación Gamaleya, parte del Ministerio de Salud de Rusia, ha elaborado una vacuna que se aplica en dos dosis, primero el adenovirus modificado Ad 5 y luego el Adenovirus modificado Ad26.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna6Block-marzo"></div><div class="vacunaBlock vacuna6Block-abril"></div><div class="vacunaBlock vacuna6Block-mayo"></div><div class="vacunaBlock vacuna6Block-junio"><div class="info infoVac6-junio-close"><div class="infoVac6-junio close"><h3>Gamaleya Research Institute - Información de junio</h3><ul><li><p>17 de junio: fase 1/2</p><p>Rusia, 38 participantes.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/study/NCT04437875">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac6-junio">x</p></div><div class="vacunaBlock vacuna6Block-julio"></div><div class="vacunaBlock vacuna6Block-agosto"><div class="info infoVac6-agosto-close"><div class="infoVac6-agosto close"><h3>Gamaleya Research Institute - Información de agosto</h3><ul><li><p>11 de agosto: Rusia anuncia el registro de la Sputnik V como primera vacuna en el mundo contra la COVID-19.</p><a target="_black" href="https://larepublica.pe/mundo/2020/08/11/sputnik-v-vladimir-putin-afirma-que-rusia-registro-la-primera-vacuna-contra-el-coronavirus-en-el-mundo-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac6-agosto">x</p></div><div class="vacunaBlock vacuna6Block-septiembre"><div class="info infoVac6-septiembre-close"><div class="infoVac6-septiembre close"><h3>Gamaleya Research Institute - Información de septiembre</h3><ul><li><p>7 de setiembre: fase 3</p><p>Rusia, 40.000 participantes.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/NCT04530396">Link de referencia</a></li><li><p>28 de setiembre: fase 3</p><p>Bielorrusia, 100 participantes.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/NCT04564716">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac6-septiembre">x</p></div><div class="vacunaBlock vacuna6Block-octubre"><div class="info infoVac6-octubre-close"><div class="infoVac6-octubre close"><h3>Gamaleya Research Institute - Información de octubre</h3><ul><li><p>22 de octubre: fase 2</p><p>110 participantes, Rusia.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/NCT04587219">Link de referencia</a></li><li><p>27 de octubre: Rusia envía a la OMS la Sputnik V para que sea precalificada.</p><a target="_black" href="https://larepublica.pe/mundo/2020/10/27/rusia-envia-a-la-oms-su-vacuna-experimental-sputnik-v-para-registro-acelerado-y-precalificacion/">Link de referencia</a></li><li><p>31 de octubre: Rusia envía a Brasil una solicitud de registro para la Sputnik V.</p><a target="_black" href="https://larepublica.pe/mundo/2020/10/31/rusia-envia-a-brasil-una-solicitud-de-registro-de-su-vacuna-candidata-sputnik-v/">Link de referencia</a></li></ul></div> </div><p class="cerrar cerrar-Vac6-octubre">x</p></div><div class="vacunaBlock vacuna6Block-noviembre"><div class="info infoVac6-noviembre-close"><div class="infoVac6-noviembre close"><h3>Gamaleya Research Institute - Información de noviembre</h3><ul><li><p>Noviembre: fase 3</p><p>Venezuela, 2.000 participantes.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/NCT04642339">Link de referencia</a></li></ul></div> </div><p class="cerrar cerrar-Vac6-noviembre">x</p></div><div class="vacunaBlock vacuna6Block-diciembre fin-de-año"><div class="info infoVac6-diciembre-close"><div class="infoVac6-diciembre close"><h3>Gamaleya Research Institute - Información de diciembre</h3><ul><li><p>Diciembre: fase 2/3</p><p>India, 1.600 participantes.</p><a target="_black" href="https://clinicaltrials.gov/ct2/show/NCT04640233">Link de referencia</a></li><li><p>14 de diciembre: Rusia afirma que la vacuna tiene eficacia del 100% en casos graves de COVID-19</p><a target="_black" href="https://larepublica.pe/ciencia/2020/12/14/rusia-anuncia-que-sputnik-v-tiene-eficacia-de-100-en-casos-graves-de-covid-19/">Link de referencia</a></li><li><p>21 de diciembre: Rusia afirma que su vacuna tiene eficacia contra la nueva variante de Reino Unido.</p><a target="_black" href="https://larepublica.pe/mundo/2020/12/21/rusia-dice-que-la-sputnik-v-tiene-eficacia-contra-nueva-variante-del-coronavirus/">Link de referencia</a></li><li><p>21 de diciembre: Sputnik V y AstraZeneca inician ensayos de su vacuna combinada.</p><a target="_black" href="https://larepublica.pe/mundo/2020/12/21/astrazeneca-y-creadores-de-vacuna-sputnik-v-firman-acuerdo-de-colaboracion-mdga/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac6-diciembre">x</p></div><div class="vacunaBlock vacuna6Block-finJeringa"><div class="info infoVac6-finJeringa-close"><div class="infoVac6-finJeringa close"><p>Aprobación anticipada en Rusia</p></div></div><p class="cerrar cerrar-Vac6-finJeringa">x</p></div><div class="vacunaBlock vacuna6Block-ultimoTramo"><div class="info infoVac6-ultimoTramo-close"><div class="infoVac6-ultimoTramo close"><p>Aprobación de emergencia en Biolorrusia y Argentina</p></div></div><p class="cerrar cerrar-Vac6-ultimoTramo">x</p></div><div class="vacunaBlock vacuna6Block-Meta"></div></div>');
        $('.vacuna6').removeClass('blockOff');
        $('.vacuna6').addClass('blockOn');
    }else {
        $('.vacuna6Row').remove(); 
        $('.vacuna6').removeClass('blockOn');
        $('.vacuna6').addClass('blockOff');
    }
});

$(document).on('click','.vacuna6Block-logo',function() {
    if($('.infoVac6-logo').hasClass('close')) {
        $('.infoVac6-logo').addClass('open');
        $('.infoVac6-logo').removeClass('close');
    } else if($('.infoVac6-logo').hasClass('open')){
        $('.infoVac6-logo').addClass('close');
        $('.infoVac6-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna6Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna6Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-junio-close',function() {
    $('.infoVac6-junio').addClass('open');
    $('.infoVac6-junio').css('display','block');
    $('.cerrar-Vac6-junio').css('display','block');
});
$(document).on('click','.cerrar-Vac6-junio',function() {
    $('.infoVac6-junio').css('display','none');
    $('.cerrar-Vac6-junio').css('display','none');
});
$(document).on('click','.infoVac6-junio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-junio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-agosto-close',function() {
    $('.infoVac6-agosto').addClass('open');
    $('.infoVac6-agosto').css('display','block');
    $('.cerrar-Vac6-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac6-agosto',function() {
    $('.infoVac6-agosto').css('display','none');
    $('.cerrar-Vac6-agosto').css('display','none');
});
$(document).on('click','.infoVac6-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-septiembre-close',function() {
    $('.infoVac6-septiembre').addClass('open');
    $('.infoVac6-septiembre').css('display','block');
    $('.cerrar-Vac6-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac6-septiembre',function() {
    $('.infoVac6-septiembre').css('display','none');
    $('.cerrar-Vac6-septiembre').css('display','none');
});
$(document).on('click','.infoVac6-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-octubre-close',function() {
    $('.infoVac6-octubre').addClass('open');
    $('.infoVac6-octubre').css('display','block');
    $('.cerrar-Vac6-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac6-octubre',function() {
    $('.infoVac6-octubre').css('display','none');
    $('.cerrar-Vac6-octubre').css('display','none');
});
$(document).on('click','.infoVac6-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-noviembre-close',function() {
    $('.infoVac6-noviembre').addClass('open');
    $('.infoVac6-noviembre').css('display','block');
    $('.cerrar-Vac6-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac6-noviembre',function() {
    $('.infoVac6-noviembre').css('display','none');
    $('.cerrar-Vac6-noviembre').css('display','none');
});
$(document).on('click','.infoVac6-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-diciembre-close',function() {
    $('.infoVac6-diciembre').addClass('open');
    $('.infoVac6-diciembre').css('display','block');
    $('.cerrar-Vac6-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac6-diciembre',function() {
    $('.infoVac6-diciembre').css('display','none');
    $('.cerrar-Vac6-diciembre').css('display','none');
});
$(document).on('click','.infoVac6-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-finJeringa-close',function() {
    $('.infoVac6-finJeringa').addClass('open');
    $('.infoVac6-finJeringa').css('display','block');
    $('.cerrar-Vac6-finJeringa').css('display','block');
});
$(document).on('click','.cerrar-Vac6-finJeringa',function() {
    $('.infoVac6-finJeringa').css('display','none');
    $('.cerrar-Vac6-finJeringa').css('display','none');
});
$(document).on('click','.infoVac6-finJeringa-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-finJeringa-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac6-ultimoTramo-close',function() {
    $('.infoVac6-ultimoTramo').addClass('open');
    $('.infoVac6-ultimoTramo').css('display','block');
    $('.cerrar-Vac6-ultimoTramo').css('display','block');
});
$(document).on('click','.cerrar-Vac6-ultimoTramo',function() {
    $('.infoVac6-ultimoTramo').css('display','none');
    $('.cerrar-Vac6-ultimoTramo').css('display','none');
});
$(document).on('click','.infoVac6-ultimoTramo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac6-ultimoTramo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 7 (Janssen)

$('.vacuna7').click(function () {
    if($('.vacuna7').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna7Row"><div class="vacunaBlock vacuna7Block-logo"><p class="vacuna-info-tit">Janssen</p><div class="logo-de-vacuna infoVac7-logo close"><h2>Janssen</h2><h3>Fase 3</h3><p>En colaboración con la estadounidense Johnson y Johson, la farmacéutica Janssen ha diseñado una vacuna de una sola dosis que usa un adenovirus modificad. También prueban su vacuna en dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna7Block-marzo"></div><div class="vacunaBlock vacuna7Block-abril"></div><div class="vacunaBlock vacuna7Block-mayo"></div><div class="vacunaBlock vacuna7Block-junio"></div><div class="vacunaBlock vacuna7Block-julio"><div class="info infoVac7-julio-close"><div class="infoVac7-julio close"><h3>Janssen - Información de julio</h3><ul><li><p>15 de julio: fase 1/2</p><p>1.045 participantes, Bélgica, EE. UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04436276">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac7-julio">x</p></div><div class="vacunaBlock vacuna7Block-agosto"><div class="info infoVac7-agosto-close"><div class="infoVac7-agosto close"><h3>Janssen - Información de agosto</h3><ul><li><p>11 de agosto: Fase 1</p><p>250 participantes, Japón.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04509947">Link de referencia</a></li><li><p>28 de agosto: fase 2</p><p>1.210 participantes, Alemania, Países Bajos y España.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04535453">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac7-agosto">x</p></div><div class="vacunaBlock vacuna7Block-septiembre"><div class="info infoVac7-septiembre-close"><div class="infoVac7-septiembre close"><h3>Janssen - Información de septiembre</h3><ul><li><p>7 de setiembre: fase 3</p><p>60.000 participantes en Argentina, Brasil, Chile, Colombia, México, Perú, Filipinas, Sudáfrica, Ucrania, EE. UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04505722">Link de referencia</a></li><li><p>26 de setiembre: Los ensayos iniciales revelan que la vacuna candidata produce fuerte inmunidad.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/09/26/potencial-vacuna-de-johnson-johnson-genero-fuerte-inmunidad-en-pruebas-iniciales/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac7-septiembre">x</p></div><div class="vacunaBlock vacuna7Block-octubre"><div class="info infoVac7-octubre-close"><div class="infoVac7-octubre close"><h3>Janssen - Información de octubre</h3><ul><li><p>12 de octubre:Detienen ensayos luego de que uno de los voluntarios presentara una "enfermedad inexplicable"</p><a target="_blank" href="https://larepublica.pe/mundo/2020/10/12/johnson-johnson-detiene-ensayo-de-vacuna-contra-covid-19-por-una-enfermedad-inexplicable/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac7-octubre">x</p></div><div class="vacunaBlock vacuna7Block-noviembre"><div class="info infoVac7-noviembre-close"><div class="infoVac7-noviembre close"><h3>Janssen - Información de noviembre</h3><ul><li><p>3 de noviembre: Brasil autoriza reinicio de ensayos tras demostrar que la relación "beneficio-riesgo" sigue siendo favorable.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/03/brasil-autoriza-reinicio-de-ensayos-de-la-vacuna-contra-la-covid-19-de-johnson-johnson/">Link de referencia</a></li><li><p>12 de noviembre: inicia proceso de inscripción para la fase 3 de rpuebas en Perú.</p><a target="_blank" href="https://larepublica.pe/sociedad/2020/11/13/vacuna-johnson-johnson-inicia-inscripcion-de-3500-voluntarios/">Link de referencia</a></li><li><p>15 de noviembre: fase 3</p><p>30.000 participantes, en EE. UU. Belgica, Colombia, Alemania, Filipinas, Sudáfrica, España y Reino Unido, Francia.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04614948">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac7-noviembre">x</p></div><div class="vacunaBlock vacuna7Block-diciembre fin-de-año"></div><div class="vacunaBlock vacuna7Block-finJeringa"></div><div class="vacunaBlock vacuna7Block-ultimoTramo"></div><div class="vacunaBlock vacuna7Block-Meta"></div></div>');
        $('.vacuna7').removeClass('blockOff');
        $('.vacuna7').addClass('blockOn');
    }else {
        $('.vacuna7Row').remove(); 
        $('.vacuna7').removeClass('blockOn');
        $('.vacuna7').addClass('blockOff');
    }
});

$(document).on('click','.vacuna7Block-logo',function() {
    if($('.infoVac7-logo').hasClass('close')) {
        $('.infoVac7-logo').addClass('open');
        $('.infoVac7-logo').removeClass('close');
    } else if($('.infoVac7-logo').hasClass('open')){
        $('.infoVac7-logo').addClass('close');
        $('.infoVac7-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna7Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna7Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac7-julio-close',function() {
    $('.infoVac7-julio').addClass('open');
    $('.infoVac7-julio').css('display','block');
    $('.cerrar-Vac7-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac7-julio',function() {
    $('.infoVac7-julio').css('display','none');
    $('.cerrar-Vac7-julio').css('display','none');
});
$(document).on('click','.infoVac7-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac7-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac7-agosto-close',function() {
    $('.infoVac7-agosto').addClass('open');
    $('.infoVac7-agosto').css('display','block');
    $('.cerrar-Vac7-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac7-agosto',function() {
    $('.infoVac7-agosto').css('display','none');
    $('.cerrar-Vac7-agosto').css('display','none');
});
$(document).on('click','.infoVac7-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac7-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac7-septiembre-close',function() {
    $('.infoVac7-septiembre').addClass('open');
    $('.infoVac7-septiembre').css('display','block');
    $('.cerrar-Vac7-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac7-septiembre',function() {
    $('.infoVac7-septiembre').css('display','none');
    $('.cerrar-Vac7-septiembre').css('display','none');
});
$(document).on('click','.infoVac7-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac7-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac7-octubre-close',function() {
    $('.infoVac7-octubre').addClass('open');
    $('.infoVac7-octubre').css('display','block');
    $('.cerrar-Vac7-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac7-octubre',function() {
    $('.infoVac7-octubre').css('display','none');
    $('.cerrar-Vac7-octubre').css('display','none');
});
$(document).on('click','.infoVac7-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac7-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac7-noviembre-close',function() {
    $('.infoVac7-noviembre').addClass('open');
    $('.infoVac7-noviembre').css('display','block');
    $('.cerrar-Vac7-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac7-noviembre',function() {
    $('.infoVac7-noviembre').css('display','none');
    $('.cerrar-Vac7-noviembre').css('display','none');
});
$(document).on('click','.infoVac7-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac7-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 8 (Novavax)

$('.vacuna8').click(function () {
    if($('.vacuna8').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna8Row"><div class="vacunaBlock vacuna8Block-logo"><p class="vacuna-info-tit">Novavax</p><div class="logo-de-vacuna infoVac8-logo close"><h2>Novavax</h2><h3>Fase 3</h3><p>La vacuna desarrollada por la farmacéutica estadounidense se basa en proteínas del SARS-CoV-2. Específicamente, utiliza subunidades del virus (las espículas), las cuales son empleadas para generar defensas. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna8Block-marzo"></div><div class="vacunaBlock vacuna8Block-abril"></div><div class="vacunaBlock vacuna8Block-mayo"><div class="info infoVac8-mayo-close"><div class="infoVac8-mayo close"><h3>Novavax - Información de mayo</h3><ul><li><p>25 de mayo: fase 1/2</p><p>1.419 participantes, Australia</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04368988">Link de referencia</a><a target="_blank" href="https://larepublica.pe/ciencia/2020/05/26/vacuna-coronavirus-novavax-inicia-ensayo-clinico-australia-contra-pandemia-covid-19/">Nota relacionada</a></li></ul></div></div><p class="cerrar cerrar-Vac8-mayo">x</p></div><div class="vacunaBlock vacuna8Block-junio"></div><div class="vacunaBlock vacuna8Block-julio"></div><div class="vacunaBlock vacuna8Block-agosto"><div class="info infoVac8-agosto-close"><div class="infoVac8-agosto close"><h3>Novavax - Información de agosto</h3><ul><li><p>17 de agosto: fase 2</p><p>4.400 participantes, Sudáfrica.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04533399">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac8-agosto">x</p></div><div class="vacunaBlock vacuna8Block-septiembre"><div class="info infoVac8-septiembre-close"><div class="infoVac8-septiembre close"><h3>Novavax - Información de septiembre</h3><ul><li><p>28 de setiembre: fase 3</p><p>15.000 participantes, en Reino Unido.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04583995">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac8-septiembre">x</p></div><div class="vacunaBlock vacuna8Block-octubre"></div><div class="vacunaBlock vacuna8Block-noviembre"></div><div class="vacunaBlock vacuna8Block-diciembre fin-de-año"><div class="info infoVac8-diciembre-close"><div class="infoVac8-diciembre close"><h3>Novavax - Información de diciembre</h3><ul><li><p>Diciembre: fase 3</p><p>30.000 participantes en México, Puerto Rico, Estados Unidos de América.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04611802">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac8-diciembre">x</p></div><div class="vacunaBlock vacuna8Block-finJeringa"></div><div class="vacunaBlock vacuna8Block-ultimoTramo"></div><div class="vacunaBlock vacuna8Block-Meta"></div></div>');
        $('.vacuna8').removeClass('blockOff');
        $('.vacuna8').addClass('blockOn');
    }else {
        $('.vacuna8Row').remove(); 
        $('.vacuna8').removeClass('blockOn');
        $('.vacuna8').addClass('blockOff');
    }
});

$(document).on('click','.vacuna8Block-logo',function() {
    if($('.infoVac8-logo').hasClass('close')) {
        $('.infoVac8-logo').addClass('open');
        $('.infoVac8-logo').removeClass('close');
    } else if($('.infoVac8-logo').hasClass('open')){
        $('.infoVac8-logo').addClass('close');
        $('.infoVac8-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna8Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna8Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac8-mayo-close',function() {
    $('.infoVac8-mayo').addClass('open');
    $('.infoVac8-mayo').css('display','block');
    $('.cerrar-Vac8-mayo').css('display','block');
});
$(document).on('click','.cerrar-Vac8-mayo',function() {
    $('.infoVac8-mayo').css('display','none');
    $('.cerrar-Vac8-mayo').css('display','none');
});
$(document).on('click','.infoVac8-mayo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac8-mayo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac8-agosto-close',function() {
    $('.infoVac8-agosto').addClass('open');
    $('.infoVac8-agosto').css('display','block');
    $('.cerrar-Vac8-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac8-agosto',function() {
    $('.infoVac8-agosto').css('display','none');
    $('.cerrar-Vac8-agosto').css('display','none');
});
$(document).on('click','.infoVac8-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac8-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac8-septiembre-close',function() {
    $('.infoVac8-septiembre').addClass('open');
    $('.infoVac8-septiembre').css('display','block');
    $('.cerrar-Vac8-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac8-septiembre',function() {
    $('.infoVac8-septiembre').css('display','none');
    $('.cerrar-Vac8-septiembre').css('display','none');
});
$(document).on('click','.infoVac8-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac8-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac8-diciembre-close',function() {
    $('.infoVac8-diciembre').addClass('open');
    $('.infoVac8-diciembre').css('display','block');
    $('.cerrar-Vac8-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac8-diciembre',function() {
    $('.infoVac8-diciembre').css('display','none');
    $('.cerrar-Vac8-diciembre').css('display','none');
});
$(document).on('click','.infoVac8-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac8-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 9 (Moderna + NIAID)

$('.vacuna9').click(function () {
    if($('.vacuna9').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna9Row"><div class="vacunaBlock vacuna9Block-logo"><p class="vacuna-info-tit">Moderna + NIAID</p><div class="logo-de-vacuna infoVac9-logo close"><h2>Moderna + NIAID</h2><h3>Fase 3</h3><p>Moderna desarrolló una vacuna basada en una molécula de ARNm, la cual contiene información genética del coronavirus para generar inmunidad en la persona.  Los Institutos Nacionales de Salud de EE. UU. se unieron para realizar los ensayos clínicos.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna9Block-marzo"><div class="info infoVac9-marzo-close"><div class="infoVac9-marzo close"><h3>Moderna + NIAID - Información de marzo</h3><ul><li><p>16 de marzo: fase 1</p><p>120 participantes, EE.UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04283461">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-marzo">x</p></div><div class="vacunaBlock vacuna9Block-abril"></div><div class="vacunaBlock vacuna9Block-mayo"><div class="info infoVac9-mayo-close"><div class="infoVac9-mayo close"><h3>Moderna + NIAID - Información de mayo</h3><ul><li><p>29 de mayo: fase 2</p><p>600 participantes, EE.UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04405076">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-mayo">x</p></div><div class="vacunaBlock vacuna9Block-junio"></div><div class="vacunaBlock vacuna9Block-julio"><div class="info infoVac9-julio-close"><div class="infoVac9-julio close"><h3>Moderna + NIAID - Información de julio</h3><ul><li><p>14 de julio: los resultados de la primera fase demuestran que la vacuna candidata produce inmunidad en los inoculados.</p><a target="_blank" href="https://larepublica.pe/ciencia/2020/07/14/coronaviru-vacuna-de-moderna-produjo-inmunidad-en-todos-los-voluntarios-de-la-primera-fase/">Link de referencia</a></li><li><p>27 de julio: fase 3</p><p>30.000 participantes, EE.UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04470427">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-julio">x</p></div><div class="vacunaBlock vacuna9Block-agosto"></div><div class="vacunaBlock vacuna9Block-septiembre"><div class="info infoVac9-septiembre-close"><div class="infoVac9-septiembre close"><h3>Moderna + NIAID - Información de septiembre</h3><ul><li><p>30 de setiembre: datos preliminares muestran que la vacuna desarrolla anticuerpos en adultos mayores.</p><a target="_blank" href="https://larepublica.pe/ciencia/2020/09/30/candidata-a-vacuna-de-moderna-contra-el-coronavirus-genera-anticuerpos-en-mayores/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-septiembre">x</p></div><div class="vacunaBlock vacuna9Block-octubre"></div><div class="vacunaBlock vacuna9Block-noviembre"><div class="info infoVac9-noviembre-close"><div class="infoVac9-noviembre close"><h3>Moderna + NIAID - Información de noviembre</h3><ul><li><p>16 de noviembre: Moderna anuncia que su candidata a vacuna tiene una efectividad del 94,5%</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/16/moderna-informo-que-su-vacuna-contra-la-covid-19-tiene-un-945-de-efectividad/">Link de referencia</a></li><li><p>30 de noviembre: fase 2/3</p><p>3.000 participantes, EE. UU</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04649151#wrapper">Link de referencia</a></li><li><p>30 de noviembre: Moderna confirma la eficacia del 94% de su vacuna en fase 3 y anuncia que solicitará la autorización para comercializarla.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/30/candidata-a-vacuna-moderna-confirma-un-94-de-eficacia-en-fase-3/">Link de referencia</a><a target="_blank" href="https://larepublica.pe/mundo/2020/11/30/moderna-solicitara-autorizacion-para-comercializar-su-vacuna/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-noviembre">x</p></div><div class="vacunaBlock vacuna9Block-diciembre fin-de-año"><div class="info infoVac9-diciembre-close"><div class="infoVac9-diciembre close"><h3>Moderna + NIAID - Información de diciembre</h3><ul><li><p>10 de diciembre: inician pruebas en adolescentes.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/10/covid-19-moderna-inicia-pruebas-en-adolescentes-de-su-candidata-a-vacuna/">Link de referencia</a></li><li><p>15 de diciembre: FDA confirma la seguridad y efectividad de la vacuna de Moderna</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/15/ee-uu-fda-confirma-seguridad-y-efectividad-de-la-vacuna-de-moderna-atmp/">Link de referencia</a></li><li><p>18 de diciembre: EE.UU autoriza la vacuna de Moderna, la segunda en el territorio después de Pfizer.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/18/ee-uu-autoriza-la-vacuna-de-moderna-la-segunda-a-la-que-da-luz-verde/">Link de referencia</a></li><li><p>20 de diciembre: EE.UU. inicia la distribución de la vacuna en su territorio.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/20/moderna-inicia-distribucion-masiva-de-su-vacuna-contra-la-covid-19/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac9-diciembre">x</p></div><div class="vacunaBlock vacuna9Block-finJeringa"></div><div class="vacunaBlock vacuna9Block-ultimoTramo"><div class="info infoVac9-ultimoTramo-close"><div class="infoVac9-ultimoTramo close"><p>Aprobación de emergencia en EE. UU.</p></div></div><p class="cerrar cerrar-Vac9-ultimoTramo">x</p></div><div class="vacunaBlock vacuna9Block-Meta"><div class="info infoVac9-meta-close"><div class="infoVac9-meta close"><p>Aprobación total en Canadá.</p></div></div><p class="cerrar cerrar-Vac9-meta">x</p></div></div>');
        $('.vacuna9').removeClass('blockOff');
        $('.vacuna9').addClass('blockOn');
    }else {
        $('.vacuna9Row').remove(); 
        $('.vacuna9').removeClass('blockOn');
        $('.vacuna9').addClass('blockOff');
    }
});

$(document).on('click','.vacuna9Block-logo',function() {
    if($('.infoVac9-logo').hasClass('close')) {
        $('.infoVac9-logo').addClass('open');
        $('.infoVac9-logo').removeClass('close');
    } else if($('.infoVac9-logo').hasClass('open')){
        $('.infoVac9-logo').addClass('close');
        $('.infoVac9-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna9Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna9Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-marzo-close',function() {
    $('.infoVac9-marzo').addClass('open');
    $('.infoVac9-marzo').css('display','block');
    $('.cerrar-Vac9-marzo').css('display','block');
});
$(document).on('click','.cerrar-Vac9-marzo',function() {
    $('.infoVac9-marzo').css('display','none');
    $('.cerrar-Vac9-marzo').css('display','none');
});
$(document).on('click','.infoVac9-marzo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-marzo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-mayo-close',function() {
    $('.infoVac9-mayo').addClass('open');
    $('.infoVac9-mayo').css('display','block');
    $('.cerrar-Vac9-mayo').css('display','block');
});
$(document).on('click','.cerrar-Vac9-mayo',function() {
    $('.infoVac9-mayo').css('display','none');
    $('.cerrar-Vac9-mayo').css('display','none');
});
$(document).on('click','.infoVac9-mayo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-mayo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-julio-close',function() {
    $('.infoVac9-julio').addClass('open');
    $('.infoVac9-julio').css('display','block');
    $('.cerrar-Vac9-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac9-julio',function() {
    $('.infoVac9-julio').css('display','none');
    $('.cerrar-Vac9-julio').css('display','none');
});
$(document).on('click','.infoVac9-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-septiembre-close',function() {
    $('.infoVac9-septiembre').addClass('open');
    $('.infoVac9-septiembre').css('display','block');
    $('.cerrar-Vac9-septiembre').css('display','block');
});
$(document).on('click','.cerrar-Vac9-septiembre',function() {
    $('.infoVac9-septiembre').css('display','none');
    $('.cerrar-Vac9-septiembre').css('display','none');
});
$(document).on('click','.infoVac9-septiembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-septiembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-noviembre-close',function() {
    $('.infoVac9-noviembre').addClass('open');
    $('.infoVac9-noviembre').css('display','block');
    $('.cerrar-Vac9-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac9-noviembre',function() {
    $('.infoVac9-noviembre').css('display','none');
    $('.cerrar-Vac9-noviembre').css('display','none');
});
$(document).on('click','.infoVac9-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-diciembre-close',function() {
    $('.infoVac9-diciembre').addClass('open');
    $('.infoVac9-diciembre').css('display','block');
    $('.cerrar-Vac9-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac9-diciembre',function() {
    $('.infoVac9-diciembre').css('display','none');
    $('.cerrar-Vac9-diciembre').css('display','none');
});
$(document).on('click','.infoVac9-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-ultimoTramo-close',function() {
    $('.infoVac9-ultimoTramo').addClass('open');
    $('.infoVac9-ultimoTramo').css('display','block');
    $('.cerrar-Vac9-ultimoTramo').css('display','block');
});
$(document).on('click','.cerrar-Vac9-ultimoTramo',function() {
    $('.infoVac9-ultimoTramo').css('display','none');
    $('.cerrar-Vac9-ultimoTramo').css('display','none');
});
$(document).on('click','.infoVac9-ultimoTramo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-ultimoTramo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac9-meta-close',function() {
    $('.infoVac9-meta').addClass('open');
    $('.infoVac9-meta').css('display','block');
    $('.cerrar-Vac9-meta').css('display','block');
});
$(document).on('click','.cerrar-Vac9-meta',function() {
    $('.infoVac9-meta').css('display','none');
    $('.cerrar-Vac9-meta').css('display','none');
});
$(document).on('click','.infoVac9-meta-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac9-meta-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 10 (BioNTech+ Pfizer)

$('.vacuna10').click(function () {
    if($('.vacuna10').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna10Row"><div class="vacunaBlock vacuna10Block-logo"><p class="vacuna-info-tit">BioNTech+ Pfizer</p><div class="logo-de-vacuna infoVac10-logo close"><h2>BioNTech+ Pfizer</h2><h3>Fase 2/3</h3><p>Al igual que Moderna, BioNTech se basó en una molécula de ARNm para desarrollar su vacuna contra el SARS-CoV-2. Se asociaron con la farmacéutica Pfizer para los ensayos clínicos. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna10Block-marzo"></div><div class="vacunaBlock vacuna10Block-abril"><div class="info infoVac10-abril-close"><div class="infoVac10-abril close"><h3>BioNTech+ Pfizer - Información de abril</h3><ul><li><p>23 de abril: fase 1/2</p><p>Alemania, 456 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04380701">Link de referencia</a></li><li><p>29 de abril: fase 1,2,3</p><p>Argentina, Brasil, Alemania,Sudáfrica, Turquía, EE. UU. 43.998 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04368728">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac10-abril">x</p></div><div class="vacunaBlock vacuna10Block-mayo"></div><div class="vacunaBlock vacuna10Block-junio"></div><div class="vacunaBlock vacuna10Block-julio"></div><div class="vacunaBlock vacuna10Block-agosto"></div><div class="vacunaBlock vacuna10Block-septiembre"></div><div class="vacunaBlock vacuna10Block-octubre"><div class="info infoVac10-octubre-close"><div class="infoVac10-octubre close"><h3>BioNTech+ Pfizer - Información de octubre</h3><ul><li><p>21 de octubre: fase 1/2</p><p>Japón, 160 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04588480?cond=NCT04588480&draw=2&rank=1">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac10-octubre">x</p></div><div class="vacunaBlock vacuna10Block-noviembre"><div class="info infoVac10-noviembre-close"><div class="infoVac10-noviembre close"><h3>BioNTech+ Pfizer - Información de noviembre</h3><ul><li><p>9 de noviembre: datos preliminares demuestran efectividad superior al 90% de la vacuna.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/11/09/pfizer-y-biontech-confirman-que-su-candidata-a-vacuna-tiene-un-90-de-efectividad-mdga/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac10-noviembre">x</p></div><div class="vacunaBlock vacuna10Block-diciembre fin-de-año"><div class="info infoVac10-diciembre-close"><div class="infoVac10-diciembre close"><h3>BioNTech+ Pfizer - Información de diciembre</h3><ul><li><p>Diciembre: fase 2</p><p>China, 960 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04649021#contacts">Link de referencia</a></li><li><p>2 de diciembre: Reino Unido aprueba el uso de emergencia de la vacuna de Pfizer.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/02/reino-unido-se-convierte-en-el-primer-pais-en-aprobar-la-vacuna-de-pfizer-mdga/">Link de referencia</a></li><li><p>8 de diciembre: inicia las primeras inoculaciones en el Reino Unido.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/08/william-shakespeare-es-la-segunda-persona-en-recibir-la-vacuna-de-pfizer/">Link de referencia</a></li><li><p>9 de diciembre: Canadá aprueba totalmente la vacuna de Pfizer.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/09/canada-tambien-aprueba-uso-de-la-vacuna-pfizer-biontech-contra-la-covid-19/">Link de referencia</a></li><li><p>11 de diciembre: México y EE. UU. dan luz verde al uso de emergencia de la vacuna.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/11/mexico-emite-aprobacion-de-emergencia-para-el-uso-de-la-vacuna-de-pfizer/">Link de referencia</a></li><li><p>12 de diciembre: Arabia Saudita autoriza el uso total de la vacuna.</p></li><li><p>13 de diciembre: Bahrein aprueba totalmente la vacuna</p></li><li><p>14 de diciembre: EE.UU inicia la inmunización con Pfizer.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/14/estados-unidos-inicio-la-vacunacion-contra-la-covid-19/">Link de referencia</a></li><li><p>16 de diciembre: Ecuador, Costa Rica, Chile y Panamá aceptan el uso de emergencia de la vacuna de Pfizer</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/16/ecuador-se-suma-a-la-lista-de-paises-que-aprueba-la-vacuna-pfizer/">Link de referencia</a><a target="_blank" href="https://larepublica.pe/mundo/2020/12/16/costa-rica-y-panama-aprueban-uso-de-vacuna-pfizer-contra-coronavirus-atmp/">Link de referencia</a><a target="_blank" href="https://larepublica.pe/mundo/2020/12/16/chile-miembros-del-isp-aprueban-uso-de-vacuna-pfizer-contra-coronavirus-atmp/">Link de referencia</a></li><li><p>17 de diciembre: un paciente que se inoculó la vacuna en EEUU presentó reacción alérgica.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/17/ee-uu-registra-la-primera-reaccion-alergica-grave-a-la-vacuna-de-pfizer-mdga/">Link de referencia</a></li><li><p>19 de diciembre: Un tercer inoculado presenta reacción alérgica por la vacuna de Pfizer en EE. UU.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/19/un-tercer-sanitario-en-ee-uu-sufrio-reaccion-alergica-a-la-vacuna-pfizer/">Link de referencia</a></li><li><p>21 diciembre: Agencia Europea autoriza el uso de emergencia de la vacuna de Pfizer:</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/21/agencia-europea-del-medicamento-autoriza-la-vacuna-de-pfizer/">Link de referencia</a></li><li><p>22 de diciembre: Pfizer y Moderna probarán sus vacunas contra la nueva variante del SARS-CoV-2</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/22/pfizer-y-moderna-probaran-sus-vacunas-contra-nueva-variante-del-coronavirus/">Link de referencia</a></li><li><p>31 de diciembre: La OMS aprueba el uso de emergencia de la vacuna de Pfizer-BioNtech, que se convierte en la primera en tener esta autorización.</p><a target="_blank" href="https://larepublica.pe/mundo/2020/12/31/oms-aprueba-el-uso-de-emergencia-de-la-vacuna-de-pfizer/">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac10-diciembre">x</p></div><div class="vacunaBlock vacuna10Block-finJeringa"></div><div class="vacunaBlock vacuna10Block-ultimoTramo"><div class="info infoVac10-ultimoTramo-close"><div class="infoVac10-ultimoTramo close"><p>Aprobación de emergencia en Reino Unido, EE. UU., España, Francia, Italia, México, Chile, Ecuador y muchos otros países.</p></div></div><p class="cerrar cerrar-Vac10-ultimoTramo">x</p></div><div class="vacunaBlock vacuna10Block-Meta"><div class="info infoVac10-meta-close"><div class="infoVac10-meta close"><p>Aprobación total en Bahrein, Canadá y Arabia Saudita</p></div></div><p class="cerrar cerrar-Vac10-meta">x</p></div></div>');
        $('.vacuna10').removeClass('blockOff');
        $('.vacuna10').addClass('blockOn');
    }else {
        $('.vacuna10Row').remove(); 
        $('.vacuna10').removeClass('blockOn');
        $('.vacuna10').addClass('blockOff');
    }
});

$(document).on('click','.vacuna10Block-logo',function() {
    if($('.infoVac10-logo').hasClass('close')) {
        $('.infoVac10-logo').addClass('open');
        $('.infoVac10-logo').removeClass('close');
    } else if($('.infoVac10-logo').hasClass('open')){
        $('.infoVac10-logo').addClass('close');
        $('.infoVac10-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna10Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna10Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-abril-close',function() {
    $('.infoVac10-abril').addClass('open');
    $('.infoVac10-abril').css('display','block');
    $('.cerrar-Vac10-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac10-abril',function() {
    $('.infoVac10-abril').css('display','none');
    $('.cerrar-Vac10-abril').css('display','none');
});
$(document).on('click','.infoVac10-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-octubre-close',function() {
    $('.infoVac10-octubre').addClass('open');
    $('.infoVac10-octubre').css('display','block');
    $('.cerrar-Vac10-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac10-octubre',function() {
    $('.infoVac10-octubre').css('display','none');
    $('.cerrar-Vac10-octubre').css('display','none');
});
$(document).on('click','.infoVac10-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-noviembre-close',function() {
    $('.infoVac10-noviembre').addClass('open');
    $('.infoVac10-noviembre').css('display','block');
    $('.cerrar-Vac10-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac10-noviembre',function() {
    $('.infoVac10-noviembre').css('display','none');
    $('.cerrar-Vac10-noviembre').css('display','none');
});
$(document).on('click','.infoVac10-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-diciembre-close',function() {
    $('.infoVac10-diciembre').addClass('open');
    $('.infoVac10-diciembre').css('display','block');
    $('.cerrar-Vac10-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac10-diciembre',function() {
    $('.infoVac10-diciembre').css('display','none');
    $('.cerrar-Vac10-diciembre').css('display','none');
});
$(document).on('click','.infoVac10-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-ultimoTramo-close',function() {
    $('.infoVac10-ultimoTramo').addClass('open');
    $('.infoVac10-ultimoTramo').css('display','block');
    $('.cerrar-Vac10-ultimoTramo').css('display','block');
});
$(document).on('click','.cerrar-Vac10-ultimoTramo',function() {
    $('.infoVac10-ultimoTramo').css('display','none');
    $('.cerrar-Vac10-ultimoTramo').css('display','none');
});
$(document).on('click','.infoVac10-ultimoTramo-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-ultimoTramo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac10-meta-close',function() {
    $('.infoVac10-meta').addClass('open');
    $('.infoVac10-meta').css('display','block');
    $('.cerrar-Vac10-meta').css('display','block');
});
$(document).on('click','.cerrar-Vac10-meta',function() {
    $('.infoVac10-meta').css('display','none');
    $('.cerrar-Vac10-meta').css('display','none');
});
$(document).on('click','.infoVac10-meta-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac10-meta-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 11 (Anhui Zhifei Longcom)

$('.vacuna11').click(function () {
    if($('.vacuna11').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna11Row"><div class="vacunaBlock vacuna11Block-logo"><p class="vacuna-info-tit">Anhui Zhifei Longcom</p><div class="logo-de-vacuna infoVac11-logo close"><h2>Anhui Zhifei Longcom</h2><h3>Fase 3</h3><p>La compañía china Anhui Zhifei Longcom, en asociación con la Academia China de Ciencias Médicas, fabricaron una vacuna que contiene una parte de la proteína de espícula del coronavirus. Prueban su vacuna en 2 y 3 dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna11Block-marzo"></div><div class="vacunaBlock vacuna11Block-abril"></div><div class="vacunaBlock vacuna11Block-mayo"></div><div class="vacunaBlock vacuna11Block-junio"><div class="info infoVac11-junio-close"><div class="infoVac11-junio close"><h3>Anhui Zhifei Longcom - Información de junio</h3><ul><li><p>22 de junio: fase 1 en China, 50 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04445194">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac11-junio">x</p></div><div class="vacunaBlock vacuna11Block-julio"><div class="info infoVac11-julio-close"><div class="infoVac11-julio close"><h3>Anhui Zhifei Longcom - Información de julio</h3><ul><li><p>12 de julio: fase 2 en China, 900 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04466085">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac11-julio">x</p></div><div class="vacunaBlock vacuna11Block-agosto"><div class="info infoVac11-agosto-close"><div class="infoVac11-agosto close"><h3>Anhui Zhifei Longcom - Información de agosto</h3><ul><li><p>19 de agosto: fase 1/2 en China, 50 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04550351">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac11-agosto">x</p></div><div class="vacunaBlock vacuna11Block-septiembre"></div><div class="vacunaBlock vacuna11Block-octubre"><div class="info infoVac11-octubre-close"><div class="infoVac11-octubre close"><h3>Anhui Zhifei Longcom - Información de octubre</h3><ul><li><p>30 de octubre: fase 1 en China, 216 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04636333">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac11-octubre">x</p></div><div class="vacunaBlock vacuna11Block-noviembre"></div><div class="vacunaBlock vacuna11Block-diciembre fin-de-año"><div class="info infoVac11-diciembre-close"><div class="infoVac11-diciembre close"><h3>Anhui Zhifei Longcom - Información de diciembre</h3><ul><li><p>16 de diciembre: fase 3 en China, 29.000 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04646590#wrapper">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac11-diciembre">x</p></div><div class="vacunaBlock vacuna11Block-finJeringa"></div><div class="vacunaBlock vacuna11Block-ultimoTramo"></div><div class="vacunaBlock vacuna11Block-Meta"></div></div>');
        $('.vacuna11').removeClass('blockOff');
        $('.vacuna11').addClass('blockOn');
    }else {
        $('.vacuna11Row').remove(); 
        $('.vacuna11').removeClass('blockOn');
        $('.vacuna11').addClass('blockOff');
    }
});

$(document).on('click','.vacuna11Block-logo',function() {
    if($('.infoVac11-logo').hasClass('close')) {
        $('.infoVac11-logo').addClass('open');
        $('.infoVac11-logo').removeClass('close');
    } else if($('.infoVac11-logo').hasClass('open')){
        $('.infoVac11-logo').addClass('close');
        $('.infoVac11-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna11Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna11Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac11-junio-close',function() {
    $('.infoVac11-junio').addClass('open');
    $('.infoVac11-junio').css('display','block');
    $('.cerrar-Vac11-junio').css('display','block');
});
$(document).on('click','.cerrar-Vac11-junio',function() {
    $('.infoVac11-junio').css('display','none');
    $('.cerrar-Vac11-junio').css('display','none');
});
$(document).on('click','.infoVac11-junio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac11-junio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac11-julio-close',function() {
    $('.infoVac11-julio').addClass('open');
    $('.infoVac11-julio').css('display','block');
    $('.cerrar-Vac11-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac11-julio',function() {
    $('.infoVac11-julio').css('display','none');
    $('.cerrar-Vac11-julio').css('display','none');
});
$(document).on('click','.infoVac11-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac11-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac11-agosto-close',function() {
    $('.infoVac11-agosto').addClass('open');
    $('.infoVac11-agosto').css('display','block');
    $('.cerrar-Vac11-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac11-agosto',function() {
    $('.infoVac11-agosto').css('display','none');
    $('.cerrar-Vac11-agosto').css('display','none');
});
$(document).on('click','.infoVac11-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac11-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac11-octubre-close',function() {
    $('.infoVac11-octubre').addClass('open');
    $('.infoVac11-octubre').css('display','block');
    $('.cerrar-Vac11-octubre').css('display','block');
});
$(document).on('click','.cerrar-Vac11-octubre',function() {
    $('.infoVac11-octubre').css('display','none');
    $('.cerrar-Vac11-octubre').css('display','none');
});
$(document).on('click','.infoVac11-octubre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac11-octubre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac11-diciembre-close',function() {
    $('.infoVac11-diciembre').addClass('open');
    $('.infoVac11-diciembre').css('display','block');
    $('.cerrar-Vac11-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac11-diciembre',function() {
    $('.infoVac11-diciembre').css('display','none');
    $('.cerrar-Vac11-diciembre').css('display','none');
});
$(document).on('click','.infoVac11-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac11-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 12 (Inovio)

$('.vacuna12').click(function () {
    if($('.vacuna12').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna12Row"><div class="vacunaBlock vacuna12Block-logo"><p class="vacuna-info-tit">Inovio</p><div class="logo-de-vacuna infoVac12-logo close"><h2>Inovio</h2><h3>Fase 2/3</h3><p>La empresa estadounidense Inovio desarrolló una vacuna basada en ADN que se aplica con pulsos eléctricos en dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna12Block-marzo"></div><div class="vacunaBlock vacuna12Block-abril"><div class="info infoVac12-abril-close"><div class="infoVac12-abril close"><h3>Inovio - Información de abril</h3><ul><li><p>3 de abril: fase 1/2 en EE. UU., 120 participantes</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04336410">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac12-abril">x</p></div><div class="vacunaBlock vacuna12Block-mayo"></div><div class="vacunaBlock vacuna12Block-junio"></div><div class="vacunaBlock vacuna12Block-julio"><div class="info infoVac12-julio-close"><div class="infoVac12-julio close"><h3>Inovio - Información de julio</h3><ul><li><p>15 de julio: fase 1/2 en Corea del Sur, 160 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04447781">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac12-julio">x</p></div><div class="vacunaBlock vacuna12Block-agosto"></div><div class="vacunaBlock vacuna12Block-septiembre"></div><div class="vacunaBlock vacuna12Block-octubre"></div><div class="vacunaBlock vacuna12Block-noviembre"><div class="info infoVac12-noviembre-close"><div class="infoVac12-noviembre close"><h3>Inovio - Información de noviembre</h3><ul><li><p>22 de noviembre: fase 2 en China, 640 participantes.</p><a target="_blank" href="http://www.chictr.org.cn/showprojen.aspx?proj=64452">Link de referencia</a></li><li><p>30 de noviembre: fase 2/3 en EE. UU., 6578 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04642638">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac12-noviembre">x</p></div><div class="vacunaBlock vacuna12Block-diciembre fin-de-año"></div><div class="vacunaBlock vacuna12Block-finJeringa"></div><div class="vacunaBlock vacuna12Block-ultimoTramo"></div><div class="vacunaBlock vacuna12Block-Meta"></div></div>');
        $('.vacuna12').removeClass('blockOff');
        $('.vacuna12').addClass('blockOn');
    }else {
        $('.vacuna12Row').remove(); 
        $('.vacuna12').removeClass('blockOn');
        $('.vacuna12').addClass('blockOff');
    }
});

$(document).on('click','.vacuna12Block-logo',function() {
    if($('.infoVac12-logo').hasClass('close')) {
        $('.infoVac12-logo').addClass('open');
        $('.infoVac12-logo').removeClass('close');
    } else if($('.infoVac12-logo').hasClass('open')){
        $('.infoVac12-logo').addClass('close');
        $('.infoVac12-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna12Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna12Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac12-abril-close',function() {
    $('.infoVac12-abril').addClass('open');
    $('.infoVac12-abril').css('display','block');
    $('.cerrar-Vac12-abril').css('display','block');
});
$(document).on('click','.cerrar-Vac12-abril',function() {
    $('.infoVac12-abril').css('display','none');
    $('.cerrar-Vac12-abril').css('display','none');
});
$(document).on('click','.infoVac12-abril-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac12-abril-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac12-julio-close',function() {
    $('.infoVac12-julio').addClass('open');
    $('.infoVac12-julio').css('display','block');
    $('.cerrar-Vac12-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac12-julio',function() {
    $('.infoVac12-julio').css('display','none');
    $('.cerrar-Vac12-julio').css('display','none');
});
$(document).on('click','.infoVac12-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac12-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac12-noviembre-close',function() {
    $('.infoVac12-noviembre').addClass('open');
    $('.infoVac12-noviembre').css('display','block');
    $('.cerrar-Vac12-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac12-noviembre',function() {
    $('.infoVac12-noviembre').css('display','none');
    $('.cerrar-Vac12-noviembre').css('display','none');
});
$(document).on('click','.infoVac12-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac12-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 13 (Bharat Biotech)

$('.vacuna13').click(function () {
    if($('.vacuna13').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna13Row"><div class="vacunaBlock vacuna13Block-logo"><p class="vacuna-info-tit">Bharat Biotech</p><div class="logo-de-vacuna infoVac13-logo close"><h2>Bharat Biotech</h2><h3>Fase 3</h3><p>La compañía india Bharat Biotech, en asociación con el Consejo Indio de Investigación Médica y el Instituto Nacional de Virología, desarrolló una vacuna basada en el coronavirus inactivado.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna13Block-marzo"></div><div class="vacunaBlock vacuna13Block-abril"></div><div class="vacunaBlock vacuna13Block-mayo"></div><div class="vacunaBlock vacuna13Block-junio"></div><div class="vacunaBlock vacuna13Block-julio"><div class="info infoVac13-julio-close"><div class="infoVac13-julio close"><h3>Bharat Biotech - Información de julio</h3><ul><li><p>13 de julio: fase 1/2 en India, 755 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04471519">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac13-julio">x</p></div><div class="vacunaBlock vacuna13Block-agosto"></div><div class="vacunaBlock vacuna13Block-septiembre"></div><div class="vacunaBlock vacuna13Block-octubre"></div><div class="vacunaBlock vacuna13Block-noviembre"><div class="info infoVac13-noviembre-close"><div class="infoVac13-noviembre close"><h3>Bharat Biotech - Información de noviembre</h3><ul><li><p>25 de noviembre: fase 3 en India, 25.800 participantes</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04641481">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac13-noviembre">x</p></div><div class="vacunaBlock vacuna13Block-diciembre fin-de-año"></div><div class="vacunaBlock vacuna13Block-finJeringa"></div><div class="vacunaBlock vacuna13Block-ultimoTramo"></div><div class="vacunaBlock vacuna13Block-Meta"></div></div>');
        $('.vacuna13').removeClass('blockOff');
        $('.vacuna13').addClass('blockOn');
    }else {
        $('.vacuna13Row').remove(); 
        $('.vacuna13').removeClass('blockOn');
        $('.vacuna13').addClass('blockOff');
    }
});

$(document).on('click','.vacuna13Block-logo',function() {
    if($('.infoVac13-logo').hasClass('close')) {
        $('.infoVac13-logo').addClass('open');
        $('.infoVac13-logo').removeClass('close');
    } else if($('.infoVac13-logo').hasClass('open')){
        $('.infoVac13-logo').addClass('close');
        $('.infoVac13-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna13Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna13Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac13-julio-close',function() {
    $('.infoVac13-julio').addClass('open');
    $('.infoVac13-julio').css('display','block');
    $('.cerrar-Vac13-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac13-julio',function() {
    $('.infoVac13-julio').css('display','none');
    $('.cerrar-Vac13-julio').css('display','none');
});
$(document).on('click','.infoVac13-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac13-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac13-noviembre-close',function() {
    $('.infoVac13-noviembre').addClass('open');
    $('.infoVac13-noviembre').css('display','block');
    $('.cerrar-Vac13-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac13-noviembre',function() {
    $('.infoVac13-noviembre').css('display','none');
    $('.cerrar-Vac13-noviembre').css('display','none');
});
$(document).on('click','.infoVac13-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac13-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 14 (Medicago Inc.)

$('.vacuna14').click(function () {
    if($('.vacuna14').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna14Row"><div class="vacunaBlock vacuna14Block-logo"><p class="vacuna-info-tit">Medicago Inc.</p><div class="logo-de-vacuna infoVac14-logo close"><h2>Medicago Inc.</h2><h3>Fase 2/3</h3><p>La empresa canadiense Medicago Inc. desarrolló una vacuna que usa partículas basadas en plantas que imitan al coronavirus. Se asoción con la farmacéutica GSK, que elaboró un potente adyuvante.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna14Block-marzo"></div><div class="vacunaBlock vacuna14Block-abril"></div><div class="vacunaBlock vacuna14Block-mayo"></div><div class="vacunaBlock vacuna14Block-junio"></div><div class="vacunaBlock vacuna14Block-julio"><div class="info infoVac14-julio-close"><div class="infoVac14-julio close"><h3>Medicago Inc. - Información de julio</h3><ul><li><p>10 de julio: fase 1 en Canadá, 180 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04450004">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac14-julio">x</p></div><div class="vacunaBlock vacuna14Block-agosto"></div><div class="vacunaBlock vacuna14Block-septiembre"></div><div class="vacunaBlock vacuna14Block-octubre"></div><div class="vacunaBlock vacuna14Block-noviembre"><div class="info infoVac14-noviembre-close"><div class="infoVac14-noviembre close"><h3>Medicago Inc. - Información de noviembre</h3><ul><li><p>19 noviembre: fase 2/3 en Canadá, 30.612 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04636697">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac14-noviembre">x</p></div><div class="vacunaBlock vacuna14Block-diciembre fin-de-año"><div class="info infoVac14-diciembre-close"><div class="infoVac14-diciembre close"><h3>Medicago Inc. - Información de diciembre</h3><ul><li><p>11 de diciembre: fase 2 en Estados Unidos, 918 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04636697">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac14-diciembre">x</p></div><div class="vacunaBlock vacuna14Block-finJeringa"></div><div class="vacunaBlock vacuna14Block-ultimoTramo"></div><div class="vacunaBlock vacuna14Block-Meta"></div></div>');
        $('.vacuna14').removeClass('blockOff');
        $('.vacuna14').addClass('blockOn');
    }else {
        $('.vacuna14Row').remove(); 
        $('.vacuna14').removeClass('blockOn');
        $('.vacuna14').addClass('blockOff');
    }
});

$(document).on('click','.vacuna14Block-logo',function() {
    if($('.infoVac14-logo').hasClass('close')) {
        $('.infoVac14-logo').addClass('open');
        $('.infoVac14-logo').removeClass('close');
    } else if($('.infoVac14-logo').hasClass('open')){
        $('.infoVac14-logo').addClass('close');
        $('.infoVac14-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna14Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna14Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac14-julio-close',function() {
    $('.infoVac14-julio').addClass('open');
    $('.infoVac14-julio').css('display','block');
    $('.cerrar-Vac14-julio').css('display','block');
});
$(document).on('click','.cerrar-Vac14-julio',function() {
    $('.infoVac14-julio').css('display','none');
    $('.cerrar-Vac14-julio').css('display','none');
});
$(document).on('click','.infoVac14-julio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac14-julio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac14-noviembre-close',function() {
    $('.infoVac14-noviembre').addClass('open');
    $('.infoVac14-noviembre').css('display','block');
    $('.cerrar-Vac14-noviembre').css('display','block');
});
$(document).on('click','.cerrar-Vac14-noviembre',function() {
    $('.infoVac14-noviembre').css('display','none');
    $('.cerrar-Vac14-noviembre').css('display','none');
});
$(document).on('click','.infoVac14-noviembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac14-noviembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac14-diciembre-close',function() {
    $('.infoVac14-diciembre').addClass('open');
    $('.infoVac14-diciembre').css('display','block');
    $('.cerrar-Vac14-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac14-diciembre',function() {
    $('.infoVac14-diciembre').css('display','none');
    $('.cerrar-Vac14-diciembre').css('display','none');
});
$(document).on('click','.infoVac14-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac14-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


//Sobre vacuna 15 (CureVac)

$('.vacuna15').click(function () {
    if($('.vacuna15').hasClass('blockOff')) {
        $('.carreraIn').append('<div class="vacunaOnRow vacuna15Row"><div class="vacunaBlock vacuna15Block-logo"><p class="vacuna-info-tit">CureVac</p><div class="logo-de-vacuna infoVac15-logo close"><h2>CureVac</h2><h3>Fase 2/3</h3><p>La vacuna desarrollada por la compañía neerlandesa-alemana CureVac es otra que se basa en una molécula de ARNm con información del SARS-CoV-2, pero, a diferencia de Moderna y Pfizer, el preparado requiere ser almacenado a temperaturas menos frías. Se aplican dos dosis.</p><p style="color: red">Cerrar</p></div></div><div class="vacunaBlock vacuna15Block-marzo"></div><div class="vacunaBlock vacuna15Block-abril"></div><div class="vacunaBlock vacuna15Block-mayo"></div><div class="vacunaBlock vacuna15Block-junio"><div class="info infoVac15-junio-close"><div class="infoVac15-junio close"><h3>CureVac - Información de junio</h3><ul><li><p>18 de junio: fase 1 en Bélgica y Alemania, 280 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04449276">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac15-junio">x</p></div><div class="vacunaBlock vacuna15Block-julio"></div><div class="vacunaBlock vacuna15Block-agosto"><div class="info infoVac15-agosto-close"><div class="infoVac15-agosto close"><h3>CureVac - Información de agosto</h3><ul><li><p>17 de agosto: fase 2 en Perú y Panamá, 660 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04515147">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac15-agosto">x</p></div><div class="vacunaBlock vacuna15Block-septiembre"></div><div class="vacunaBlock vacuna15Block-octubre"></div><div class="vacunaBlock vacuna15Block-noviembre"></div><div class="vacunaBlock vacuna15Block-diciembre fin-de-año"><div class="info infoVac15-diciembre-close"><div class="infoVac15-diciembre close"><h3>CureVac - Información de diciembre</h3><ul><li><p>14 de diciembre: fase 2/3 en Alemania, 36.500 participantes.</p><a target="_blank" href="https://www.clinicaltrials.gov/ct2/show/NCT04652102?term=curevac&cond=Covid19&draw=2">Link de referencia</a></li><li><p>16 de diciembre: fase 3 en Alemania, 2.520 participantes.</p><a target="_blank" href="https://clinicaltrials.gov/ct2/show/NCT04674189">Link de referencia</a></li></ul></div></div><p class="cerrar cerrar-Vac15-diciembre">x</p></div><div class="vacunaBlock vacuna15Block-finJeringa"></div><div class="vacunaBlock vacuna15Block-ultimoTramo"></div><div class="vacunaBlock vacuna15Block-Meta"></div></div>');
        $('.vacuna15').removeClass('blockOff');
        $('.vacuna15').addClass('blockOn');
    }else {
        $('.vacuna15Row').remove(); 
        $('.vacuna15').removeClass('blockOn');
        $('.vacuna15').addClass('blockOff');
    }
});

$(document).on('click','.vacuna15Block-logo',function() {
    if($('.infoVac15-logo').hasClass('close')) {
        $('.infoVac15-logo').addClass('open');
        $('.infoVac15-logo').removeClass('close');
    } else if($('.infoVac15-logo').hasClass('open')){
        $('.infoVac15-logo').addClass('close');
        $('.infoVac15-logo').removeClass('open');
    } 
});
$(document).on('click','.vacuna15Block-logo',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.vacuna15Block-logo-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac15-junio-close',function() {
    $('.infoVac15-junio').addClass('open');
    $('.infoVac15-junio').css('display','block');
    $('.cerrar-Vac15-junio').css('display','block');
});
$(document).on('click','.cerrar-Vac15-junio',function() {
    $('.infoVac15-junio').css('display','none');
    $('.cerrar-Vac15-junio').css('display','none');
});
$(document).on('click','.infoVac15-junio-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac15-junio-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac15-agosto-close',function() {
    $('.infoVac15-agosto').addClass('open');
    $('.infoVac15-agosto').css('display','block');
    $('.cerrar-Vac15-agosto').css('display','block');
});
$(document).on('click','.cerrar-Vac15-agosto',function() {
    $('.infoVac15-agosto').css('display','none');
    $('.cerrar-Vac15-agosto').css('display','none');
});
$(document).on('click','.infoVac15-agosto-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac15-agosto-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});

$(document).on('click','.infoVac15-diciembre-close',function() {
    $('.infoVac15-diciembre').addClass('open');
    $('.infoVac15-diciembre').css('display','block');
    $('.cerrar-Vac15-diciembre').css('display','block');
});
$(document).on('click','.cerrar-Vac15-diciembre',function() {
    $('.infoVac15-diciembre').css('display','none');
    $('.cerrar-Vac15-diciembre').css('display','none');
});
$(document).on('click','.infoVac15-diciembre-close',function() {
    var k = $(window).width();
    if(k < 480) {
        $('.infoVac15-diciembre-mobile').css('display','block');
        $('.titular-textos').css('display','none');
        $('.vacunasSite-mobile').css('display','none');
        $('.carreraSite').css('display','none');
        $('.nota-ensayos').css('display','none');
        $('footer').css('display','none');
        $('.leyenda').css('display','none');
    }
});


$(document).on('click','.info',function() {
    const h = $(this).find('.open').height();
    if(h > 300) {
        $('.open').css('height','300px');
        $('.open').css('overflow','scroll');
    }

});

