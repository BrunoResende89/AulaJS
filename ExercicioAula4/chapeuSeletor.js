/*
Crie uma função que seja um chapéu seletor (Harry Potter) e ao passar um nome, uma
qualidade decida em qual casa o bruxo irá ficar.
*/
  
  function chapeuSeletor(qualidade1, qualidade2) {

    if ( qualidade1 == 'coragem' ||  qualidade2 == 'lealdade'){
        console.log("Você foi escolhido para ficara em Grifinória")
    } else if( qualidade1 == 'ambiciosos' || qualidade2 == 'orgulhosos'){
        console.log("O bruxo sera de Sonserina")
    }else if(qualidade1 == 'Inteligente' || qualidade2 == 'focado'){
        console.log("O bruxo sera de Corvinal")
    }else if(qualidade1 == 'gentil' || qualidade2 == 'paciente'){
        console.log("O bruxo sera de Lufa-Lufa")
    }else{
        console.log('Casa não definida, escolha outras Qualidades.')
    }
}

console.log('Sugestão de duplas de qualidade : 1ª coragem e lealdade; 2ª ambicioso e orgulhoso; 3ª Inteligente e focado; 4ª gentil e paciente')
console.log(chapeuSeletor('gentil','paciente'))

  