const CONFIG = {
  BASE_URL: "https://62e4fea8c6b56b45118d373e.mockapi.io/api/v1/destination",
};

const API_ENDPOINT = {
  detail: (id) => `${CONFIG.BASE_URL}/destination/${id}`,
};

class DestinationData {
  static async detailDestination(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DestinationData;
