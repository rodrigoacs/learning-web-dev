//quando uma variável é criada fora de uma função ela é global
//evitar usar o escopo global
{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123;
}
console.log(local); //erro