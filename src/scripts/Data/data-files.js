import axios from "axios";

class geoDataset {
  static url =
    "https://katalog.data.go.id/api/action/package_show?id=f5e0048f-c888-4f97-998b-3bba6292f7cb";

  static dataSet = () => {
    return axios
      .get(this.url)
      .then((response) => response.data.result.organization)
      .catch((error) => error);
  };
}

export default geoDataset;
