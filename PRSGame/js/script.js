var paper = document.querySelector('.paper'),
    rock = document.querySelector('.rock'),
    scissor = document.querySelector('.scissor'),
    myNumber = 0,
    compNumber = 0,
    myScore = document.querySelector('.my-score'),
    compScore = document.querySelector('.comp-score'),
    scoreText = document.querySelector('.score-text'),
    text = document.querySelector('.comp-chose'),
    scoreText = document.querySelector('.score-text'),
    start = document.querySelector('.start'),
    close = document.querySelector('.close'),
    img = document.createElement('img'),
    img2 = document.createElement('img'),
    compChose = document.querySelector('.comp-chose'),
    playerChose = document.querySelector('.player-chose');


paper.addEventListener('click', function(){
    
    var a = Math.floor((Math.random() * 3 + 1));
    
    playerChose.appendChild(img2);
    img2.setAttribute('src','images/paper.png');
    
    if (a == 1){
    compChose.appendChild(img);
    img.setAttribute('src','images/paper.png')    
    }
    if (a == 2){
    compChose.appendChild(img);
    img.setAttribute('src','images/rock.png')  
    }
    if (a == 3){
    compChose.appendChild(img);
    img.setAttribute('src','images/scissor.png')  
    }
    
    if (a == 1){
        scoreText.innerHTML = 'Tie game';
    }
    
    if (a == 2){
        scoreText.innerHTML = 'You won';
        myNumber++;
        
    }
    
    if (a == 3){
        scoreText.innerHTML = 'You lose';
        compNumber++;
    }
    
    myScore.innerHTML = myNumber;
    compScore.innerHTML = compNumber;
    
    checkWhoWon();
    
})

rock.addEventListener('click', function(){
    
    var a = Math.floor((Math.random() * 3 + 1));
    
    playerChose.appendChild(img2);
    img2.setAttribute('src','images/rock.png');
    
    if (a == 1){
    compChose.appendChild(img);
    img.setAttribute('src','images/paper.png')    
    }
    if (a == 2){
    compChose.appendChild(img);
    img.setAttribute('src','images/rock.png')  
    }
    if (a == 3){
    compChose.appendChild(img);
    img.setAttribute('src','images/scissor.png')  
    }
    
    if (a == 2){
        scoreText.innerHTML = 'Tie game';
    }
    
    if (a == 3){
        scoreText.innerHTML = 'You won';
        myNumber++;
    }
    
    if (a == 1){
        scoreText.innerHTML = 'You lose';
        compNumber++;
    }
    
    myScore.innerHTML = myNumber;
    compScore.innerHTML = compNumber;
    
    checkWhoWon();
    
})

scissor.addEventListener('click', function(){
        
    var a = Math.floor((Math.random() * 3 + 1));
    
    playerChose.appendChild(img2);
    img2.setAttribute('src','images/scissor.png'); 
    
    if (a == 1){
    compChose.appendChild(img);
    img.setAttribute('src','images/paper.png')    
    }
    if (a == 2){
    compChose.appendChild(img);
    img.setAttribute('src','images/rock.png')  
    }
    if (a == 3){
    compChose.appendChild(img);
    img.setAttribute('src','images/scissor.png')  
    }
    
    if (a == 3){
        scoreText.innerHTML = 'Tie game';
    }
    
    if (a == 1){
        scoreText.innerHTML = 'You won';
        myNumber++;
    }
    
    if (a == 2){
        scoreText.innerHTML = 'You lose';
        compNumber++;
    }
    
    myScore.innerHTML = myNumber;
    compScore.innerHTML = compNumber; 
    
    checkWhoWon();
    
})

start.addEventListener('click', function(){
    
    document.querySelector('.name-window').style.display ='block';
    
})

document.querySelector('#btnCancel').addEventListener('click',function(){
    
    document.querySelector('.name-window').style.display ='none';
    
})

document.querySelector('#btnOk').addEventListener('click',function(){
    
    var name = document.querySelector('.name-input').value;
    
    
    myScore.innerHTML = "";
    compScore.innerHTML = "";
    scoreText.innerHTML = "";
    myNumber = 0;
    compNumber = 0;
    img.setAttribute('src','');
    img2.setAttribute('src','');
    
    
    document.querySelector('.name-window').style.display ='none';
    document.querySelector('.window-1').style.display ='none';
    document.querySelector('.window-2').style.display ='block';
    document.querySelector('.start').style.display ='none';
    document.querySelector('.close').style.display ='none';
    document.querySelector('.player').innerHTML = name;
    
    
})

document.querySelector('#btnLastOk').addEventListener('click', function(){
    
    document.querySelector('.info-wrapper').style.display = "none";
    
})

function checkWhoWon(){
    var name = document.querySelector('.name-input').value;
    
    if (myNumber == 10){
        document.querySelector('.player-msg').innerHTML = name + ' have won !';
        document.querySelector('.player-msg').style.display = "block";
        document.querySelector('.comp-msg').style.display = "none";
        document.querySelector('.info-window').style.display = "block";
        document.querySelector('.info-wrapper').style.display = "block";
        document.querySelector('.window-1').style.display ='block';
        document.querySelector('.window-2').style.display ='none';
        document.querySelector('.start').style.display ='block';
        document.querySelector('.close').style.display ='block';
    }
    if (compNumber == 10){
        document.querySelector('.info-window').style.display = "block";
        document.querySelector('.comp-msg').style.display = "block";
        document.querySelector('.player-msg').style.display = "none";
        document.querySelector('.info-wrapper').style.display = "block";
        document.querySelector('.window-1').style.display ='block';
        document.querySelector('.window-2').style.display ='none';
        document.querySelector('.start').style.display ='block';
        document.querySelector('.close').style.display ='block';
    }
    
    
}
                               
                                