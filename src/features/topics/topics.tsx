/**
 * @author vidy3587@gmail.com
 * @Date 2021-10-25
 */

import React, { FunctionComponent, memo } from 'react';
import { useGetTopicsQuery } from '../../api/topic/topic';
import { TopicQueryParams } from '../../api/topic/topic.interface';
import { Box } from '@material-ui/core';
import { Loading } from '../../core/component/Loading';

interface OwnProps {
    tab: TopicQueryParams['tab']
}

type Props = OwnProps;

const Topics: FunctionComponent<Props> = memo(({tab}) => {
    const {isLoading, data: res, isSuccess, isError} = useGetTopicsQuery({
        tab
    });
    return (<Box>
        {isLoading ? <Loading/> : null}
        {isSuccess ? res?.data.map(item => {
            return <div key={item.id}>
                {item.title}
            </div>
        }) : isError ? <div>error</div> : null}
    </Box>);
});


export default Topics;
