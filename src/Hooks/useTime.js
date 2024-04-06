import React from "react";

const useTime = (date) => {
  let currentDate = new Date().getTime();
  let uploadedDate = new Date(date).getTime();
  let diffInSeconds = Math.floor((currentDate - uploadedDate) / 1000);
  let diffInMinutes = Math.floor((currentDate - uploadedDate) / 1000 / 60);
  let diffInHours = Math.floor((currentDate - uploadedDate) / 1000 / 60 / 60);
  let diffInDays = Math.floor(
    (currentDate - uploadedDate) / 1000 / 60 / 60 / 24
  );
  let diffInWeeks = Math.floor(
    (currentDate - uploadedDate) / 1000 / 60 / 60 / 24 / 7
  );
  let diffInMonths = Math.floor(
    (currentDate - uploadedDate) / 1000 / 60 / 60 / 24 / 30
  );
  let diffInYears = Math.floor(
    (currentDate - uploadedDate) / 1000 / 60 / 60 / 24 / 365
  );
  if (diffInYears) {
    return diffInYears + " years ago";
  } else if (diffInMonths) {
    return diffInMonths + " months ago";
  } else if (diffInWeeks) {
    return diffInWeeks + " weeks ago";
  } else if (diffInDays) {
    return diffInDays + " days ago";
  } else if (diffInHours) {
    return diffInHours + " hours ago";
  } else if (diffInMinutes) {
    return diffInMinutes + " minutes ago";
  } else {
    return diffInSeconds + " seconds ago";
  }
};
export default useTime;
