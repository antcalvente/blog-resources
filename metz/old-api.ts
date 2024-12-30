@Injectable
class OldAPI {
    service = std.resolve(ServiceLogic);

    updateOffer() {
        this.service.updateOffer({id: 1, gameCode: "777-mini", campaignId: null});
    }
}