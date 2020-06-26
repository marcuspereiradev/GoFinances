const formatDate = (date: Date): string => {
  const data = new Date(date);
  return Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(data);
};

export default formatDate;
