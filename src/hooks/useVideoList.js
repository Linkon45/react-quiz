import { useEffect, useState } from 'react';
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  get,
  startAt,
  limitToFirst,
} from 'firebase/database';

export const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt('' + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};
