import axios from 'axios'

type dataType = {
      data:  object
}

export const postDataApi = (path:string,data:dataType) => {
        const response = axios.post(`http://localhost:5000/${path}`,data);
        return response;
}