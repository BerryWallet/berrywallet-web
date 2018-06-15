interface IGASimpleEvent {
    event: string;
}

interface IGaEvent extends IGASimpleEvent {
    event: 'gaEvent';
    eventCategory: string;
    eventAction: string;
    eventLabel?: string;
    eventValue?: string;
}

export function sendAnaliticsEvent(category: string, action: string, label?: string, value?: string) {
    const eventData: IGaEvent = {
        event: 'gaEvent',
        eventCategory: category,
        eventAction: action
    };

    if (label) {
        eventData.eventLabel = label;
    }

    if (value) {
        eventData.eventValue = value;
    }

    if (dataLayer) {
        dataLayer.push(eventData);
    }
}
