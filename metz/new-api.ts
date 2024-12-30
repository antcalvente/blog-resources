@Injectable
class NewAPI {
    service = std.resolve(ServiceLogic);

    createCampaign() {
        this.service.addOffer({id: 1, gameCode: "magic-roulette", campaignId: "1234-abc-8974-dkec-17d-fdew1"});
    }

    updateCampaign() {
        this.service.updateOffer({id: 1, gameCode: "777-luck", campaignId: "1234-abc-8974-dkec-17d-fdew1"});
    }
}