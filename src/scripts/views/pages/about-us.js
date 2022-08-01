import dataTeam from "../../data/team-data.json";
import { createBioCardTeamTemplate } from "../templates/creator-templates";

const AboutUs = {
  async render() {
    return `
    <div class="container my-5">
      <h1 class="fa-2x fw-bold mb-5 text-center">Pengembang IDventures</h1>

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
