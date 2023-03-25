export type MockHeaderModel = {
    name: string;
    url: string;
}[];

const MockHeader: MockHeaderModel = [
    {
        name: 'Project',
        url: '/project',
    },
    {
        name: 'Partners',
        url: '/partners',
    },
    {
        name: 'FAQ',
        url: '/faq',
    },
    {
        name: 'Masters',
        url: '/masters',
    },
    {
        name: 'Classes',
        url: '/classes',
    },
    {
        name: 'Course Experience',
        url: '/courseexperience',
    },
    {
        name: 'About us',
        url: '/aboutus',
    },
];

const fakeApiRequestHeader = async (): Promise<MockHeaderModel> => {
    return new Promise((resolve) => {
        resolve(MockHeader);
    });
};


export default fakeApiRequestHeader;