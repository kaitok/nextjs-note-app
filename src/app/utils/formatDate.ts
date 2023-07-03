export default function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedDate = date.toLocaleString('en-US', options);
  const formattedDateWithoutComma = formattedDate.replace(',', '');
  return formattedDateWithoutComma;
}