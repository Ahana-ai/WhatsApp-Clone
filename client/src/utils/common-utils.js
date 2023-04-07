export const formatDate = (data) => {
  const hours = new Date(data)?.getHours();
  const minutes = new Date(data)?.getMinutes();

  return `${hours < 10 ? "0" + hours : hours} : ${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const downloadMedia = (event, messageUrl) => {
  event.preventDefault();

  try {
    // Fetching another api to download media from chat
    fetch(messageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        //Downloading using vanilla js
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a"); // creating anchor tag
        a.style.display = "none";
        a.href = url;

        const nameSplit = messageUrl?.split("/");
        const duplicateName = nameSplit?.pop();

        // the filename you want
        a.download = "" + duplicateName + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) =>
        console.log("Error while downloading the image ", error)
      );
  } catch (error) {
    console.log("Error while downloading the image ", error);
  }
};
