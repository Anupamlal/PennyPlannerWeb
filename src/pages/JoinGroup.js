import React, { useEffect } from "react";

export const JoinGroup = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const groupId = urlParams.get("groupId");

    if (!groupId) {
      alert("Group ID is missing!");
      return;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipod|ipad/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    if (isIos) {
      const appLink = `pennyplanner://join?groupId=${groupId}`;
      window.location = appLink;

      setTimeout(() => {
        window.location = `https://apps.apple.com/app/id1234567890?groupId=${groupId}`;
      }, 2000);
    } else if (isAndroid) {
      const appLink = `pennyplanner://join?groupId=${groupId}`;
      window.location = appLink;

      setTimeout(() => {
        window.location = `https://play.google.com/store/apps/details?id=com.penny.planner&groupId=${groupId}`;
      }, 2000);
    } else {
      window.location = `/`;
    }
  }, []);

  return (
    <div>
      <h1>Joining Group...</h1>
      <p>
        If you're not redirected, please check your browser and app
        installation.
      </p>
    </div>
  );
};
