type Offer = {
    id: number,
    gameCode: string,
    campaignId: string | null,
}

@Injectable
@Table(['id', 'gameCode', 'campaignId'])
class OffersTable {

    @Show
    data: Offer[] = [];

    insert(recordToInsert: Offer) {
        const record: Offer = {
            ...recordToInsert
        };

        this.data.push(record);
        return record;
    }

    update(
        partialUpdate: Partial<Offer>,
        predicate: (record: Offer) => boolean,
    ) {
        const indexOfRecord = this.data.findIndex(predicate);
        if (indexOfRecord < 0) {
            return;
        }
        const existingRecord = this.data[indexOfRecord];
        const updatedRecord = {
            ...existingRecord,
            ...partialUpdate,
        };

        this.data[indexOfRecord] = updatedRecord;

        return updatedRecord;
    }
}