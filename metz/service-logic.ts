@Injectable
class ServiceLogic {
    offersTable = std.resolve(OffersTable);

    addOffer(offer: Offer) {
        this.offersTable.insert(offer)
    }

    updateOffer(offer: Offer) {
        this.offersTable.update({
            gameCode: offer.gameCode,
            campaignId: offer.campaignId
        },
        std.lambda(offer => offer.id === 1))
    }
}