/**
 * @author vidy3587@gmail.com
 * @Date 2021-10-25
 */

export interface TopicQueryParams {
    page: number;
    tab: 'ask' | 'share' | 'job' | 'good',
    limit: number;
    /**@description default i 'true'*/
    mdrender: 'false' | 'true'
}

export interface TopicsResponse {
    success: boolean;
    data: TopicsResponseData[];
}

export interface TopicsResponseDataAuthor {
    loginname: string;
    avatar_url: string;
}

export interface TopicsResponseData {
    id: string;
    author_id: string;
    tab: string;
    content: string;
    title: string;
    last_reply_at: string;
    good: boolean;
    top: boolean;
    reply_count: number;
    visit_count: number;
    create_at: string;
    author: TopicsResponseDataAuthor;
}