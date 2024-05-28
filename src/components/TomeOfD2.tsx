import React from 'react';
import {WorkHistoryItem} from "./WorkHistoryItem.tsx";

export const TomeOfD2 = (): React.ReactNode => {
  return (
    <WorkHistoryItem
      id={1}
      title={{role: 'Creator & Developer', company: 'Tome of D2 (Diablo 2 Companion App)'}}
      date={'2018 ~ Present'}
      stack={['React', 'Ionic', 'Styled Components', 'SASS', 'Redux Toolkit', 'Axios', 'SQLite (Local database)', 'Spring Boot', 'MySQL (remote database)']}
      summary={[
        {hero: 'Conceptualized and Developed', detail: ': Created "Tome of D2," a comprehensive companion app for Diablo II players, available on both iOS and Android platforms.'},
        {hero: 'High User Engagement', detail: ': Achieved over 50,000 active installs worldwide, becoming the highest-rated Diablo II companion app on the Google Play Store and Apple App Store.'},
        {hero: 'Cross-Platform Success', detail: ': Maintained a high rating (4.29 out of 5) based on user reviews across both platforms, reflecting strong user satisfaction.'},
        {hero: 'Continuous Improvement', detail: ': Regularly updated the app with new functionalities, including enhancements to the user interface and performance.'},
        {hero: 'Purpose-Driven Development', detail: ': Developed the app to consolidate all Diablo II wiki data and integrate it with some of the most popular tools, providing players with a one-stop resource for all their in-game needs.'},
      ]}
      iframeSrc={'https://td2.alexanderjs.co.uk'}
    />
  );
};