export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('no-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'Nå nettopp';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m siden`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}t siden`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d siden`;

  return formatDate(date);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

