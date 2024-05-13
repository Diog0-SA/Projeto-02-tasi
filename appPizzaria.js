document.addEventListener("DOMContentLoaded", function(){

    function montarPizza(){

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "";
        
        // obtendo tamanho selecionado 
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "";

        // Cálculo em relação Sabor / Tamanho:
        if(tamanho === "Brotinho"){
            if(sabor === "Margherita"){
                custo += 18.75;
            }else if(sabor === "Calabresa"){
                custo += 21.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 22.50;
            }else if(sabor === "Portuguesa"){
                custo += 24.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 26.25;
            }else if(sabor == "Chocolate"){
                custo += 23.00;
            }else if(sabor == "Carne-seca"){
                custo += 18.0;
            }else if(sabor == "Napolitano"){
                custo += 17.50;
            }
            else if(sabor == "Baiana"){
                custo += 20.00;
            }
            else if(sabor == "Toscana"){
                custo += 17.00;
            }
            else if(sabor == "Marinheira"){
                custo += 25.00;
            }
            else if(sabor == "Tomarela"){
                custo += 25.00;
            }
            else if(sabor == "Mussarela"){
                custo += 16.00;
            }


        }else if(tamanho === "Padrao"){
            if(sabor === "Margherita"){
                custo += 25.00;
            }else if(sabor === "Calabresa"){
                custo += 28.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 30.00;
            }else if(sabor === "Portuguesa"){
                custo += 32.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 35.00;
            }else if(sabor == "Chocolate"){
                custo += 23.00;
            }else if(sabor == "Carne-seca"){
                custo += 25.0;
            }else if(sabor == "Napolitano"){
                custo += 26.50;
            }
            else if(sabor == "Baiana"){
                custo += 32.00;
            }
            else if(sabor == "Toscana"){
                custo += 23.00;
            }
            else if(sabor == "Marinheira"){
                custo += 29.00;
            }
            else if(sabor == "Tomarela"){
                custo += 32.00;
            }
            else if(sabor == "Mussarela"){
                custo += 23.00;
            }

        }else if(tamanho === "Grande"){
            if(sabor === "Margherita"){
                custo += 31.25;
            }else if(sabor === "Calabresa"){
                custo += 35.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 37.50;
            }else if(sabor === "Portuguesa"){
                custo += 40.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 43.75;
            }else if(sabor == "Chocolate"){
                custo += 23.00;
            }else if(sabor == "Carne-seca"){
                custo += 35.00;
            }else if(sabor == "Napolitano"){
                custo += 32.00;
            }
            else if(sabor == "Baiana"){
                custo += 40.00;
            }
            else if(sabor == "Toscana"){
                custo += 27.50;
            }
            else if(sabor == "Marinheira"){
                custo += 36.00;
            }
            else if(sabor == "Tomarela"){
                custo += 40.00;
            }
            else if(sabor == "Mussarela"){
                custo += 28.00;
            }
        }

        // Borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Tamanho não selecionado';

        if(borda === "Sem Borda"){
            custo += 0.00;
        }else if(borda === "Tradicional"){
            custo += 0.00;
        }else if(borda === "Recheada Catupiry"){
            custo += 2.00;
        }else if(borda === "Recheada Cheddar"){
            custo += 3.00;
        }else if(borda == "Recheada Chocolate"){
            custo += 4.50;
        }else if(borda == "Recheada Calabresa"){
            custo += 3.80;
        }

        //Ingredientes Extras:
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckbox){
            custo += 2.00;
            extra += "<br>   - Queijo"
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if(cheddarExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Cheddar"
        }
        
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if(baconExtraCheckbox){
            custo += 3.00;
            extra += "<br>   - Bacon"
        }
        
        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
        if(pepperoniExtraCheckbox){
            custo += 4.00;
            extra += "<br>   -  Pepperoni"
        }

        let chocolateExtraCheckbox = document.querySelector('input[name="extra-chocolate"]:checked')
        if(chocolateExtraCheckbox){
            custo += 4.50;
            extra += "<br>   -  Chocolate"
        }

        let catupiryExtraCheckbox = document.querySelector('input[name="extra-catupiry"]:checked')
        if(catupiryExtraCheckbox){
            custo += 2.50;
            extra += "<br>   -  Catupiry"
        }
        
        // Opcionais
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if(oreganoOpcionalCheckbox){
            opcionais += "<br>   - Oregano"
        }
        
        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if(azeitonaOpcionalCheckbox){
            opcionais += "<br>   - Azeitona"
        }
        
        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if(azeiteOpcionalCheckbox){
            opcionais += "<br>   - Azeite"
        }
        
        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked')
        if(pimentaOpcionalCheckbox){
            opcionais += "<br>   - Pimenta"
        }

        let pimentaDoReinoOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta-do-reino"]:checked')
        if(pimentaDoReinoOpcionalCheckbox){
            opcionais += "<br>   - Pimenta do reino"
        }

        let manjeiricaoOpcionalCheckbox = document.querySelector('input[name="opcionais-manjeiricao"]:checked')
        if(manjeiricaoOpcionalCheckbox){
            opcionais += "<br>   - Manjeiricão"
        }

        let tomateOpcionalCheckbox = document.querySelector('input[name="opcionais-tomate"]:checked')
        if(tomateOpcionalCheckbox){
            opcionais += "<br>   - Tomate"
        }

        let semAzeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-sem-azeitona"]:checked')
        if(semAzeitonaOpcionalCheckbox){
            opcionais += "<br>   - Sem azeitona"
        }

        let semCebolaOpcionalCheckbox = document.querySelector('input[name="opcionais-sem-cebola"]:checked')
        if(semCebolaOpcionalCheckbox){
            opcionais += "<br>   - Sem cebola"
        }
        // Monta todo o pedido numa variavel:
        descricao += "   - " + sabor + "<br>   - " + tamanho + "<br>   - " + borda + extra + opcionais;
        
        
        
        // Envia dados do pedido para o pedido.html em JSON:
        const pedidoJSON = {
            "descricao": descricao,
            "total":custo.toFixed(2)
        }

        const pedidoString = JSON.stringify(pedidoJSON);

        // Redireciona para pedido.html e envia os dados do pedido:
        window.location.href = `pedido?pedido=${pedidoString}`;
    }

    //Chama a função montarpizza ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});
