
    //Função passando como paremetro #id ou .class e depois o tamanho em vh
    function divScroll(selector, tamanho) {
        let div = document.querySelector(selector);
        div.style.overflowY = "scroll";
        div.style.overflowX = "hidden";
        div.style.height = tamanho + "vh";
    };

    //Forma de usar 1----------------------------------------------------------------------------
    //Depois do window.load vc declara a função
    window.onload = function(){
        divScroll('#div-scroll' , '80');
    }
