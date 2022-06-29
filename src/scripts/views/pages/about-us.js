import dataTeam from "../../Data/team-data.json";
import { createBioCardTeamTemplate } from "../templates/creator-templates";

const AboutUs = {
  async render() {
    return `
    <div class="container mb-5">
      <div class="title">
        <h2>Tentang Kami</h2>
      </div>

      <section class="bio-card row justify-content-center gap-4"></section>
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
