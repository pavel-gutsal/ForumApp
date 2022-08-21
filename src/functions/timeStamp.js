export const timeStamp = (createdAt) => {
  const messageTime = createdAt.seconds * 1000;
  const currentTime = (new Date()).getTime();
  const diff = (currentTime - messageTime) / 1000;

  const getTime = () => {
    return new Date(createdAt.seconds * 1000)
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const getDate = () => {
    return new Date(createdAt.seconds * 1000)
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const result = [];

  if (diff < 60) {
    result.push('now');
  } else if (diff >= 60 && diff < 120) {
    result.push('a minute ago');
  } else if (diff >= 120 && diff < 300) {
    result.push('few minutes ago');
  } else if (diff >= 300 && diff < 500) {
    result.push('5 minutes ago');
  } else if (diff < 86400 && diff >= 500) {
    const time = getTime();
    result.push(time);
  } else if (diff > 86400 && diff >= 172800) {
    const time = getTime();
    result.push(time);
    result.push('yesterday');
  } else {
    const time = getTime();
    const date = getDate();
    result.push(time);
    result.push(date);
  }
  return result;
};
