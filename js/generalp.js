var submit = document.getElementById('submit');
var message1 = document.getElementById('thankyou');
var inputet = document.getElementById('input');
var search = document.getElementById('search');
var searchSubmit = document.getElementById('searchsubmit');
var arrow = document.getElementById('wrapper');
var arrow2 = document.getElementById('wrapper2');
var content = document.getElementById('content-product');
var whole = document.getElementsByClassName('whole');
var contents = document.getElementById('content');
var description = document.getElementById('content-product');
/*SMALL MENU */
var bs2x = document.getElementById('bs2x');
var bs2 = document.getElementById('bs2');
var bs2a = document.getElementById('bs2a');
var bs2b = document.getElementById('bs2b');
var bs2c = document.getElementById('bs2c');
var bs2d = document.getElementById('bs2d');
var bs2e = document.getElementById('bs2e');
var lp2 = document.getElementsByClassName('lp2');
var op2 = document.getElementsByClassName('op2');
var sp2 = document.getElementsByClassName('sp2');
var hp2 = document.getElementsByClassName('hp2');
/* PRODUCTS */
var lappenna = document.getElementsByClassName('lappenna');
var lappstift = document.getElementsByClassName('lappstift');
var foundation = document.getElementsByClassName('foundation');
var puder = document.getElementsByClassName('puder');
var ansikte = document.getElementsByClassName('ansikte');
var antishine = document.getElementsByClassName('anti-shine');
var bas = document.getElementsByClassName('bas'); // GENERAL
var balsam = document.getElementsByClassName('balsam');
var concealer = document.getElementsByClassName('concealer');
var dipliner = document.getElementsByClassName('dipliner');
var eyeliner = document.getElementsByClassName('eyeliner'); // GLÖM INTE FLYTANDE I DENNA
var glitter = document.getElementsByClassName('glitter');
var har = document.getElementsByClassName('har'); // GENERAL
var harspray = document.getElementsByClassName('harspray');
var harolja = document.getElementsByClassName('olja'); // 
var lappar = document.getElementsByClassName('lappar'); // GENERAL
var lappglans = document.getElementsByClassName('lappglans');
var mascara = document.getElementsByClassName('mascara');
var pincett = document.getElementsByClassName('pincett');
var primer = document.getElementsByClassName('primer');
var schampo = document.getElementsByClassName('schampo');
var settingspray = document.getElementsByClassName('settingspray');
var sminkborste = document.getElementsByClassName('sminkborste');
var svamp = document.getElementsByClassName('svamp');
var ogonbryn = document.getElementsByClassName('ogonbryn'); // GENERAL
var ogonbrynspenna = document.getElementsByClassName('ogonbrynspenna');
var ogonskugga = document.getElementsByClassName('ogonskugga');
var oga = document.getElementsByClassName('oga');

/* NEWSLETTER */
submit.onclick = function () {
    function ValidateEmail(){

        var email = $('#input').val();
        if(email=="")
        {
            inputet.placeholder = 'Fyll i din E-post';
            $("#input").focus();
            return false;
        }
        
        else if(email!="")
        {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
            if (!filter.test(email)) 
            {   
                inputet.value = '';
                inputet.placeholder = 'Ange en giltig E-postadress';
                $('#input').focus();
                return false;
            }
            else {
            
                message1.style.display = 'block';
                message1.innerHTML = 'Tack för att du valt att prenumerera på vårt nyhetsbrev!';
           inputet.placeholder = 'Din E-postadress';
            inputet.value = '';
                }
        }
        }ValidateEmail();
};
/*SEARCH FUNCTION */
function validate() {
    if (search.value === 'Läppstift' || search.value === 'läppstift') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });

        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }*/
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
        whole[i].style.display = 'none'
        }
    }
    if (search.value === 'Foundation' || search.value === 'foundation') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "block"; // SHOW
        }/*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        /*
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Bas' || search.value === 'bas') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "block"; // SHOW
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "block";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "block";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Anti-shine' || search.value === 'anti-shine' || search.value === 'Primer' || search.value === 'primer') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "block"; // SHOW
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "block";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "block";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Balsam' || search.value === 'balsam') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        /*
        for (var i = 0; i < harborste.length; i++) {
            harborste[i].style.display = "none";
        }
        */
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Shampo' || search.value === 'shampo' || search.value === 'Shampoo' || search.value === 'shampoo') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Dipliner' || search.value === 'dipliner' || search.value === 'Flytande Eyeliner' || search.value === 'flytande eyeliner') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        /*
        for (var i = 0; i < lappar.length; i++) {
            lappar[i].style.display = "none";
        }
        */
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < dipliner.length; i++) {
            dipliner[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Eyeliner' || search.value === 'eyeliner') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        /*
        document.getElementById('content').scrollIntoView();
        for (var i = 0; i < lappar.length; i++) {
            lappar[i].style.display = "none";
        }*/
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "block"; // SHOW
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }*/
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < dipliner.length; i++) {
            dipliner[i].style.display = "inline";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "inline";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Glitter' || search.value === 'glitter') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "block"; // SHOW
        }/*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
        search.value = '';
        search.placeholder = 'Sök..';
    }
    if (search.value === 'Ögonskugga' || search.value === 'ögonskugga') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Hårolja' || search.value === 'hårolja' || search.value === 'Olja' || search.value === 'olja') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        /*
        for (var i = 0; i < lappar.length; i++) {
            lappar[i].style.display = "none";
        }
        */
       for (var i = 0; i < mascara.length; i++) {
        mascara[i].style.display = "none";
    }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < harborste.length; i++) {
            harborste[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Hårspray' || search.value === 'hårspray') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "inline"; // SHOW
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }/*
        for (var i = 0; i < harborste.length; i++) {
            harborste[i].style.display = "none";
        }
        */
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Hår' || search.value === 'hår') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "block";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "block";
        }
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Läppar' || search.value === 'Läppar') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "inline";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "inline";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "inline";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Läppenna' || search.value === 'läppenna') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "block"; //show
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
        search.value = '';
        search.placeholder = 'Sök..';
    }
    if (search.value === 'Läppglans' || search.value === 'läppglans') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
        search.value = '';
        search.placeholder = 'Sök..';
    }
    if (search.value === 'Mascara' || search.value === 'mascara') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < dipliner.length; i++) {
            dipliner[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
        search.value = '';
        search.placeholder = 'Sök..';
    }
    if (search.value === 'Pincett' || search.value === 'pincett') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < eyeliner.length; i++) {
            eyeliner[i].style.display = "none";
        }
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Puder' || search.value === 'puder') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        /*
        for (var i = 0; i < lappar.length; i++) {
            lappar[i].style.display = "none";
        }
        */
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "block";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Ögonbryn' || search.value === 'ögonbryn') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "block";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbryn.length; i++) {
            ogonbryn[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "block";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Ögonbrynspenna' || search.value === 'ögonbrynspenna') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Settingspray' || search.value === 'settingspray') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none";
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Svamp' || search.value === 'svamp' || search.value === 'svampar' || search.value === 'Svampar') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < sminkborste.length; i++) {
            sminkborste[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "block"; // SHOW
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Sminkborste' || search.value === 'sminkborste' || search.value === 'sminkpensel' || search.value === 'Sminkpensel' || search.value === 'sminkpenslar' || search.value === 'Sminkpenslar' || search.value === 'penslar' || search.value === 'Penslar') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "none";
        }
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < sminkborste.length; i++) {
            sminkborste[i].style.display = "inline";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none"; // SHOW
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
    if (search.value === 'Concealer' || search.value === 'concealer') {
        contents.style.display = 'flex';
        document.getElementById('content').scrollIntoView({ block: 'start',  behavior: 'smooth' });
        /*
        for (var i = 0; i < lappar.length; i++) {
            lappar[i].style.display = "none";
        }
        */
        for (var i = 0; i < bas.length; i++) {
            bas[i].style.display = "none";
        }
        for (var i = 0; i < harolja.length; i++) {
            harolja[i].style.display = "none";
        }
        for (var i = 0; i < ogonskugga.length; i++) {
            ogonskugga[i].style.display = "none";
        }
        for (var i = 0; i < ogonbrynspenna.length; i++) {
            ogonbrynspenna[i].style.display = "none";
        }
        /*
        for (var i = 0; i < har.length; i++) {
            har[i].style.display = "none";
        }
        */
        for (var i = 0; i < harspray.length; i++) {
            harspray[i].style.display = "none";
        }
        for (var i = 0; i < glitter.length; i++) {
            glitter[i].style.display = "none";
        }
        for (var i = 0; i < antishine.length; i++) {
            antishine[i].style.display = "none";
        }
        for (var i = 0; i < balsam.length; i++) {
            balsam[i].style.display = "none";
        }
        for (var i = 0; i < puder.length; i++) {
            puder[i].style.display = "none";
        }
        for (var i = 0; i < concealer.length; i++) {
            concealer[i].style.display = "inline";
        }
        for (var i = 0; i < primer.length; i++) {
            primer[i].style.display = "none";
        }
        for (var i = 0; i < foundation.length; i++) {
            foundation[i].style.display = "none";
        }
        for (var i = 0; i < lappglans.length; i++) {
            lappglans[i].style.display = "none";
        }
        for (var i = 0; i < lappstift.length; i++) {
            lappstift[i].style.display = "none";
        }
        for (var i = 0; i < lappenna.length; i++) {
            lappenna[i].style.display = "none";
        }
        for (var i = 0; i < oga.length; i++) {
            oga[i].style.display = "none";
        }
        for (var i = 0; i < pincett.length; i++) {
            pincett[i].style.display = "none";
        }
        for (var i = 0; i < sminkborste.length; i++) {
            sminkborste[i].style.display = "none";
        }
        for (var i = 0; i < settingspray.length; i++) {
            settingspray[i].style.display = "none";
        }
        for (var i = 0; i < svamp.length; i++) {
            svamp[i].style.display = "none"; // SHOW
        }
        for (var i = 0; i < mascara.length; i++) {
            mascara[i].style.display = "none";
        }
        for (var i = 0; i < schampo.length; i++) {
            schampo[i].style.display = "none";
        }
        search.value = '';
        search.placeholder = 'Sök..';
        for(var i = 0; i< whole.length; i++){
            whole[i].style.display = 'none'
            }
    }
}
if (search.placeholder == 'Sök..') {
    searchSubmit.onclick = function () {
        validate();
    }
}
// Execute a function when the user releases a key on the keyboard
search.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    validate();
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("searchSubmit").click();
        validate();
    }
});
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
                validate();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
var searchSuggestions = ["Anti-shine", "Bas", "Balsam", "Concealer", "Dipliner", "Eyeliner", "Flytande Eyeliner", "Foundation", "Glitter", "Hårspray", "Hårolja", "Hår", "Läppar", "Läppglans", "Läppenna", "Läppstift", "Mascara", "Olja", "Penslar", "Pincett", "Primer", "Puder", "Shampo", "Settingspray", "Sminkpenslar", "Svampar", "Ögonbryn", "Ögonbrynspenna", "Ögonskugga"]
autocomplete(document.getElementById("search"), searchSuggestions);
/*SMALL MENU */
$('#bs2x').click(function (event) {
    bs2.style.display = 'inline';
    bs2a.style.display = 'inline';
    bs2b.style.display = 'inline';
    bs2c.style.display = 'inline';
    bs2d.style.display = 'inline';
    bs2e.style.display = 'inline';
    for (var i = 0; i < hp2.length; i++) {
        hp2[i].style.display = 'none';
    }
    for (var i = 0; i < sp2.length; i++) {
        sp2[i].style.display = 'none';
    }
    for (var i = 0; i < lp2.length; i++) {
        lp2[i].style.display = 'none';
    }
    for (var i = 0; i < op2.length; i++) {
        op2[i].style.display = 'none';
    }
    $('html').one('click', function () {
        bs2.style.display = 'none';
        bs2a.style.display = 'none';
        bs2b.style.display = 'none';
        bs2c.style.display = 'none';
        bs2d.style.display = 'none';
        bs2e.style.display = 'none';
    });
    event.stopPropagation();
});
$('#lp2x').click(function (event) {
    for (var i = 0; i < lp2.length; i++) {
        lp2[i].style.display = 'inline';
    }
    for (var i = 0; i < hp2.length; i++) {
        hp2[i].style.display = 'none';
    }
    bs2.style.display = 'none';
    bs2a.style.display = 'none';
    bs2b.style.display = 'none';
    bs2c.style.display = 'none';
    bs2d.style.display = 'none';
    bs2e.style.display = 'none';
    for (var i = 0; i < sp2.length; i++) {
        sp2[i].style.display = 'none';
    }
    for (var i = 0; i < op2.length; i++) {
        op2[i].style.display = 'none';
    }
    $('html').one('click', function () {
        for (var i = 0; i < lp2.length; i++) {
            lp2[i].style.display = 'none';
        }
    });
    event.stopPropagation();
});
$('#op2x').click(function (event) {
    for (var i = 0; i < op2.length; i++) {
        op2[i].style.display = 'inline';
    }
    for (var i = 0; i < hp2.length; i++) {
        hp2[i].style.display = 'none';
    }
    bs2.style.display = 'none';
    bs2a.style.display = 'none';
    bs2b.style.display = 'none';
    bs2c.style.display = 'none';
    bs2d.style.display = 'none';
    bs2e.style.display = 'none';
    for (var i = 0; i < sp2.length; i++) {
        sp2[i].style.display = 'none';
    }
    for (var i = 0; i < lp2.length; i++) {
        lp2[i].style.display = 'none';
    }
    $('html').one('click', function () {
        for (var i = 0; i < op2.length; i++) {
            op2[i].style.display = 'none';
        }
    });
    event.stopPropagation();
});
$('#sp2x').click(function (event) {
    for (var i = 0; i < sp2.length; i++) {
        sp2[i].style.display = 'inline';
    }
    for (var i = 0; i < hp2.length; i++) {
        hp2[i].style.display = 'none';
    }
    bs2.style.display = 'none';
    bs2a.style.display = 'none';
    bs2b.style.display = 'none';
    bs2c.style.display = 'none';
    bs2d.style.display = 'none';
    bs2e.style.display = 'none';
    for (var i = 0; i < op2.length; i++) {
        op2[i].style.display = 'none';
    }
    for (var i = 0; i < lp2.length; i++) {
        lp2[i].style.display = 'none';
    }
    $('html').one('click', function () {
        for (var i = 0; i < sp2.length; i++) {
            sp2[i].style.display = 'none';
        }
    });
    event.stopPropagation();
});
$('#hp2x').click(function (event) {
    for (var i = 0; i < hp2.length; i++) {
        hp2[i].style.display = 'inline';
    }
    for (var i = 0; i < op2.length; i++) {
        op2[i].style.display = 'none';
    }
    bs2.style.display = 'none';
    bs2a.style.display = 'none';
    bs2b.style.display = 'none';
    bs2c.style.display = 'none';
    bs2d.style.display = 'none';
    bs2e.style.display = 'none';
    for (var i = 0; i < sp2.length; i++) {
        sp2[i].style.display = 'none';
    }
    for (var i = 0; i < lp2.length; i++) {
        lp2[i].style.display = 'none';
    }
    $('html').one('click', function () {
        for (var i = 0; i < lp2.length; i++) {
            hp2[i].style.display = 'none';
        }
    });
    event.stopPropagation();
});


var video = document.getElementById('video');
var container = document.getElementById('container');
var img = document.getElementById('header');
var topbar = document.getElementById('top-bar');
var shopbar = document.getElementById('shop-bar');


var search = document.getElementById('search');
var items = document.getElementsByClassName('autocomplete-items');

if(video== null || video.style.display == 'none'){
    var menua = document.getElementById('menu');

      topbar.style.backgroundColor = 'black';
      search.style.backgroundColor = 'black';
     // shopbar.style.backgroundColor = 'black';
  
      menua.style.backgroundColor = 'black';
      
      for(var i = 0; i < items.length; i++){
         items[i].style.backgroundColor = 'black';
}
}

