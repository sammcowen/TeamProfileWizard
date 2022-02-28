

const generateHTML = (teamArr) => {
    
   let object = '';
    for(let i =0; i<teamArr.length; i++){
        object += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${teamArr[i].role}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Name: ${teamArr[i].name}</h6>
          <p class="card-text">Employee id : ${teamArr[i].id} </p>
          <a href="#" class="card-link">${teamArr[i].email}</a><br>

        
        `
        if (teamArr[i].officeNumber){
            object +=`
            <p class="card-text">Office Number:${teamArr[i].officeNumber} </p>
            `
        }
        if (teamArr[i].github) {
            object += `
            <a href="#" class="card-link">Github : ${teamArr[i].github}</a><br>
            `
        }
        if(teamArr[i].school) {
            object += `
            <p class="card-text">School: ${teamArr[i].school} </p>
            `
        }
        object+= 
        `</div>
        </div>`
    }
        return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <header><h1> Team Roster </h1></header>
    <div class="app">
    ${object}
</div>
    
</body>
</html>
    
    `
        
    
    
    
}
module.exports = generateHTML;