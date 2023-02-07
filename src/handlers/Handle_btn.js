import axios from "axios";

export const next = (id_curr, ids) => {
  var id_next = id_curr;
  display(id_next);
};
export const prev = (id_curr, ids) => {
  var id_prev = id_curr;
  display(id_prev);
};

export const display = (id) => {
  axios
    .post("/data_lesson", {
      id: id,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
