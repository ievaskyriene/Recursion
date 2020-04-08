console.log('veikia')


function factorial(x){
    if (x == 1){
        return x;
    }else{
        return x*=factorial(x-1);
    }
}

console.log(factorial(5))



const diskas = [
    {
        name: 'folder a',
        content : [
            {
                name: 'folder b',
                content: [
                    'file 1',
                    'file 2'
                ]
            },
            'file 3',
            'file 4'
        ]
    },
    {
        name: 'folder c',
        content : [
            {
                name: 'folder d',
                content: [
                    'file 5',
                    'file 6'
                ]
            },
            {
                name: 'folder e',
                content: []
            },
            {
                name: 'folder f',
                content: []
            },
            'file 7'
        ]
    },
    'file 8',
    'file 9',
    'file 10'
];

/*function print(discdata){
    let diskasC = document.querySelector('.diskasC')
    let HTML = ''
    for(let i = 0; i<discdata.length; i++){

        if(typeof discdata[i] === 'string'){
            HTML += `<div class = "main"> ${discdata[i]};</div>`
        }

        if(typeof discdata[i].name === 'string'){
            HTML += `<div class = "name"> ${discdata[i].name};</div>`
            }

    }
   
    return diskasC.innerHTML = HTML
}

print(diskas)*/

function prettyPrint(discdata){
    let diskasC = document.querySelector('.diskasC')
    let HTML = ''
    if (Array.isArray(discdata)){
        for(let i = 0; i<discdata.length; i++){
            if(typeof discdata[i] === 'string'){
                HTML += `<div class = "main"> ${discdata[i]};</div>`
            }
            else{
                let objectValues = Object.values(discdata[i])
                HTML += prettyPrint(objectValues)

            }
        }
    }



    return diskasC.innerHTML = HTML
   
}

prettyPrint(diskas)
