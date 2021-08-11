import React from 'react'
import Welcome from './Welcome'
import { datadogRum } from '@datadog/browser-rum'; 

datadogRum.init({
  applicationId: 'afaf967b-9afa-401b-ae86-57d46d981e4f',
  clientToken: 'pubcd4c15328db9846d075ff357f4d0a828',
  site: 'datadoghq.com',
   service: 'prueba-1',
  //  env: 'production',
  //  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
})

export default {
  title: 'Welcome',
  component: Welcome,
}

export const ToStorybook = () => <Welcome />

ToStorybook.story = {
  name: 'to Storybook',
}
