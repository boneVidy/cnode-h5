import { Avatar, Skeleton, Box, CircularProgress } from '@material-ui/core';
import React from 'react';

export const Loading = ({number = 100}: { number?: number }) => {
    return <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}><CircularProgress/></Box>
    // return <> {new Array(number).fill(1).map((item, index) => {
    //     return <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}} key={index}>
    //         {/*<Skeleton variant="circular" animation="wave">*/}
    //         {/*    <Avatar/>*/}
    //         {/*</Skeleton>*/}
    //         {/*<Box sx={{flex: 1}}>*/}
    //         {/*    <Skeleton animation="wave" />*/}
    //         {/*    <Skeleton animation="wave" />*/}
    //         {/*</Box>*/}
    //         <CircularProgress/>
    //     </Box>
    // })}</>
}