import Axios, {AxiosError, AxiosResponse} from 'axios';

const axiosInstance = Axios.create();

export interface IGithubItem {
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    html_url: string;
}

export function fetchPopularRepos(language: string = 'all'): Promise<IGithubItem[] | null> {
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    const onSuccess = (axiosResponse: AxiosResponse): IGithubItem[] => {
        return axiosResponse.data.items as IGithubItem[];
    };

    const onError = (axiosError: AxiosError) => {
        console.warn(axiosError);

        return null;
    };

    return axiosInstance
        .get(encodedURI)
        .then(onSuccess)
        .catch(onError);
}
