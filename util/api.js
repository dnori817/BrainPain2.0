var api = {
  getQuiz(){
    var url= `https://opentdb.com/api.php?amount=10`;
    // var category
    // var url = BASE_PATH + category
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
