export type TRoadmap = IRoadmapSegment[];

export interface IRoadmapSegment {
    label: string;
    points: IRoadmapPoint[];
}

export interface IRoadmapPoint {
    label: string;
    isCurrent?: boolean;
}

export const roadmapPoints: TRoadmap = [
    {
        label: 'Quarter 1, 2018',
        points: [
            {label: 'UX Design'},
            {label: 'Developing core'}
        ]
    }, {
        label: 'Quarter 2, 2018',
        points: [
            {label: 'Wallet improvements'},
            {label: 'Bitcoin, Litecoin, Dash, Ethereum Support'},
            {label: 'Cryptocurrency exchange'},
            {label: 'Chrome and Mozilla Firefox extension', isCurrent: true},
        ]
    }, {
        label: 'Quarter 3, 2018',
        points: [
            {label: 'Mobile app (iOS,Android)'},
            {label: 'Segwit support'},
            {label: 'Public network explorers'},
            {label: 'Buy by card'}
        ]
    }, {
        label: 'Quarter 4, 2018',
        points: [
            {label: 'Buy by card'},
            {label: 'Smart-contracts'},
            {label: 'Built-in exchange'}
        ]
    }
];
