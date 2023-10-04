import http from "./httpService";

export async function saveResponse(response) {
  if (response.id) {
    const result = await http.put(`/contactmessage/${response.id}/`, response);
    return result.data;
  } else {
    const result = await http.post("/contactmessage/", response);
    return result.data;
  }
}

export default {
  saveResponse,
};
