const formatNum = (num: number) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};

export const formatDate = (day: number, month: number, year: number) => {
  return `${year}-${formatNum(month + 1)}-${formatNum(day)}`;
};

export const formatTime = (time: number): string => {
  const numStr = time.toString().padStart(4, "0");

  const hours = numStr.slice(0, 2);
  const minutes = numStr.slice(2);

  return `${hours}:${minutes}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const isAuth = (): boolean => {
  let user = localStorage.getItem("user");

  return user ? true : false;
}

export const isMaster = (): boolean => {
  let user = localStorage.getItem("user");

  if(user) {
    let userObj: ProfileType = JSON.parse(user);

    return userObj.role === "master" ? true : false;
  }

  return false;
}