import dataTeam from "../../data/team-data.json";
import { createBioCardTeamTemplate } from "../templates/creator-templates";

const AboutUs = {
  async render() {
    return `
    <div class="container my-5">
      <h2 class="fa-2x fw-bold mb-5">Tentang Kami</h2>

      <div class="bio-card"></div>
    </div>
    `;
  },

  async afterRender() {
    const { teams } = dataTeam;
    const bioCard = document.querySelector(".bio-card");

    teams.forEach((team) => {
      bioCard.innerHTML += createBioCardTeamTemplate(team);
    });
  },
};

export default AboutUs;
