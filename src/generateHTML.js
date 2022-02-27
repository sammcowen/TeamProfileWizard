

const generateHTML = () => {
    for(let i =0; i<teamArr.length; i++){
        let card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data.role}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Name: ${data.name}</h6>
          <p class="card-text">Employee id : ${data.id} </p>
          <a href="#" class="card-link">${data.email}</a><br>

        
        `
        if (teamArr[i].officeNum){
            card+=`
            <p class="card-text">Office Number:${data.officeNum} </p>
            `
        }
        if (teamArr[i].github) {
            card+= `
            <a href="#" class="card-link">Github : ${data.github}</a><br>
            `
        }
        if(teamArr[i].school) {
            card+= `
            <p class="card-text">School: ${data.school} </p>
            `
        }
        
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
    <header> Team Roster</header>
    <div class="app">
    
</div>
    
</body>
</html>
    
    `
}