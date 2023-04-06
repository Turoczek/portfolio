export type MockHeaderModel = {
    name: string;
    url: string;
}[];

const MockHeader: MockHeaderModel = [
    {
        name: 'Discord bot',
        url: '/discordbot',
    },
    {
        name: 'About me',
        url: '/aboutme',
    },
];

const fakeApiRequestHeader = async (): Promise<MockHeaderModel> => {
    return new Promise((resolve) => {
        resolve(MockHeader);
    });
};


export default fakeApiRequestHeader;