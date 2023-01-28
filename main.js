let userName = document.querySelector('#userName') //NOME DO USUÁRIO
let userDay = document.querySelector('#userDay') //DIA DO USUÁRIO
let userMonth = document.querySelector('#userMonth') //MES DO USUÁRIO
let userYear = document.querySelector('#userYear')//ANO DO USUÁRIO
let systemYear = new Date().getFullYear()//ANO DO SISTEMA
let systemMonth = new Date().getMonth()//MES DO SISTEMA
let systemDay = new Date().getDate()//DIA DO SISTEMA

userName.focus()


//Essa função serve para verificar se o mês está entre 1 e 12
//This function is used to verify if the month is between 1 and 12
function validMonth(userM){
    if(Number(userM) <= 0 || Number(userM) > 12){
        return true
    }else{
        return false
    }
}


//ESSA FUNÇÃO VERICA SE O DIA É 0. SE O USUÁRIO DIGITAR DIA '0' VAI DAR ERRO

//THIS FUNCTION VERIFIES IF THE DAY IS 0. IF THE USER TYPE DAY 0 AN ERROR WILL OCCUR
function validDay(userD){
    if(Number(userD) == 0){
        return true
    }else{
        return false
    }
}


//ESSA FUNÇÃO EU CRIEI PARA CONVERTER OS MESES DO JAVASCRIPT (DE 0 A 11) NO NOSSO MÊS PADRÃO (DE 1 A 12) PARA AJUDAR NA COMPARAÇÃO COM O DIA QUE O USUÁRIO DIGITAR

//THIS FUNCTION I CREATED TO CONVERT THE JAVASCRIPT MONTHS (FROM 0 TO 11) INTO OUR STANDARD MONTH (FROM 1 TO 12) TO HELP COMPARISON WITH THE DAY THAT THE USER TYPES
function covertMonth(systemM){
    switch(systemM){
        case 0:
            return 1
            break
        case 1:
            return 2
            break
        case 2:
            return 3
            break
        case 3:
            return 4
            break
        case 4:
            return 5
            break
        case 5:
            return 6
            break
        case 6:
            return 7
            break
        case 7:
            return 8
            break
        case 8:
            return 9
            break
        case 9:
            return 10
            break
        case 10:
            return 11
            break
        case 11:
            return 12
            break
        default:
            alert('I think there is something wrong with your computer\'s date.')
    }
}


//ADICIONEI UM EVENTO DE CLIQUE USANDO O ID DO BOTÃO

//I ADDED A CLICK EVENT USING THE ID buttonRes
buttonRes.addEventListener('click', () =>{
    //AQUI EU VALIDO OS DADOS DO USUÁRIO. VEJO SE AS LACUNAS ESTÃO VAZIAS OU SE ALGUM VALOR INVÁLIDO FOI DIGITADO
    if(userName.value.length == 0 || userYear.value.length == 0 || userYear.value > systemYear || userMonth.value.length == 0 || validMonth(userMonth.value) || validDay(userDay.value)){
        alert('[ERROR] verify the information provided and try again')
        
    //AQUI VERIFICA O MES DE FEVEREIRO

    //HER I VERIFY FEBRUARY
    }else if(Number(userMonth.value) == 2 && Number(userDay.value) > 28){
        alert('[ERROR] Verify if the day provided is compatible with the month and try again.')

    //VERIFICA OS MESES QUE SÃO DE 30 DIAS. SE O USUÁRIO DIGITAR MAIS DIAS DARÁ ERRO.

    //CHECK THE MONTHS WHICH ARE 30 DAYS. IF THE USER TYPES MORE DAYS, THERE WILL BE AN ERROR.
    }else if(Number(userMonth.value) == 4 && Number(userDay.value) > 30 || Number(userDay.value) > 30 && Number(userMonth.value) == 6 || Number(userMonth.value) == 9 &&  Number(userDay.value) > 30 || Number(userMonth.value) == 11 && Number(userDay.value) > 30){
        alert('[ERROR] Verify if the day provided is compatible with the month and try again.')
    }
    
    //AQUI VERIFICA OS MESES QUE SÃO DE 31 DIAS. SE O USUÁRIO DIGITAR MAIS DARÁ ERRO

    //HERE CHECKS THE MONTHS WHICH ARE 31 DAYS. IF THE USER TYPES MORE, THERE WILL BE AN ERROR
    else if(Number(userMonth.value) == 1 && Number(userDay.value) > 31 || Number(userMonth.value) == 3 && Number(userDay.value) > 31 || Number(userMonth.value) == 5 && Number(userDay.value) > 31 || Number(userMonth.value) == 7 && Number(userDay.value) > 31 || Number(userMonth.value) == 8 && Number(userDay.value) > 31 || Number(userMonth.value) == 10 && Number(userDay.value) > 31 || Number(userMonth.value) == 12 && Number(userDay.value) > 31){
        alert('[ERROR] Verify if the day provided is compatible with the month and try again.')
    }else{
        //currentYear FAZ A SUBTRAÇÃO DO ANO DO SISTEMA MENOS O ANO DO USUÁRIO

        //currentYear SUBTRACTS THE SYSTEM YEAR MINUS THE USER YEAR
        let currentYear = systemYear - Number(userYear.value)

        //AQUI ABAIXO SE VERIFICA SOMENTE OS MESES. SE O MES DO SISTEMA É MENOR QUE O MES DIGITADO, A PESSOA AINDA NÃO COMPLETOU ANO, E O NÃO É NECESSÁRIO VERIFICAR O DIA.

        //BELOW IT IS TO VERIFY ONLY THE MONTHS. IF THE SYSTEM MONTH IS LESS THAN THE TYPED MONTH, THE PERSON'S BIRTHDAY HAS NOT YET REACHED, AND IT IS NOT NECESSARY TO VERIFY THE DAY.
        if(covertMonth(systemMonth) < Number(userMonth.value)){
            result.innerHTML = `<p>It's not time to say happy birthday to <strong>${userName.value}</strong>.</p>`
            result.innerHTML += `<strong>${userName.value}</strong> is <strong>${currentYear - 1}</strong> years old at the moment.`
            

        //VERIFICA SE O MÊS DO SISTEMA É MAIOR DO QUE O MES DO USUÁRIO, POIS ISSO IDICA QUE A PESSOA JÁ COMPLETOU ANO

        //CHECK IF THE SYSTEM'S MONTH IS GREATER THAN THE USER'S MONTH, BECAUSE THIS INDICATES THAT THE PERSON HAS ALREADY REACHED A NEW YEAR
        }else if(covertMonth(systemMonth) > Number(userMonth.value)){
            result.innerHTML = `<p>It's time to say happy birthday to <strong>${userName.value}</strong> (even if it's too late :) )</p>`
            result.innerHTML += `<strong>${userName.value}</strong> is now ${currentYear} years old.`

        //AQUI É LEVADO EM CONSIDERAÇÃO O DIA SE CASO O MES DO USUÁRIO E O DO SISTEMA SEJAM IGUAIS. SE O DIA DO USUÁRIO FOR MENOR OU IGUAL AO DIA DO SISTEMA, SIGNIFICA QUE A PESSOA JÁ COMPLETOU ANO

        //HERE THE DAY IS TAKEN INTO CONSIDERATION IF THE MONTH OF THE USER AND THE SYSTEM ARE THE SAME. IF THE USER DAY IS LESS OR EQUAL TO THE SYSTEM DAY, IT MEANS THAT THE PERSON HAS ALREADY REACHED A NEW YEAR
        }else if(covertMonth(systemMonth) == Number(userMonth.value) && Number(userDay.value) <= systemDay){
            result.innerHTML = `<p>It's time to say happy birthday to <strong>${userName.value}</strong> (even if it's too late :) )</p>`
            result.innerHTML += `<strong>${userName.value}</strong> is now <strong>${currentYear}</strong> years old.`

        //MAIS UMA VEZ, SE O MES FOR IGUAL E O DIA DO USUÁRIO FOR MAIOR QUE O DIA DO SISTEMA, O DIA DO SISTEMA AINDA NÃO CHEGOU, E O USUÁRIO NÃO COMPLETOU ANO.

        //ONCE AGAIN, IF THE MONTH IS EQUAL AND THE USER'S DAY IS GREATER THAN THE SYSTEM DAY, THE SYSTEM DAY HAS NOT YET ARRIVED, AND THE USER HAS NOT REACHED A NEW YEAR.
        }else if(covertMonth(systemMonth) == Number(userMonth.value) && Number(userDay.value) > systemDay){
            result.innerHTML = `<p>It's not time to say happy birthday to <strong>${userName.value}</strong>.</p>`
            result.innerHTML += `<strong>${userName.value}</strong> is <strong>${currentYear - 1}</strong> years old at the moment.`
        }
    }
})