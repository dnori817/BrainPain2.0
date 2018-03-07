var api = {
  getQuiz(category){
    var url= `https://opentdb.com/api.php?amount=10&category= `;
    // var category
    // var url = BASE_PATH + category
    return fetch(url + category).then((res) => res.json());
  }
};

module.exports = api;
