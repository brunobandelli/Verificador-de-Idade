function verificar(){                                                           // ATUAÇÃO FUNÇÃO DE BOTÃO PARA VERIFICAÇÃO
    var data= new Date()                                                        // VARIAVEL DATA
    var ano= data.getFullYear()                                                 // ANO ATUAL LINKADO COM A VARIAVEL DATA
    var fano= document.getElementById('txtano')                                 // VALOR OBTIDO DA CAIXA INPUT
    var res = document.querySelector('div#res')                                 // RESULTADO DA VERIFICAÇÃO
    if (fano.value.length == 0 || Number(fano.value) > ano){                    // CONDIÇÃO SE CASO O RESULTADO SEJÁ ZERO OU MAIOR QUE O ANO ATUAL, APRESENTAR MSG A BAIXO.
        window.alert('[ERRO] Verifique os dados e tente novamente!')            // APARECERÁ UMA JANELA COM A MSG:[ERRO] Verifique os dados e tente novamente!
    } else {                                                                    // SE NÃO
        var fsex = document.getElementsByName('radsex')                         // SELEÃO OBTIDA DA CAIXA DE SELEÇÃO DE SEXO
        var idade = ano - Number(fano.value)                                    // SUBTRAÇÃO DO VALOR DO ANO COLOCADO - O ANO ATUAL
        res.innerHTML = `Idade calculada: ${idade}`                             // PARTE DESNECESSARIA 
        var gênero = ''                                                         // PARTE DESNECESSARIA
        var aparência = ''                                                      // PARTE DESNECESSARIA
        var img = document.createElement('img')                                 // VARIAVEL QUE IRA PEGAR A IMAGEM 
        img.setAttribute('id', 'foto')                                          // PARTE DESNECESSARIA
        if (fsex[0].checked){                                                   // SE O PRIMEIRA CAIXA FOR SELECIONADO (MASCULINO)
            gênero = 'Homem'                                                    // VARIAVEL GÊNERO HOMEM
            if (idade >= 0 && idade < 10) {                                     // CONDIÇÃO SE IDADE MAIOR OU IGUAL A ZERO E MENOR DE 10 ANOS
                aparência = 'criança'                                           // VARIAVEL APARÊNCIA CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png')                      // FOTO DA CRIANÇA MASCULINA OBTIDA
            } else if (idade < 21){                                             // CONDIÇÃO SE IDADE MENOR DE 21 ANOS
                aparência = 'Jovem'                                             // ASSIM SUCESSIVAMENTE ATÉ A CONDIÇÃO DE MARCAÇÃO FOR FEMININA
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 65) {
                aparência = 'Adulto'
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                aparência = 'Idoso'
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked){                                               // SE O SEGUNDA CAIXA FOR SELECIONADO (FEMININO)
            gênero = 'Mulher'                                                    // VARIAVEL GÊNERO MULHER
            if (idade >= 0 && idade < 10) {                                      // CONDIÇÃO SE IDADE MAIOR OU IGUAL A ZERO E MENOR DE 10 ANOS
                aparência = 'criança'                                            // VARIAVEL APARÊNCIA CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')                       // FOTO DA CRIANÇA FEMININA OBTIDA
            } else if (idade < 21){                                              // CONDIÇÃO SE IDADE MENOR DE 21 ANOS
                aparência = 'Jovem'                                              // ASSIM SUCESSIVAMENTE ATÉ O ULTIMO BLOCO DE ELSE
                img.setAttribute('src', 'foto-jovem-f.png')                      
            } else if (idade < 65) {
                aparência = 'Adulto'
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                aparência = 'Idoso'
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'                                                              // ALINHAMENTO DO TEXTO                                                                  
        res.innerHTML = ` Detectamos ${gênero} com ${idade} anos com aparência de ${aparência}.`    // MSG APRESENTADA DE ACORDO COM AS INFORMAÇÕES INSERIDAS: Detectamos "gênero" com "idade" anos com aparência de "aparência".
        res.appendChild(img)                                                                        // FOTO APRESENTADA DE ACORDO COM INFORMAÇÕES INSERIDAS
    }
} 