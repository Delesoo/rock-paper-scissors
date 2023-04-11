const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // iwyebs tamashs
    const daiwyeTamashi = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
        //matchis tamashi
    const daiwyeMatchi = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.motamashisXeli');
        const computerHand = document.querySelector('.kompisXeli');
        const hands = document.querySelectorAll('.xelebi img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
            //kompiuteris archevani
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(options=>{
            options.addEventListener('click', function(){
                //kompiuteris gadawyvetileba
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            //aq gamovidzaxebt da shevadarebt xelebs
            
            setTimeout(() =>{
                sheadareTamashi(this.textContent, computerChoice);
            
                //suratis ganaxleba
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);    

            //animacia
            playerHand.style.animation = 'shakePlayer 2s ease';
            computerHand.style.animation = 'shakeComputer 2s ease';
            
            });

        }); 
        
    };

    const ganaaxleQula = () =>{
        playerScore = document.querySelector('.motamashisqula p');
        computerScore = document.querySelector('.kompisqula p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }

    const sheadareTamashi = (playerChoice, computerChoice) =>{
        //ganaxldeba teqtsi
        const winner =  document.querySelector('.mogebuli');
        //mowmdeba frea tu ara
        if(playerChoice === computerChoice){
            winner.textContent = 'ფრე';
            return;

        }
        //shemowmdeba tu chaa
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "მობურჭალემ მოიგო";
                pScore++
                ganaaxleQula();
                return;
            }else{
                winner.textContent = 'კომპმა მოიგო';
                cScore++
                ganaaxleQula();
                return;
            }
        }
        //shemowmdeba tu qagaldia
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "კომპმა მოიგო";
                cScore++
                ganaaxleQula();
                return;
            }else{
                winner.textContent = 'მობურჭალემ მოიგო';
                pScore++
                ganaaxleQula();
                return;
            }
        }

        //shemowmdeba tu makratelia
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "კომპმა მოიგო";
                cScore++
                ganaaxleQula();
                return;
            }else{
                winner.textContent = 'მობურჭალემ მოიგო';
                pScore++
                ganaaxleQula();
                return;
            }
        }



    }

    //idzaxebs funqcias
    daiwyeTamashi();
    daiwyeMatchi();
};

    game();