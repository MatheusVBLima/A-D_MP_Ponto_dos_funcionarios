const data = document.querySelector('.data')

data.addEventListener('change', e =>{
    var teste = e.target.value
    teste =  teste.split('-').reverse().join('/')
    fetch('https://flash-point-app.herokuapp.com/api/ponto/findByDate?data=' + teste ,{
    method: 'Get',
    headers: {'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTY0NDkzMTg5Mn0.X0-goPFj-5_siI3hyQVak4-rMiUmojBxtAaXV2cefRHajXCY6CFXic4x0EfnNjFx9buv5bRuh2wT6GdpvOixlA'}
    }).then(async (response => response.json())).then(funcionarios => {  
        document.querySelector('.innerHTML').innerHTML = ''      
        funcionarios.map((val) => {
          /*   console.log(val.nome) */
            document.querySelector('.innerHTML').innerHTML += `
            <div class="main2">
                <div class="titulos">
                    <h3 class="h3_1">Hora extra<span>50%</span></h3>
                    <h3 class="h3_2">Hora extra<span>100%</span></h3>
                </div>
                <ul class="lista_funcionarios">
                    <input class="checkbox"type="checkbox">
                    <h2 class="nome_funcionario">` + val.empregado.nome + `</h2>
                    <input class="horaExtra50" type="number" placeholder="Hora extra 50%">
                    <input class="horaExtra100" type="number" placeholder="Hora extra 100%">
                </ul> 
            </div>  `        
        }) 
/* 
        const horaExtra50 = document.querySelector('.horaExtra50').value
        const horaExtra100 = document.querySelector('.horaExtra100').value */


       
    }) 
})