/**
 * @author vidy3587@gmail.com
 * @Date 2021-10-25
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';
import { BaseUrl } from '../baseUrl';
import { TopicQueryParams, TopicsResponse } from './topic.interface';

export const TopicApi = createApi({
    reducerPath: 'topicApi',
    baseQuery: fetchBaseQuery({
        prepareHeaders: (headers) => {
            const newHeaders = new Headers(headers);
            newHeaders.append('mode', 'cors');

            return Promise.resolve(newHeaders)
        },
        baseUrl: BaseUrl
    }),
    endpoints(builder) {
        return {
            getTopics: builder.query<TopicsResponse, TopicQueryParams|{}>({
                query: (params) => {
                    if (Object.keys(params).length > 0) {
                        const queryString = qs.stringify(params)
                        return `/topics?${queryString}`;
                    }
                    return '/topics';

                }
            })
        };
    },
    // serializeQueryArgs<BaseQuery, A>(_: { queryArgs: BaseQuery extends ((arg: infer A, ...args: any[]) => any) ? A : any; endpointDefinition: EndpointDefinition<any, any, any, any>; endpointName: string }): string {
    //     return '';
    // },
});

export const {useGetTopicsQuery, reducerPath: TopicApiReducerPath, middleware: TopicApiMiddleware} = TopicApi;