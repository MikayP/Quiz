function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i =0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};


function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your score: " + quiz.score +  " out of 10 </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess(guess);
        populate();
    }
}

var questions = [
    new Question("What's Mike's Favorite Star Wars Movie?", ["A New Hope", "Empire Strikes Back", "Return Of the Jedi", "Phantom Menace"], "Empire Strikes Back"),
    new Question("What's Mike's best marathon time?", ["2:48", "2:53", "3:03", "3:22"], "2:48"),
    new Question("What are Mike's Siblings?", ["Only Child", "One Brother", "One Sister", "Two Sisters"], "Two Sisters"),
    new Question("Where did Mike go to college?", ["San Jose State", "UCLA", "Chico State", "USF"], "San Jose State"),
    new Question("What month was mike born in?", ["September", "Octobober", "November", "Decemeber"], "November"),
    new Question("What instrument has Mike played for 15 years?", ["Piano", "Bass", "Violin", "Guitar"], "Guitar"),
    new Question("What is Mike's middle name", ["Mark", "Francis", "Joseph", "He doesn't have one"], "Joseph"),
    new Question("What was Mike's first car?", ["Honda Civic", "Mercury Sable Station Wagon", "Toyota Corola", "Ford Bronco"], "Mercury Sable Station Wagon"),
    new Question("What was Mike's favorite band?", ["The Rolling Stones", "The Beatles", "The Eagles", "Creedence Clearwater Revival"], "The Beatles"),
    new Question("In a second life what sport would Mike want to play?", ["Baseball", "Soccer", "Football", "Hockey"], "Hockey")
];

var quiz = new Quiz(questions);

populate();
