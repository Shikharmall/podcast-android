import { View, Text } from 'react-native'
import React from 'react'
import PodcastsList from '../components/PodcastsList'
import MainHeader from '../components/MainHeader'

export default function Header() {
    return (
        <>
            <MainHeader />
            <PodcastsList type={'Recent Podcast'}/>
            <PodcastsList type={'Famous Podcast'}/>
            <PodcastsList type={'Old Podcast'}/>
        </>
    )
}