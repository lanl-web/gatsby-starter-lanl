import React from 'react';
import { formatDate } from './date';

export const formatPodcastData = (podcasts) =>
  podcasts.map(
    (
      { id, date_published, episode_number, season, summary, title },
      index,
    ) => ({
      key: `podcast-card-${id}-${index}`,
      date_published: formatDate(date_published),
      episode_number: episode_number,
      index,
      link: `/podcasts/${season?.season_podcast?.slug}`,
      podcastName: season?.season_podcast?.name ?? '',
      season: season?.shortname ?? ' ',
      summary,
      title,
    }),
  );
