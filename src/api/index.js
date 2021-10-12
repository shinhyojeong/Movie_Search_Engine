import axios from "axios";

async function fetchApi(params) {
  return await axios
    .post('/.netlify/functions/workspace', {
      ...params
    })
    .then((res) => res.data);
}

export { fetchApi };

