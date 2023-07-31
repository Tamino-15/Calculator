function appendOperation(operation){

    document.getElementById('result').innerHTML += operation;

}

function calulationResult(){

    let container = document.getElementById('result');

    let endResult = eval(container.innerHTML);

    container.innerHTML = endResult;
}

function deleteLast(){

    let container = document.getElementById('result');

    if(container.innerHTML.endsWith(' '))
    {
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else
    {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function deleteEverything(){

    let container = document.getElementById('result');

    container.innerHTML = "" ;

}


    