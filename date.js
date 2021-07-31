exports.getDate = function (){
    let today = new Date();
    let options = {
      weekday : "long",
      day : "numeric",
      month : "long",
      year : "numeric"
    };

    let day = today.toLocaleDateString("en-KR", options);

    return day;
};
