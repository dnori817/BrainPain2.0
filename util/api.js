var api = {
  getQuiz(){
    var url= `https://opentdb.com/api.php?amount=10`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
