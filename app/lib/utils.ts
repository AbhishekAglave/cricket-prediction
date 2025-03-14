// /lib/utils.ts

/**
 * Format a date string into a localized date format.
 *
 * @param dateStr - The date string to format.
 * @param locale - The locale code (default: 'en-US').
 * @returns A localized date string, or 'Invalid Date' if input is invalid.
 */
export const formatDateToLocal = (dateStr: string, locale: string = 'en-US') => {
  if (!dateStr) return 'Invalid Date';

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

/**
 * Generate pagination pages with ellipsis handling.
 *
 * @param currentPage - The currently active page.
 * @param totalPages - The total number of pages.
 * @returns An array representing the pages and ellipsis (e.g. [1, 2, '...', 10]).
 */
export const generatePagination = (currentPage: number, totalPages: number): (number | string)[] => {
  // If total pages are 7 or less, return them all
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // First 3 pages with ellipsis and last 2 pages
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // Last 3 pages with ellipsis and first 2 pages
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // Middle pages with ellipses on both sides
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};
