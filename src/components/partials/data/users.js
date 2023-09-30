import { useEffect, useCallback } from "react";

function UserFetcher({ setData, setError }) {
  const fetchImage = useCallback(
    async (imageUrl) => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error("Image fetch failed");
        }
        return imageUrl;
      } catch (error) {
        console.error("Error fetching image:", error);
        return ""; // You can return a default image URL here
      }
    },
    [] // No dependencies, as it's a memoized function
  );

  const getProfileImage = useCallback(
    async (userId) => {
      const storedProfileImage = localStorage.getItem(`profileImage-${userId}`);
      if (storedProfileImage) {
        return storedProfileImage;
      }

      const profileImageUrl = await fetchImage(
        `https://source.unsplash.com/100x100/?portrait,User${userId}`
      );
      localStorage.setItem(`profileImage-${userId}`, profileImageUrl);
      return profileImageUrl;
    },
    [fetchImage] // Include fetchImage as a dependency
  );

  const getCoverImage = useCallback(
    async (userId) => {
      const storedCoverImage = localStorage.getItem(`coverImage-${userId}`);
      if (storedCoverImage) {
        return storedCoverImage;
      }

      const coverImageUrl = await fetchImage(
        `https://source.unsplash.com/800x200/?cover,User${userId}`
      );
      localStorage.setItem(`coverImage-${userId}`, coverImageUrl);
      return coverImageUrl;
    },
    [fetchImage] // Include fetchImage as a dependency
  );

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/users";

    const fetchUserImages = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const usersWithImages = data.map(async (user) => {
          const userId = user.id;
          const profileImageUrl = await getProfileImage(userId);
          const coverImageUrl = await getCoverImage(userId);
          return { ...user, profileImageUrl, coverImageUrl };
        });

        setData(await Promise.all(usersWithImages));
      } catch (fetchError) {
        setError("An error occurred while fetching data.");
        console.error(fetchError);
      }
    };

    fetchUserImages();
  }, [setData, setError, getProfileImage, getCoverImage]);

  return null;
}

export default UserFetcher;
