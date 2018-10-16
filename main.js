function populate(){
    if(quiz.isEnded()){
//        showScores();
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
        }
    }
}

var questions = [
    new Question("What's Mike's Favorite Star Wars Movie?", ["A New Hope", "Empire Strikes Back", "Return Of the Jedi", "Phantom Menace"], "Empire Strikes Back"),
    new Question("What's Mike's best marathon time?" ["2:48", "2:53", "3:03", "3:22"], "2:48"),
    new Question("What's Mike's best marathon time?" ["2:48", "2:53", "3:03", "3:22"], "2:48"),
    new Question("What's Mike's best marathon time?" ["2:48", "2:53", "3:03", "3:22"], "2:48"),
    new Question("What's Mike's best marathon time?" ["2:48", "2:53", "3:03", "3:22"], "2:48")
];

var quiz = new Quiz(questions);

populate();
