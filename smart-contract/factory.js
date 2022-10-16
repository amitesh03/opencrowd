import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1Eca681934b51B25b3BD745C2cd67Bc4BD54555D"
);

export default instance;
