import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getV } from '../service/api';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Main = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  height: 100%
`

const Video = styled('video')({
    height: '500px',
    width: '1000px',
})


const VideoPlayer = () => {
    const { params } = useParams();
    const [interviewData, setInterviewData] = useState();
    useEffect(() => {
        const random = () => getV(params).then(function(result) {
            console.log(result.data);
            setInterviewData(result.data);
        })

        random();
    },[])

    if (typeof interviewData === 'undefined') {
        return (
            <h1>Loading...</h1>
        )
    }
  return (
    <Main>
        <Video controls>
            <source src={`http://localhost:3000/${interviewData.path}`} type="video/mp4" />
            Your browser does not support the video tag.
        </Video>
        <Typography>{interviewData.subtitle}</Typography>
    </Main>
  )
}

export default VideoPlayer